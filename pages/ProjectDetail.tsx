import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';
import Lightbox from '../components/Lightbox';
import { projectsData, TECHNOLOGIES } from '../data/projects';

// Helper de navegação entre projetos
const getProjectNavigation = (currentId: string) => {
  const currentIndex = projectsData.findIndex(p => String(p.id) === String(currentId));
  const prevProject = currentIndex > 0 ? projectsData[currentIndex - 1] : null;
  const nextProject = currentIndex < projectsData.length - 1 ? projectsData[currentIndex + 1] : null;
  return {
    prev: prevProject ? { id: prevProject.id, title: prevProject.title } : null,
    next: nextProject ? { id: nextProject.id, title: nextProject.title } : null
  };
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projectsData.find(p => String(p.id) === String(id)) || projectsData[0];
  const navigation = getProjectNavigation(String(project.id));

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="bg-background-dark min-h-screen text-white font-public flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
          <Link to="/#projetos" className="text-primary hover:underline">Voltar para Projetos</Link>
        </div>
      </div>
    );
  }


  return (
    <div className="bg-background-dark min-h-screen text-white font-public flex flex-col">
      <Lightbox
        images={project.gallery}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNavigate={setLightboxIndex}
      />

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
          <div className="mb-8">
            <Link to="/#projetos" className="inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors group">
              <span className="material-symbols-outlined mr-1 text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
              Voltar para Projetos
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-start">
            <header className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">{project.type}</span>
                <span className="text-gray-500 text-sm flex items-center gap-1">
                  <span className="material-symbols-outlined text-base">calendar_month</span>
                  {project.date}
                </span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                {project.title}
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.techStack.map((techKey) => {
                  const tech = TECHNOLOGIES[techKey];
                  if (!tech) return null;
                  return (
                    <div key={techKey} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-dark border border-white/5">
                      {tech.iconType === 'font' ? (
                        <span className="material-symbols-outlined text-sm" style={{ color: tech.color }}>{tech.icon}</span>
                      ) : (
                        <OptimizedImage src={tech.icon} alt={tech.name} className="size-4 object-contain" />
                      )}
                      <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                {project.gallery && project.gallery.length > 0 && (
                  <button
                    onClick={() => openLightbox(0)}
                    className="inline-flex h-12 px-6 bg-surface-dark text-white font-bold text-sm rounded-full items-center justify-center gap-2 border border-white/10 hover:border-primary/50 hover:bg-surface-dark/80 transition-all"
                  >
                    <span className="material-symbols-outlined text-lg">photo_library</span>
                    Fotos do Projeto ({project.gallery.length})
                  </button>
                )}
                <a className="inline-flex h-12 px-6 bg-surface-dark text-white font-bold text-sm rounded-full items-center justify-center gap-2 border border-white/10 hover:border-primary/50 hover:bg-surface-dark/80 transition-all" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined text-lg">code</span>
                  Ver no GitHub
                </a>
                {project.deployLink && (
                  <a className="inline-flex h-12 px-6 bg-primary text-background-dark font-bold text-sm rounded-full items-center justify-center gap-2 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all" href={project.deployLink} target="_blank" rel="noopener noreferrer">
                    <span className="material-symbols-outlined text-lg">rocket_launch</span>
                    Deploy
                  </a>
                )}
              </div>
            </header>

            <section className="bg-surface-dark rounded-2xl p-6 border border-white/5" aria-labelledby="destaques-tecnicos">
              <h4 id="destaques-tecnicos" className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">stars</span>
                Destaques Técnicos
              </h4>
              <ul className="space-y-4">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="material-symbols-outlined text-primary text-xl mt-0.5">check_circle</span>
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <nav aria-label="Navegação entre projetos" className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            {navigation.prev ? (
              <Link to={`/project/${navigation.prev.id}`} className="group flex items-center gap-4 text-left w-full md:w-auto p-4 rounded-xl hover:bg-surface-dark transition-colors">
                <div className="size-12 rounded-full bg-surface-dark flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">arrow_back</span>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Projeto Anterior</p>
                  <p className="text-white font-bold text-lg group-hover:text-primary transition-colors">{navigation.prev.title}</p>
                </div>
              </Link>
            ) : (
              <div className="w-full md:w-auto p-4"></div>
            )}
            <div className="hidden md:block h-12 w-px bg-white/10"></div>
            {navigation.next ? (
              <Link to={`/project/${navigation.next.id}`} className="group flex items-center gap-4 text-right justify-end w-full md:w-auto p-4 rounded-xl hover:bg-surface-dark transition-colors">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Próximo Projeto</p>
                  <p className="text-white font-bold text-lg group-hover:text-primary transition-colors">{navigation.next.title}</p>
                </div>
                <div className="size-12 rounded-full bg-surface-dark flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                  <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">arrow_forward</span>
                </div>
              </Link>
            ) : (
              <div className="w-full md:w-auto p-4"></div>
            )}
          </nav>
        </div>
      </main>
    </div>
  );
};

export default ProjectDetail;