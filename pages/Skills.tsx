import React, { useState } from 'react';

const Skills: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Todas']);

  const categories = [
    'Todas',
    'Front-end',
    'Back-end',
    'Banco de Dados',
    'Cloud & DevOps',
    'Infra e Segurança',
    'Metodologias'
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

  const skillCategories = [
    {
      id: 'Front-end',
      icon: 'html',
      title: 'Front-end',
      skills: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'React', 'JavaScript', 'TypeScript', 'UI & UX Design', 'Figma']
    },
    {
      id: 'Back-end',
      icon: 'dns',
      title: 'Back-end',
      skills: ['.NET', 'C#', 'Entity Framework', 'C', 'SQL', 'APIs REST']
    },
    {
      id: 'Banco de Dados',
      icon: 'database',
      title: 'Banco de Dados',
      skills: ['MySQL', 'SQL Server', 'Supabase']
    },
    {
      id: 'Cloud & DevOps',
      icon: 'cloud',
      title: 'Cloud & DevOps',
      skills: ['Azure', 'Docker', 'CI/CD', 'Git', 'GitHub', 'GitLab']
    },
    {
      id: 'Infraestrutura e Segurança',
      icon: 'security',
      title: 'Infraestrutura e Segurança',
      skills: ['TCP/IP', 'VLANs', 'Gateway', 'DNS', 'Firewalls', 'VPNs', 'Antivírus', 'CID']
    },
    {
      id: 'Metodologias Ágeis',
      icon: 'sprint',
      title: 'Metodologias Ágeis',
      skills: ['Scrum', 'Kanban', 'Jira', 'Trello']
    }
  ];

  const proficiencyLevels = [
    {
      level: 'Avançado',
      icon: 'verified',
      colorClass: 'text-primary',
      borderColor: 'border-primary',
      hoverBorder: 'hover:border-primary/30',
      items: [
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' }
      ]
    },
    {
      level: 'Intermediário',
      icon: 'handyman',
      colorClass: 'text-cyan-400',
      borderColor: 'border-cyan-400',
      hoverBorder: 'hover:border-cyan-400/30',
      items: [
        { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { name: 'C# / .NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
        { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
      ]
    },
    {
      level: 'Básico',
      icon: 'school',
      colorClass: 'text-[#BB86FC]',
      borderColor: 'border-[#BB86FC]',
      hoverBorder: 'hover:border-[#BB86FC]/30',
      items: [
        { name: 'Cloud Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
        { name: 'DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg' },
        { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
        { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' }
      ]
    }
  ];

  return (
    <main className="flex-1 flex flex-col items-center py-10 px-4 md:px-10 lg:px-20">
      <div className="w-full max-w-[1080px] flex flex-col gap-10">
        <header className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">Habilidades e Tecnologias</h1>
            <p className="text-gray-300 text-lg font-normal leading-normal max-w-3xl opacity-90">
              Esses são os meus conhecimentos e ferramentas que utilizo no meu dia a dia.
            </p>
          </div>
        </header>
        <nav aria-label="Filtro de Categorias" className="w-full overflow-x-auto pb-2 scrollbar-hide">
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
        </nav>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillCategories.map((cat) => (
            shouldShow(cat.id) && (
              <section key={cat.id} className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm" aria-labelledby={`skill-${cat.id}`}>
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                    <span className="material-symbols-outlined text-3xl">{cat.icon}</span>
                  </div>
                  <h2 id={`skill-${cat.id}`} className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">{cat.title}</h2>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {cat.skills.map(tech => (
                    <li key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</li>
                  ))}
                </ul>
              </section>
            )
          ))}
        </div>

        <section className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-md" aria-labelledby="proficiencia-titulo">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <header className="flex-1 flex flex-col gap-4">
              <h3 className="text-primary text-lg font-bold uppercase tracking-wider">Proficiência Técnica</h3>
              <p id="proficiencia-titulo" className="text-3xl font-black leading-tight text-white">Níveis de Experiência</p>
              <p className="mt-4 text-gray-300 text-base leading-relaxed">
                <strong className="text-primary text-lg">Avançado:</strong> Uso diário com autonomia. <br></br> <strong className="text-cyan-400 text-lg">Intermediário:</strong> Boa compreensão da tecnologia e grande participação em projetos. <br></br> <strong className="text-[#BB86FC] text-lg">Básico / Estudos:</strong> Entendimento de conceitos e suas principais utilizações, porém com poucas práticas.
              </p>
            </header>

            <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {proficiencyLevels.map((levelData) => (
                <article key={levelData.level} className="flex flex-col gap-4">
                  <header className={`flex items-center gap-2 border-b-2 ${levelData.borderColor} pb-2 mb-2`}>
                    <span className={`material-symbols-outlined ${levelData.colorClass} text-xl`}>{levelData.icon}</span>
                    <h4 className={`font-bold text-lg ${levelData.colorClass}`}>{levelData.level}</h4>
                  </header>
                  <ul className="flex flex-col gap-3">
                    {levelData.items.map((item) => (
                      <li key={item.name} className={`flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent ${levelData.hoverBorder} transition-colors`}>
                        <img alt={item.name} className="size-6 object-contain" src={item.icon} />
                        <span className="font-semibold text-sm text-gray-200">{item.name}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Skills;