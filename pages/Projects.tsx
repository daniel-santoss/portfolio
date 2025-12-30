import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: { name: string; color: string }[];
  challenge: string;
  solution: string;
  techStack: string;
  demoLink?: string;
  repoLink: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'E-commerce Fullstack Pro',
    description: 'Plataforma de vendas completa desenvolvida para consolidar conhecimentos em fluxos de pagamento e gestão de estado complexa.',
    category: 'Front-end',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA69yISlUf4zqvEn7KTpGqD7KbkVbTefTDILsNe0QCb0lAfdhTE0WpgN63f2EcayB8sFjD2tdPt8Qh9BQEuTt_aebMSMZAciGKSJuWfwvULkIyt4t8LKwerUAleA9W-I3nvfn07aclgpc58c5CdSs3A91ojSTsrONQoLEEsfMXcd1Pn1-pFyL16fj5eZXSyIu5RS6sOndo4ctmeYUTYKdaczW2myMC3ovcNfKi5o0k-IYRbDWLxleuNeuCUQnQAQ4fz7X8Yzt35wuFv',
    tags: [
      { name: 'React', color: 'text-blue-200' },
      { name: 'Node.js', color: 'text-green-200' },
      { name: 'Stripe API', color: 'text-purple-200' }
    ],
    challenge: 'Sincronizar o estado do carrinho entre múltiplas abas e garantir segurança na transação financeira.',
    solution: 'Implementei Context API com persistência local e Webhooks para confirmação de pagamento real-time, aprofundando meu domínio no ciclo de vida do React.',
    techStack: 'MVC • TDD',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 2,
    title: 'FinTrack Mobile - Offline First',
    description: 'Aplicativo de finanças focado em experiência do usuário fluida e funcionamento sem internet.',
    category: 'Mobile',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOBvT4c6lbqxknZ-CTw12iYQf79QdzUGUvy7R0Rpp3rKO2r4oPtupsLGZCLG0yODJFDiBrjNV6AmBBVGUoLP8LKMAX6exCwG6aCazCFtoRIM5QyxPkjVMiYaXu22EWUMuZM0XLe3wtaYkcTJZtGw94e5GMeo0KBATPouTeDAMNvwtZMlpe3Dh1ZP6cYqfYZ3_2-5NebT30DsLou2X9dMiGxRdFYorA5hhLuvSfq7ScTKutZCUjQHRs2nUG0blkzuA3oApocQ8aEqwl',
    tags: [
      { name: 'Flutter', color: 'text-cyan-200' },
      { name: 'Firebase', color: 'text-orange-200' },
      { name: 'Hive DB', color: 'text-gray-200' }
    ],
    challenge: 'Garantir que o usuário possa registrar gastos sem internet e sincronizar automaticamente ao reconectar.',
    solution: 'Desenvolvi uma camada de cache local com Hive e lógica de sincronização em background. Aprimorei meus conhecimentos em Gerência de Estado (BLoC) e Clean Architecture.',
    techStack: 'Clean Arch • MVVM',
    demoLink: '#',
    repoLink: '#'
  },
  {
    id: 3,
    title: 'WebApi - API RESTful em C#',
    description: 'API RESTful desenvolvida em C# (.NET) para gerenciamento de dados, utilizando boas práticas de desenvolvimento e arquitetura limpa.',
    category: 'Back-end',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop',
    tags: [
      { name: 'C#', color: 'text-purple-200' },
      { name: '.NET', color: 'text-violet-200' },
      { name: 'REST API', color: 'text-blue-200' }
    ],
    challenge: 'Desenvolver uma API robusta e escalável seguindo padrões de mercado e boas práticas de arquitetura de software.',
    solution: 'Implementei uma API RESTful utilizando C# e .NET, aplicando conceitos de Clean Architecture, validação de dados e tratamento de erros. Aprofundei conhecimentos em desenvolvimento backend e padrões de projeto.',
    techStack: 'REST • Clean Architecture',
    demoLink: '/project/1',
    repoLink: 'https://github.com/daniel-santoss/WebApi'
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = projectsData.filter(project =>
    filter === 'Todos' ? true : project.category === filter
  );

  return (
    <main className="flex-grow flex flex-col items-center w-full py-10 px-4 md:px-10">
      <div className="layout-content-container flex flex-col max-w-[960px] w-full gap-8">
        <header className="flex flex-col gap-6 p-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-[#112218] dark:text-white">
              Projetos & Aprendizados
            </h1>
            <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-relaxed max-w-2xl">
              Explore minha jornada de desenvolvimento. Aqui detalho não apenas o código, mas os desafios reais que enfrentei e como apliquei novas tecnologias para criar soluções eficientes e escaláveis.
            </p>
          </div>
          <nav aria-label="Filtros de Projetos" className="flex gap-3 flex-wrap pt-2">
            {['Todos', 'Front-end', 'Back-end', 'Mobile'].map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`flex h-9 items-center justify-center px-5 rounded-full text-sm font-bold transition-all border ${filter === category
                  ? 'bg-primary border-primary text-[#1A1C20] shadow-[0_0_10px_rgba(57,255,20,0.2)]'
                  : 'bg-white/5 border-white/10 text-gray-300 hover:bg-primary hover:border-primary hover:text-[#1A1C20]'
                  }`
                }
              >
                {category}
              </button>
            ))}
          </nav>
        </header>

        <section aria-label="Lista de Projetos" className="flex flex-col gap-8">
          {filteredProjects.map((project) => (
            <article key={project.id} className="group @container p-0 animate-fade-in">
              <div className="flex flex-col items-stretch justify-start rounded-2xl @xl:flex-row shadow-md hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300 bg-[#33363B] border border-transparent overflow-hidden">
                <figure
                  className="w-full @xl:w-2/5 shrink-0 bg-center bg-no-repeat bg-cover min-h-[280px] @xl:min-h-full group-hover:scale-105 transition-transform duration-500 relative m-0"
                  style={{ backgroundImage: `url("${project.image}")` }}
                  data-alt={project.title}
                  role="img"
                  aria-label={`Preview do projeto ${project.title}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1C20]/80 to-transparent @xl:hidden"></div>
                </figure>
                <div className="flex w-full flex-col p-6 gap-5">
                  <header className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold leading-tight mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                  </header>
                  <ul className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <li key={index} className={`px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold ${tag.color}`}>
                        {tag.name}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-3 p-4 rounded-xl bg-black/20 border border-transparent text-sm">
                    <div className="flex gap-3 items-start">
                      <span className="material-symbols-outlined text-orange-500 mt-0.5 text-lg shrink-0">psychology</span>
                      <div>
                        <span className="font-bold text-white block mb-0.5">O Desafio</span>
                        <p className="text-gray-400 text-xs leading-relaxed">{project.challenge}</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <span className="material-symbols-outlined text-primary mt-0.5 text-lg shrink-0">auto_awesome</span>
                      <div>
                        <span className="font-bold text-white block mb-0.5">Minha Solução e Aprendizado</span>
                        <p className="text-gray-400 text-xs leading-relaxed">{project.solution}</p>
                      </div>
                    </div>
                  </div>
                  <footer className="mt-auto pt-4 border-t border-white/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span className="material-symbols-outlined text-sm">{project.category === 'Back-end' ? 'settings_suggest' : project.category === 'Mobile' ? 'architecture' : 'handyman'}</span>
                      <span>{project.techStack}</span>
                    </div>
                    <div className="flex gap-3">
                      {project.demoLink && project.demoLink !== '#' && (
                        <Link to={project.demoLink} className="flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-primary text-white hover:text-[#1A1C20] transition-colors group/btn" title="Ver Live Demo">
                          <span className="material-symbols-outlined group-hover/btn:scale-110 transition-transform">visibility</span>
                        </Link>
                      )}
                      {project.demoLink === '#' && (
                        <a className="flex items-center justify-center size-10 rounded-full bg-white/10 hover:bg-primary text-white hover:text-[#1A1C20] transition-colors group/btn" href="#" title="Ver Design">
                          <span className="material-symbols-outlined group-hover/btn:scale-110 transition-transform">visibility</span>
                        </a>
                      )}
                      <a className="flex items-center justify-center size-10 rounded-full bg-primary hover:bg-[#32d411] text-[#1A1C20] transition-colors shadow-lg shadow-primary/20" href={project.repoLink} title="GitHub">
                        <span className="material-symbols-outlined text-lg">code</span>
                      </a>
                    </div>
                  </footer>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
};

export default Projects;