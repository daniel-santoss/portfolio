import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../OptimizedImage';
import { projectsData, TECHNOLOGIES } from '../../data/projects';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = projectsData.filter(project =>
    filter === 'Todos' ? true : project.category === filter
  );

  return (
    <section id="projetos" className="scroll-mt-20 flex flex-col items-center w-full py-10 px-4 md:px-20 xl:px-40 border-t border-white/10">
      <div className="layout-content-container flex flex-col max-w-[1080px] w-full gap-8">
        <header className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">
              Projetos
            </h1>
            <p className="text-gray-300 text-lg font-normal leading-relaxed max-w-2xl opacity-90">
              Aqui detalho não apenas o código, mas os desafios reais que enfrentei e como apliquei novas tecnologias para criar soluções eficientes e escaláveis.
            </p>
          </div>
          <nav aria-label="Filtros de Projetos" className="flex gap-3 flex-wrap pt-2">
            {['Todos', 'Full-stack', 'Front-end', 'Back-end', 'Mobile'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`flex h-9 items-center justify-center px-5 rounded-full text-sm font-bold transition-all border ${
                  filter === category
                    ? 'bg-primary border-primary text-[#1A1C20] shadow-[0_0_10px_rgba(57,255,20,0.2)]'
                    : 'bg-white/5 border-white/10 text-gray-300 hover:bg-primary hover:border-primary hover:text-[#1A1C20]'
                }`}
              >
                {category}
              </button>
            ))}
          </nav>
        </header>

        <section aria-label="Lista de Projetos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <article key={project.id} className="group animate-fade-in flex flex-col rounded-xl shadow-md hover:shadow-xl hover:border-white/10 transition-all duration-300 bg-[#33363B] border border-transparent overflow-hidden">
              <figure className="w-full h-48 relative m-0 overflow-hidden">
                <OptimizedImage
                  src={project.image}
                  alt={`Preview do projeto ${project.title}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </figure>
              <div className="flex flex-col p-5 gap-3 flex-1">
                <header>
                  <h3 className="text-lg font-bold leading-tight mb-1 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-6 min-h-[3rem]">
                    {project.shortDescription || project.description}
                  </p>
                </header>
                <ul className="flex flex-wrap gap-1.5 mt-auto">
                  {project.techStack.map((techKey) => {
                    const tech = TECHNOLOGIES[techKey];
                    if (!tech) return null;
                    return (
                      <li key={techKey} className={`px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium ${tech.tagColor}`}>
                        {tech.name}
                      </li>
                    );
                  })}
                </ul>
                <footer className="pt-3 border-t border-white/10 flex items-center justify-end">
                  <div className="flex gap-2">
                    <Link to={`/project/${project.id}`} className="flex items-center justify-center size-9 rounded-full bg-white/10 hover:bg-primary text-white hover:text-[#1A1C20] transition-colors group/btn" title="Ver Detalhes">
                      <span className="material-symbols-outlined text-xl group-hover/btn:scale-110 transition-transform">visibility</span>
                    </Link>
                    <a className="flex items-center justify-center size-9 rounded-full bg-primary hover:bg-[#32d411] text-[#1A1C20] transition-colors shadow-lg shadow-primary/20" href={project.repoLink} target="_blank" rel="noopener noreferrer" title="GitHub">
                      <span className="material-symbols-outlined text-lg">code</span>
                    </a>
                  </div>
                </footer>
              </div>
            </article>
          ))}
        </section>
      </div>
    </section>
  );
};

export default ProjectsSection;
