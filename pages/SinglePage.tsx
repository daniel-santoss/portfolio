import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';


const homeSocialLinks = [
    {
        name: 'LinkedIn',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg',
        url: 'https://www.linkedin.com/in/daniel-vinicius-07a278275/',
        newTab: true,
        hoverColor: '#0A66C2'
    },
    {
        name: 'GitHub',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg',
        url: 'https://github.com/daniel-santoss',
        newTab: true,
        hoverColor: '#ffffff'
    },
    {
        name: 'Email',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg',
        url: 'mailto:danielvinicius.santos7@gmail.com',
        newTab: false,
        hoverColor: '#EA4335'
    }
];

const HomeSection: React.FC = () => {

    return (
        <section id="sobre" className="scroll-mt-20">
            <header className="w-full px-4 md:px-20 xl:px-40 py-10 lg:py-20 flex justify-center">
                <div className="max-w-[1080px] w-full flex flex-col gap-10 lg:gap-16">
                    <div className="@container">
                        <div className="flex flex-col-reverse lg:flex-row gap-8 items-center">
                            <section className="flex flex-col gap-6 flex-1 text-center lg:text-left">
                                <div className="flex flex-col gap-3">
                                    <div className="inline-flex items-center gap-2 self-center lg:self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wide uppercase border border-primary/20">
                                        <span className="size-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#39FF14]"></span>
                                        Estagiário em Desenvolvimento de Software

                                    </div>
                                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-[-0.033em] text-white">
                                        Bem-vindo ao meu portfólio! Eu sou o <span className="text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">Daniel Vinicius.</span>
                                    </h1>
                                    <h2 className="text-sm sm:text-base lg:text-lg font-normal text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                        Sou um desenvolvedor focado na criação de soluções web e atualmente me concentro no desenvolvimento Full Stack utilizando o ecossistema React e .NET. Além disso, possuo grande interesse por cibersegurança, área à qual também venho dedicando meus estudos com o propósito de desenvolver aplicações cada vez mais robustas e protegidas.
                                    </h2>
                                </div>
                            </section>
                            <figure className="w-full lg:w-[400px] flex justify-center">
                                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-10 blur-3xl "></div>
                                    <div className="relative w-full h-full rounded-full animate-border-pulse overflow-hidden bg-surface-dark">
                                        <OptimizedImage
                                            src="/images/foto-d.jpeg"
                                            alt="Daniel Vinicius"
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </header>
        </section >
    );
};

interface Skill {
    name: string;
    icon?: string;
    invert?: boolean;
    iconClass?: string;
    iconColor?: string;
}

interface SkillCategory {
    id: string;
    title: string;
    skills: Skill[];
}

const skillsData: SkillCategory[] = [
    {
        id: 'Front-end',
        title: 'Front-end',
        skills: [
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
            { name: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        ]
    },
    {
        id: 'Back-end',
        title: 'Back-end',
        skills: [
            { name: '.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
            { name: 'C#', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
            { name: 'APIs REST', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
            { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
            { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
        ]
    },
    {
        id: 'Banco de Dados',
        title: 'Banco de Dados',
        skills: [
            { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        ]
    },
    {
        id: 'Cloud & DevOps',
        title: 'Cloud & DevOps',
        skills: [
            { name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' },
            { name: 'Azure DevOps', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg' },
            { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg', invert: true },
            { name: 'GitLab', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gitlab/gitlab-original.svg' },
            { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
            { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg' },
        ]
    },
    {
        id: 'Infra e Segurança',
        title: 'Infraestrutura e Segurança',
        skills: [
            { name: 'TCP/IP', iconClass: 'ti ti-network', iconColor: '#3B82F6' },
            { name: 'Gateway', iconClass: 'ti ti-router', iconColor: '#22C55E' },
            { name: 'Firewalls', iconClass: 'ti ti-wall', iconColor: '#ef9144ff' },
            { name: 'Antivírus', iconClass: 'ti ti-shield-check', iconColor: '#FFFFFF' },
            { name: 'VPN', iconClass: 'ti ti-lock', iconColor: '#5d13a1ff' },
        ]
    },
    {
        id: 'Metodologias',
        title: 'Metodologias Ágeis',
        skills: [
            { name: 'Scrum', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg' },
            { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
            { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg' },
        ]
    }
];

const skillCategories = ['Todas', 'Front-end', 'Back-end', 'Banco de Dados', 'Cloud & DevOps', 'Infra e Segurança', 'Metodologias'];

const SkillsSection: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('Todas');

    const filteredCategories = skillsData.filter(
        cat => selectedCategory === 'Todas' || cat.id === selectedCategory
    );

    return (
        <section id="habilidades" className="scroll-mt-20 flex flex-col items-center py-10 px-4 md:px-20 xl:px-40 border-t border-white/10">
            <div className="w-full max-w-[1080px] flex flex-col gap-10">
                <header className="flex flex-col gap-4">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">Habilidades e Tecnologias</h1>
                        <p className="text-gray-300 text-lg font-normal leading-normal max-w-3xl opacity-90">
                            Esses são os meus conhecimentos e ferramentas que utilizo no meu dia a dia.
                        </p>
                    </div>
                </header>

                <nav aria-label="Filtro de Categorias" className="w-full pb-2">
                    <div className="flex flex-wrap gap-2 md:gap-3">
                        {skillCategories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-4 md:px-5 transition-all active:scale-95 border text-xs md:text-sm ${selectedCategory === category
                                    ? 'bg-primary border-primary shadow-[0_0_10px_rgba(57,255,20,0.2)]'
                                    : 'bg-white/5 border-white/10 hover:bg-primary hover:border-primary group'
                                    }`}
                            >
                                <p className={`font-bold leading-normal ${selectedCategory === category
                                    ? 'text-[#1A1C20]'
                                    : 'text-gray-300 group-hover:text-background-dark'
                                    }`}>
                                    {category}
                                </p>
                            </button>
                        ))}
                    </div>
                </nav>

                <div className="flex flex-col gap-10">
                    {filteredCategories.map((cat) => (
                        <section key={cat.id} className="flex flex-col gap-5" aria-labelledby={`skill-${cat.id}`}>
                            <h2 id={`skill-${cat.id}`} className="text-xl font-bold text-white flex items-center gap-2">
                                <span className="h-px flex-1 bg-white/10"></span>
                                <span>{cat.title}</span>
                                <span className="h-px flex-1 bg-white/10"></span>
                            </h2>
                            <div className="flex flex-wrap gap-2 justify-center">
                                {cat.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="group flex flex-col items-center justify-center gap-3 w-[120px] h-[120px] rounded-2xl transition-all duration-300 bg-background-dark"
                                    >
                                        {skill.icon ? (
                                            <OptimizedImage
                                                src={skill.icon}
                                                alt={skill.name}
                                                className={`w-10 h-10 object-contain${skill.invert ? ' invert' : ''}`}
                                            />
                                        ) : skill.iconClass ? (
                                            <i
                                                className={skill.iconClass}
                                                style={{ color: skill.iconColor || '#FFFFFF', fontSize: '2.5rem' }}
                                                aria-hidden="true"
                                            />
                                        ) : null}
                                        <span className="text-sm font-semibold text-white text-center">{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}
                </div>
            </div>
        </section>
    );
};


const educationTimeline = [
    {
        icon: 'school',
        date: 'Fevereiro de 2025 - Dezembro de 2026 (Previsão)',
        title: 'Análise e Desenvolvimento de Sistemas',
        institution: 'Universidade Paulista (UNIP)',
        description: 'Aprofundamento técnico com foco nos conteúdos estudados: Engenharia de Software, Banco de Dados, Programação Web e Mobile, além de Arquitetura de Sistemas e práticas ágeis de desenvolvimento.',
        animate: true,
        hasLine: true,
        dateColor: 'text-primary font-bold'
    },
    {
        icon: 'school',
        date: 'Concluído em Dezembro de 2024',
        title: 'Técnico em Informática',
        institution: 'ITB Brasílio Flores de Azevedo (FIEB) - Ensino Médio Técnico',
        description: 'Esta formação foi a base essencial para o meu começo em desenvolvimento de software, consolidando minha lógica de programação e introduzindo conceitos fundamentais de algoritmos e hardware.',
        animate: false,
        hasLine: false,
        dateColor: 'text-[#637588] dark:text-primary font-medium'
    }
];

const certificationsData = [
    {
        icon: 'code',
        title: 'Bootcamp XP Inc. - Full Stack Developer',
        institution: 'DIO (Digital Innovation One)',
        date: 'Concluído em Março de 2026',
        description: 'Programa intensivo focado na formação Full Stack, abordando tecnologias como React com JavaScript e TypeScript, Next.js, .NET com C#, NoSQL, Cloud Azure, Docker e DevOps.',
        certLink: 'https://hermes.dio.me/certificates/LSPX4EUY.pdf'
    }
];

const languages = [
    {
        flag: 'https://flagcdn.com/w40/br.png',
        alt: 'Bandeira do Brasil',
        name: 'Português',
        level: 'Nativo'
    },
    {
        flag: 'https://flagcdn.com/w40/us.png',
        alt: 'Bandeira dos EUA',
        name: 'Inglês',
        level: 'Técnico'
    }
];


const EducationSection: React.FC = () => {
    return (
        <section id="jornada" className="scroll-mt-20 flex flex-col items-center px-4 md:px-20 xl:px-40 py-10 border-t border-white/10">
            <div className="layout-content-container flex flex-col max-w-[1080px] w-full gap-10">
                <section className="flex flex-col gap-6 animate-fade-in" >
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[#111418] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                            Minha Jornada Acadêmica
                        </h1>
                        <p className="text-[#637588] dark:text-[#C5C6C7] text-lg font-normal leading-normal max-w-2xl">
                            Abaixo descrevo minha trajetória acadêmica, com as instituições de ensino, cursos e bootcamps que fazem parte da minha formação.
                        </p>
                    </div>
                </section>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    <section className="lg:col-span-7 flex flex-col gap-6">
                        <h2 className="text-[#111418] dark:text-white text-2xl font-bold flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary">school</span>
                            Formação Acadêmica
                        </h2>
                        <div className="bg-white dark:bg-card-dark rounded-xl p-6 md:p-8 shadow-sm border border-[#e5e7eb] dark:border-primary/30 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                            <ul className="flex flex-col">
                                {educationTimeline.map((item, index) => (
                                    <li key={index} className="grid grid-cols-[40px_1fr] gap-x-4">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className={`w-10 h-10 shrink-0 rounded-full bg-primary/20 flex items-center justify-center text-primary z-10 shadow-[0_0_10px_rgba(57,255,20,0.2)] ${item.animate ? 'animate-pulse' : ''}`}>
                                                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                                            </div>
                                            {item.hasLine && <div className="w-[2px] bg-[#e5e7eb] dark:bg-primary/50 h-full grow my-2"></div>}
                                        </div>
                                        <div className={`flex flex-col ${item.hasLine ? 'pb-8' : ''}`}>
                                            <span className={`${item.dateColor} text-sm mb-1`}>{item.date}</span>
                                            <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">{item.title}</h3>
                                            <p className="text-[#637588] dark:text-[#C5C6C7] text-base mt-1">{item.institution}</p>
                                            <p className="text-[#637588] dark:text-[#C5C6C7] text-sm mt-3 leading-relaxed">
                                                {item.description}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="lg:col-span-5 flex flex-col gap-8">
                        <div className="flex flex-col gap-6">
                            <h2 className="text-[#111418] dark:text-white text-2xl font-bold flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">translate</span>
                                Idiomas
                            </h2>
                            <ul className="flex flex-col gap-4">
                                {languages.map((lang, index) => (
                                    <li key={index} className="bg-white dark:bg-card-dark p-5 rounded-xl border border-[#e5e7eb] dark:border-primary/30 flex items-center gap-4 shadow-md shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                                        <div className="flex-1">
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center gap-3">
                                                    <OptimizedImage alt={lang.alt} className="h-6 w-6 rounded-full object-cover shadow-sm" src={lang.flag} />
                                                    <p className="text-[#111418] dark:text-white font-bold text-lg">{lang.name}</p>
                                                </div>
                                                <span className="text-black text-xs font-bold bg-primary px-2 py-1 rounded">{lang.level}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex flex-col gap-6">
                            <h2 className="text-[#111418] dark:text-white text-2xl font-bold flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">workspace_premium</span>
                                Principais Certificações
                            </h2>
                            {certificationsData.map((cert, index) => (
                                <div key={index} className="flex-1 bg-white dark:bg-card-dark border border-[#e5e7eb] dark:border-primary/30 rounded-2xl p-6 md:p-8 flex flex-col gap-4 items-start shadow-sm relative overflow-hidden hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                                    <div className="flex items-center gap-3 w-full">
                                        <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 z-10">
                                            <span className="material-symbols-outlined text-xl">{cert.icon}</span>
                                        </div>
                                        <div className="flex-1 z-10">
                                            <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">{cert.title}</h3>
                                            <p className="text-[#637588] dark:text-[#C5C6C7] text-sm">{cert.institution}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-2 z-10">
                                        <span className="text-primary text-sm font-bold">{cert.date}</span>
                                        <p className="text-[#637588] dark:text-[#C5C6C7] text-sm leading-relaxed">
                                            {cert.description}
                                        </p>
                                    </div>
                                    {cert.certLink && (
                                        <a
                                            href={cert.certLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 text-sm font-bold text-primary hover:text-[#1A1C20] bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary px-4 py-2 rounded-lg transition-all duration-300 z-10 self-start hover:shadow-[0_0_12px_rgba(57,255,20,0.3)]"
                                        >
                                            <span className="material-symbols-outlined text-base">open_in_new</span>
                                            Exibir Certificado
                                        </a>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};


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
        title: 'Studio Tattoo INK',
        description: 'Interface web moderna para estúdio de tatuagem, focada em UI/UX. Projeto front-end com páginas de agendamento, portfólio de artistas e galeria.',
        category: 'Front-end',
        image: '/images/studioInk/capa.png',
        tags: [
            { name: 'Tailwind CSS', color: 'text-blue-200' },
            { name: 'React', color: 'text-cyan-200' },
            { name: 'TypeScript', color: 'text-blue-300' },
            { name: 'Vite', color: 'text-violet-200' }
        ],
        challenge: 'Criar uma plataforma moderna e intuitiva para gestão de estúdio de tatuagem com múltiplas funcionalidades.',
        solution: 'Desenvolvi uma aplicação web completa utilizando React 19 com TypeScript e Vite, implementando roteamento com React Router e uma interface responsiva e moderna.',
        techStack: 'React • TypeScript • Vite',
        demoLink: '/project/1',
        repoLink: 'https://github.com/daniel-santoss/StudioTattooINK'
    },
    {
        id: 2,
        title: 'Sistema Escolar',
        description: 'Sistema completo de gestão escolar via terminal, desenvolvido em C como projeto integrador do 2º semestre da faculdade.',
        category: 'Back-end',
        image: '/images/PimConsole/ImagemCapaPim.png',
        tags: [
            { name: 'C', color: 'text-blue-200' },
            { name: 'GCC', color: 'text-yellow-200' },
            { name: 'File I/O', color: 'text-green-200' },
            { name: 'Terminal', color: 'text-gray-200' }
        ],
        challenge: 'Desenvolver um sistema completo com múltiplos perfis de usuário (Admin, Professor, Aluno) e persistência de dados em arquivos.',
        solution: 'Implementei uma arquitetura modular com 7 módulos principais e 6 estruturas de dados, totalizando ~2800 linhas de código em C ANSI. O sistema gerencia turmas, alunos, professores, aulas, atividades, notas e presenças.',
        techStack: 'C • Modular • File System',
        demoLink: '/project/2',
        repoLink: 'https://github.com/daniel-santoss/PIM_II'
    },
    {
        id: 3,
        title: 'WebApi - API RESTful em C#',
        description: 'API RESTful desenvolvida em C# (.NET) para gerenciamento de dados, utilizando boas práticas de desenvolvimento e arquitetura limpa.',
        category: 'Back-end',
        image: '/images/webAPI/capa.jpg',
        tags: [
            { name: '.NET', color: 'text-violet-200' },
            { name: 'C#', color: 'text-purple-200' },
            { name: 'MySQL', color: 'text-orange-200' },
            { name: 'Entity Framework', color: 'text-purple-300' }
        ],
        challenge: 'Desenvolver uma API robusta e escalável seguindo as boas práticas de arquitetura de software.',
        solution: 'Implementei uma API RESTful utilizando C# e .NET, aplicando conceitos de Clean Architecture, validação de dados e tratamento de erros. Aprofundei conhecimentos em desenvolvimento backend e padrões de projeto.',
        techStack: 'REST • Clean Architecture',
        demoLink: '/project/3',
        repoLink: 'https://github.com/daniel-santoss/WebApi'
    }
];


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
                        <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-[#112218] dark:text-white">
                            Projetos
                        </h1>
                        <p className="text-gray-600 dark:text-gray-300 text-lg font-normal leading-relaxed max-w-2xl">
                            Aqui detalho não apenas o código, mas os desafios reais que enfrentei e como apliquei novas tecnologias para criar soluções eficientes e escaláveis.
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

                <section aria-label="Lista de Projetos" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((project) => (
                        <article key={project.id} className="group animate-fade-in flex flex-col rounded-xl shadow-md hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] transition-all duration-300 bg-[#33363B] border border-transparent hover:border-primary/30 overflow-hidden">
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
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {project.description}
                                    </p>
                                </header>
                                <ul className="flex flex-wrap gap-1.5 mt-auto">
                                    {project.tags.map((tag, index) => (
                                        <li key={index} className={`px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium ${tag.color}`}>
                                            {tag.name}
                                        </li>
                                    ))}
                                </ul>
                                <footer className="pt-3 border-t border-white/10 flex items-center justify-end">
                                    <div className="flex gap-2">
                                        {project.demoLink && project.demoLink !== '#' && (
                                            <Link to={project.demoLink} className="flex items-center justify-center size-9 rounded-full bg-white/10 hover:bg-primary text-white hover:text-[#1A1C20] transition-colors group/btn" title="Ver Detalhes">
                                                <span className="material-symbols-outlined text-xl group-hover/btn:scale-110 transition-transform">visibility</span>
                                            </Link>
                                        )}
                                        {project.demoLink === '#' && (
                                            <a className="flex items-center justify-center size-9 rounded-full bg-white/10 hover:bg-primary text-white hover:text-[#1A1C20] transition-colors group/btn" href="#" title="Ver Design">
                                                <span className="material-symbols-outlined text-xl group-hover/btn:scale-110 transition-transform">visibility</span>
                                            </a>
                                        )}
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


const contactSocialLinks = [
    {
        name: 'LinkedIn',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg',
        url: 'https://www.linkedin.com/in/daniel-vinicius-07a278275/',
        newTab: true,
        hoverColor: '#0A66C2'
    },
    {
        name: 'GitHub',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg',
        url: 'https://github.com/daniel-santoss',
        newTab: true,
        hoverColor: '#ffffff'
    },
    {
        name: 'Email',
        logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg',
        url: 'mailto:danielvinicius.santos7@gmail.com',
        newTab: false,
        hoverColor: '#EA4335'
    }
];


const ContactSection: React.FC = () => {
    return (
        <section id="contato" className="scroll-mt-20 w-full px-4 md:px-20 xl:px-40 py-16 flex justify-center border-t border-white/10" aria-label="Links de Contato">
            <div className="max-w-[1080px] w-full flex flex-col items-center gap-10">
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">Redes e Contato</h1>
                </div>
                <nav className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
                    {contactSocialLinks.map((link, index) => (
                        <a
                            key={index}
                            className="social-card flex flex-col items-center gap-4 p-6 rounded-2xl bg-surface-dark border border-secondary/10 hover:-translate-y-1 transition-all group"
                            href={link.url}
                            target={link.newTab ? "_blank" : undefined}
                            rel={link.newTab ? "noopener noreferrer" : undefined}
                            style={{ '--icon-hover-color': link.hoverColor } as React.CSSProperties}
                            onMouseEnter={(e) => {
                                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                                if (iconContainer) {
                                    iconContainer.style.backgroundColor = link.hoverColor;
                                    iconContainer.style.borderColor = link.hoverColor;
                                    iconContainer.style.boxShadow = `0 0 15px ${link.hoverColor}`;
                                }
                                e.currentTarget.style.borderColor = link.hoverColor + '66';
                                e.currentTarget.style.boxShadow = `0 0 15px ${link.hoverColor}22`;
                            }}
                            onMouseLeave={(e) => {
                                const iconContainer = e.currentTarget.querySelector('.icon-container') as HTMLElement;
                                if (iconContainer) {
                                    iconContainer.style.backgroundColor = 'rgb(15 15 15)';
                                    iconContainer.style.borderColor = 'rgba(163, 163, 163, 0.1)';
                                    iconContainer.style.boxShadow = 'none';
                                }
                                e.currentTarget.style.borderColor = 'rgba(163, 163, 163, 0.1)';
                                e.currentTarget.style.boxShadow = 'none';
                            }}
                        >
                            <div className="icon-container rounded-full bg-background-dark p-4 text-white transition-all duration-300 border border-secondary/10">
                                <OptimizedImage src={link.logo} alt={link.name} className="w-8 h-8 invert group-hover:invert-0" />
                            </div>
                            <span className="font-medium text-sm text-white group-hover:text-white transition-colors">{link.name}</span>
                        </a>
                    ))}
                </nav>

                <aside className="mt-6 rounded-2xl bg-card-dark relative overflow-hidden px-6 py-6 md:px-10 md:py-6 flex flex-col md:flex-row items-center justify-between gap-6 border border-primary/30 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm w-full">
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAy50DfwNdRFmrx1uVE-DE8i3ar8Tlfvm9zNnUQdvLvOKb_mtkQ8UEStsPE0ZPPbgaRIKYseRvD7OlttQijnOj3ZEhAr5_PeL41fukUsw1kR6Y1Pco3t7Yh__gR9ONDAVhuQ4RfRvA3lLoL4SmgRo4Ck-5JhTxQXvcZwhWavFsmzQ5H9-JzHPa7ICdBYMDXxX-hmGJvg-i_FGdYS20vAA98erH67iM9YJHt7QCaX0v9wzfN6lEdzezxlgRbEwpkYmev9YMH5EVhn8sF')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="relative z-10 flex flex-col gap-1 text-center md:text-left">
                        <h2 className="text-white text-2xl md:text-2xl lg:text-3xl font-bold">Ficou interessado no meu perfil?</h2>
                        <p className="text-[#C5C6C7] text-base md:text-lg">Faça o download do meu currículo completo!</p>
                    </div>
                    <div className="relative z-10 shrink-0">
                        <a href="/CV/CV_DanielVinicius.pdf" download className="flex items-center gap-3 bg-primary hover:bg-accent-hover text-black px-6 py-3 rounded-full font-bold text-base transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)]">
                            <span className="material-symbols-outlined">download</span>
                            Baixar CV PDF
                        </a>
                    </div>
                </aside>
            </div>
        </section>
    );
};


const SinglePage: React.FC = () => {
    return (
        <main className="flex-grow flex flex-col">
            <HomeSection />
            <SkillsSection />
            <EducationSection />
            <ProjectsSection />
            <ContactSection />
        </main>
    );
};

export default SinglePage;
