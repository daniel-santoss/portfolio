import React, { useState } from 'react';

const Skills: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Todas']);

  const categories = [
    'Todas',
    'Front-end',
    'Back-end',
    'Banco de Dados',
    'Cloud & DevOps',
    'IA & ML',
    'Ferramentas'
  ];

  const handleCategoryClick = (category: string) => {
    if (category === 'Todas') {
      setSelectedCategories(['Todas']);
      return;
    }

    setSelectedCategories(prev => {
      // Se "Todas" estava selecionado, remove ele e começa a lista com a nova categoria
      if (prev.includes('Todas')) {
        return [category];
      }

      // Se a categoria já está selecionada, remove ela
      if (prev.includes(category)) {
        const newCategories = prev.filter(c => c !== category);
        // Se não sobrar nenhuma, volta para "Todas"
        return newCategories.length === 0 ? ['Todas'] : newCategories;
      }

      // Se não estava selecionada, adiciona
      return [...prev, category];
    });
  };

  const isSelected = (category: string) => selectedCategories.includes(category);
  const shouldShow = (category: string) => selectedCategories.includes('Todas') || selectedCategories.includes(category);

  return (
    <main className="flex-1 flex flex-col items-center py-10 px-4 md:px-10 lg:px-20">
      <div className="w-full max-w-[1080px] flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">Habilidades e Tecnologias</h1>
            <p className="text-gray-300 text-lg font-normal leading-normal max-w-3xl opacity-90">
              Essas são as ferramentas e tecnologias que utilizo no meu dia a dia.
            </p>
          </div>
        </div>
        <section aria-label="Filtro de Categorias" className="w-full overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-5 transition-all active:scale-95 border ${isSelected(category)
                  ? 'bg-primary border-primary shadow-[0_0_10px_rgba(57,255,20,0.2)]'
                  : 'bg-white/5 border-white/10 hover:bg-primary hover:border-primary group'
                  }`}
              >
                <p className={`text-sm font-bold leading-normal ${isSelected(category)
                  ? 'text-[#1A1C20]'
                  : 'text-gray-300 group-hover:text-background-dark'
                  }`}>
                  {category}
                </p>
              </button>
            ))}
          </div>
        </section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Front-end */}
          {shouldShow('Front-end') && (
            <section className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">html</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">Front-end</h2>
              </div>
              <ul className="flex flex-wrap gap-2">
                {['HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'React', 'JavaScript', 'TypeScript', 'UI & UX Design'].map(tech => (
                  <li key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Back-end */}
          {shouldShow('Back-end') && (
            <section className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">dns</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">Back-end</h2>
              </div>
              <ul className="flex flex-wrap gap-2">
                {['C#', '.NET', 'Java', 'Spring Boot', 'SQL', 'APIs REST'].map(tech => (
                  <li key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Banco de Dados */}
          {shouldShow('Banco de Dados') && (
            <section className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">database</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">Banco de Dados</h2>
              </div>
              <ul className="flex flex-wrap gap-2">
                {['MySQL', 'SQL Server'].map(tech => (
                  <li key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Cloud & DevOps */}
          {shouldShow('Cloud & DevOps') && (
            <section className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">cloud</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">Cloud & DevOps</h2>
              </div>
              <ul className="flex flex-wrap gap-2">
                {['Azure', 'CI/CD', 'Build', 'Deploy', 'Git', 'GitHub', 'GitLab'].map(tech => (
                  <li key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</li>
                ))}
              </ul>
            </section>
          )}

          {/* IA & ML */}
          {shouldShow('IA & ML') && (
            <section className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">smart_toy</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">IA & Machine Learning</h2>
              </div>
              <ul className="flex flex-wrap gap-2">
                {['IA Generativa', 'Notebook LM', 'Google Stitch', 'Google AI Studio'].map(tech => (
                  <li key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Ferramentas */}
          {shouldShow('Ferramentas') && (
            <section className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">build</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">Ferramentas & Metodologias</h2>
              </div>
              <ul className="flex flex-wrap gap-2">
                {['Visual Studio Code', 'Google Anti-Gravity', 'Figma', 'Scrum', 'Kanban', 'Jira', 'Trello'].map(tech => (
                  <li key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <section className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-primary text-sm font-bold uppercase tracking-wider">Proficiência Técnica</h3>
              <p className="text-3xl font-black leading-tight text-white">Níveis de Experiência</p>
              <p className="mt-4 text-gray-300 text-base leading-relaxed">
                <strong className="text-primary">Avançado:</strong> Uso diário com maior autonomia; <br></br> <strong className="text-cyan-400">Intermediário:</strong> Já utilizada em projetos e com boa compreensão; <br></br> <strong className="text-[#BB86FC]">Estudos:</strong> Entendimento de conceitos e suas principais utilizações, porém ainda em fase de aprendizado.
              </p>
            </div>

            <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Avançado */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b-2 border-primary pb-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <h4 className="font-bold text-lg text-primary">Avançado</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-primary/30 transition-colors">
                    <img alt="HTML5" className="size-6 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
                    <span className="font-semibold text-sm text-gray-200">HTML5</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-primary/30 transition-colors">
                    <img alt="CSS3" className="size-6 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                    <span className="font-semibold text-sm text-gray-200">CSS3</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-primary/30 transition-colors">
                    <img alt="JavaScript" className="size-6 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                    <span className="font-semibold text-sm text-gray-200">JavaScript</span>
                  </li>
                </ul>
              </div>

              {/* Intermediário */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b-2 border-cyan-400 pb-2 mb-2">
                  <span className="material-symbols-outlined text-cyan-400 text-xl">handyman</span>
                  <h4 className="font-bold text-lg text-cyan-400">Intermediário</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-cyan-400/30 transition-colors">
                    <img alt="React" className="size-6 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                    <span className="font-semibold text-sm text-gray-200">React</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-cyan-400/30 transition-colors">
                    <img alt="C#" className="size-6 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" />
                    <span className="font-semibold text-sm text-gray-200">C# / .NET</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-cyan-400/30 transition-colors">
                    <img alt="Spring Boot" className="size-6 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                    <span className="font-semibold text-sm text-gray-200">Java / Spring Boot</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-cyan-400/30 transition-colors">
                    <img alt="SQL" className="size-6 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
                    <span className="font-semibold text-sm text-gray-200">MySQL</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-cyan-400/30 transition-colors">
                    <img alt="Azure" className="size-6 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" />
                    <span className="font-semibold text-sm text-gray-200">Cloud Azure</span>
                  </li>
                </ul>
              </div>

              {/* Estudos */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b-2 border-[#BB86FC] pb-2 mb-2">
                  <span className="material-symbols-outlined text-[#BB86FC] text-xl">school</span>
                  <h4 className="font-bold text-lg text-[#BB86FC]">Estudos</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-[#BB86FC]/30 transition-colors">
                    <img alt="DevOps" className="size-6 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg" />
                    <span className="font-semibold text-sm text-gray-200">Azure DevOps</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-[#BB86FC]/30 transition-colors">
                    <img alt="Docker" className="size-6 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" />
                    <span className="font-semibold text-sm text-gray-200">Docker</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-[#BB86FC]/30 transition-colors">
                    <img alt="Linux" className="size-6 object-contain" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" />
                    <span className="font-semibold text-sm text-gray-200">Linux</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Skills;