import React from 'react';
import { Link } from 'react-router-dom';

// ==================== HOME SECTION ====================
const HomeSection: React.FC = () => {
    const educationStacks = [
        { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
        { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' }
    ];

    const socialLinks = [
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
        },
        {
            name: 'WhatsApp',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg',
            url: 'https://wa.me/5511940564648',
            newTab: true,
            hoverColor: '#25D366'
        }
    ];

    return (
        <section id="sobre" className="scroll-mt-20">
            <header className="w-full px-4 md:px-40 py-10 md:py-20 flex justify-center">
                <div className="max-w-[1080px] w-full flex flex-col gap-10 md:gap-16">
                    <div className="@container">
                        <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
                            <section className="flex flex-col gap-6 flex-1 text-center md:text-left">
                                <div className="flex flex-col gap-3">
                                    <div className="inline-flex items-center gap-2 self-center md:self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wide uppercase border border-primary/20">
                                        <span className="size-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#39FF14]"></span>
                                        Buscando vaga de Estágio / Júnior
                                    </div>
                                    <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] text-white">
                                        Bem-vindo ao meu portfólio! Eu sou o <span className="text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">Daniel Vinicius.</span>
                                    </h1>
                                    <h2 className="text-base md:text-lg font-normal text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                                        Sou um desenvolvedor apaixonado por criar soluções web e atualmente estou focado no desenvolvimento Full Stack utilizando o ecossistema React e .NET. Além disso, possuo grande interesse por cibersegurança, área à qual também venho dedicando meus estudos com o propósito de desenvolver aplicações cada vez mais robustas e protegidas. Estou em busca de uma oportunidade de <span className="text-primary font-medium">estágio ou júnior</span> para aprender com a equipe, aplicar meus conhecimentos e evoluir na carreira.
                                    </h2>
                                </div>
                            </section>
                            <figure className="w-full md:w-[400px] flex justify-center">
                                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-10 blur-3xl "></div>
                                    <div
                                        className="relative w-full h-full rounded-full animate-border-pulse overflow-hidden bg-surface-dark bg-cover bg-center"
                                        style={{ backgroundImage: "url('/images/foto-d.jpeg')" }}
                                        role="img"
                                        aria-label="Portrait of a smiling software developer with a clean background"
                                    >
                                    </div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </header>
            <section className="group w-full bg-secondary/5 py-16 px-4 md:px-40 flex justify-center border-y border-secondary/10" aria-label="Principais Tecnologias">
                <div className="max-w-[1080px] w-full flex flex-col gap-8">
                    <div className="flex flex-col items-center gap-2">
                        <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Principais Stacks</h2>
                        <div className="h-1 w-0 group-hover:w-full bg-primary rounded-full shadow-[0_0_10px_#39FF14] transition-all duration-500"></div>
                    </div>
                    <ul className="flex flex-wrap justify-center gap-4">
                        {educationStacks.map((stack, index) => (
                            <li key={index} className="flex h-10 items-center gap-x-3 rounded-full bg-surface-dark border border-secondary/20 pl-3 pr-5">
                                <img src={stack.logo} alt={stack.name} className="w-5 h-5" />
                                <p className="text-white text-sm font-medium">{stack.name}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        </section>
    );
};

// ==================== SKILLS SECTION ====================
import { useState } from 'react';

const SkillsSection: React.FC = () => {
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
            if (prev.includes('Todas')) {
                return [category];
            }

            if (prev.includes(category)) {
                const newCategories = prev.filter(c => c !== category);
                return newCategories.length === 0 ? ['Todas'] : newCategories;
            }

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
        <section id="habilidades" className="scroll-mt-20 flex flex-col items-center py-10 px-4 md:px-40 border-t border-white/10">
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
        </section>
    );
};

// ==================== EDUCATION SECTION ====================
const EducationSection: React.FC = () => {
    const educationTimeline = [
        {
            icon: 'code',
            date: 'Previsão: 28/03/2026',
            title: 'Bootcamp XP Inc. - Full Stack Developer',
            institution: 'DIO (Digital Innovation One)',
            description: 'Programa intensivo focado na formação Full Stack, abordando tecnologias como React com JavaScript e TypeScript, Next.js, .NET com C#, NoSQL, cloud com Azure e DevOps com docker.',
            animate: true,
            hasLine: true,
            dateColor: 'text-primary font-bold'
        },
        {
            icon: 'school',
            date: 'Fev 2025 - Dez 2026 (Previsão)',
            title: 'Análise e Desenvolvimento de Sistemas',
            institution: 'Universidade Paulista (UNIP)',
            description: 'Aprofundamento técnico com foco nos conteúdos estudados: Engenharia de Software, Banco de Dados, Programação Web e Mobile, além de Arquitetura de Sistemas e práticas ágeis de desenvolvimento.',
            animate: true,
            hasLine: true,
            dateColor: 'text-primary font-bold'
        },
        {
            icon: 'school',
            date: 'Concluído em Dez 2024',
            title: 'Técnico em Informática',
            institution: 'ITB Brasílio Flores de Azevedo - FIEB',
            description: 'Esta formação foi a base essencial para o meu começo em desenvolvimento de software, consolidando minha lógica de programação e introduzindo conceitos fundamentais de algoritmos e hardware.',
            animate: false,
            hasLine: false,
            dateColor: 'text-[#637588] dark:text-primary font-medium'
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
            level: 'Nível Técnico'
        }
    ];

    return (
        <section id="jornada" className="scroll-mt-20 flex flex-col items-center px-4 md:px-40 py-10 border-t border-white/10">
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

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    {/* Education Timeline */}
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

                    {/* Languages */}
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
                                                    <img alt={lang.alt} className="h-6 w-6 rounded-full object-cover shadow-sm" src={lang.flag} />
                                                    <p className="text-[#111418] dark:text-white font-bold text-lg">{lang.name}</p>
                                                </div>
                                                <span className="text-black text-xs font-bold bg-primary px-2 py-1 rounded">{lang.level}</span>
                                            </div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Inspiração */}
                        <div className="flex-1 bg-white dark:bg-card-dark border border-[#e5e7eb] dark:border-primary/30 rounded-2xl p-6 md:p-8 flex flex-col gap-4 items-start shadow-sm relative overflow-hidden hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                            <div className="flex items-center gap-3">
                                <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 z-10">
                                    <span className="material-symbols-outlined text-2xl">rocket_launch</span>
                                </div>
                                <h3 className="text-[#111418] dark:text-white text-xl font-bold z-10">Inspiração</h3>
                            </div>
                            <div className="flex flex-col gap-2 z-10">
                                <p className="text-[#637588] dark:text-[#C5C6C7] text-base leading-relaxed">
                                    Acredito que para realizar nossos sonhos é preciso ter persistência acima de tudo, mesmo que as oportunidades não surjam de imediato. O estudo nunca termina e a tecnologia evolui todo dia, e por isso minha missão é me manter sempre atualizado e em busca de novos conhecimentos. Para mim, cada desafio é uma oportunidade de aprender algo novo, e esse é o sentimento é o que me motiva a nunca parar de estudar e me dedicar.
                                </p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

// ==================== PROJECTS SECTION ====================
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
        title: 'PIM II - Sistema Escolar',
        description: 'Sistema completo de gestão escolar via terminal, desenvolvido em C como projeto integrador do 2º semestre da faculdade.',
        category: 'Back-end',
        image: '/images/PimConsole/ImagemCapaPim.png',
        tags: [
            { name: 'C', color: 'text-blue-200' },
            { name: 'Terminal', color: 'text-gray-200' },
            { name: 'File I/O', color: 'text-green-200' }
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

const ProjectsSection: React.FC = () => {
    const [filter, setFilter] = useState('Todos');

    const filteredProjects = projectsData.filter(project =>
        filter === 'Todos' ? true : project.category === filter
    );

    return (
        <section id="projetos" className="scroll-mt-20 flex flex-col items-center w-full py-10 px-4 md:px-40 border-t border-white/10">
            <div className="layout-content-container flex flex-col max-w-[1080px] w-full gap-8">
                <header className="flex flex-col gap-6">
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
        </section>
    );
};

// ==================== CONTACT SECTION ====================
const ContactSection: React.FC = () => {
    const socialLinks = [
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
        },
        {
            name: 'WhatsApp',
            logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg',
            url: 'https://wa.me/5511940564648',
            newTab: true,
            hoverColor: '#25D366'
        }
    ];

    return (
        <section id="contato" className="scroll-mt-20 w-full px-4 md:px-40 py-16 flex justify-center border-t border-white/10" aria-label="Links de Contato">
            <div className="max-w-[1080px] w-full flex flex-col items-center gap-10">
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">Redes e Contato</h1>
                </div>
                <nav className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-4xl">
                    {socialLinks.map((link, index) => (
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
                                <img src={link.logo} alt={link.name} className="w-8 h-8 invert group-hover:invert-0" />
                            </div>
                            <span className="font-medium text-sm text-white group-hover:text-white transition-colors">{link.name}</span>
                        </a>
                    ))}
                </nav>

                {/* CTA */}
                <aside className="mt-6 rounded-2xl bg-card-dark relative overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/30 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm w-full">
                    <div className="absolute inset-0 z-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAy50DfwNdRFmrx1uVE-DE8i3ar8Tlfvm9zNnUQdvLvOKb_mtkQ8UEStsPE0ZPPbgaRIKYseRvD7OlttQijnOj3ZEhAr5_PeL41fukUsw1kR6Y1Pco3t7Yh__gR9ONDAVhuQ4RfRvA3lLoL4SmgRo4Ck-5JhTxQXvcZwhWavFsmzQ5H9-JzHPa7ICdBYMDXxX-hmGJvg-i_FGdYS20vAA98erH67iM9YJHt7QCaX0v9wzfN6lEdzezxlgRbEwpkYmev9YMH5EVhn8sF')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
                    <div className="relative z-10 flex flex-col gap-3 text-center md:text-left">
                        <h2 className="text-white text-3xl font-bold">Interessado no meu perfil?</h2>
                        <p className="text-[#C5C6C7] text-lg max-w-md">Faça o download do meu currículo completo para ver detalhes sobre minha experiência profissional.</p>
                    </div>
                    <div className="relative z-10">
                        <button className="flex items-center gap-3 bg-primary hover:bg-accent-hover text-black px-8 py-4 rounded-full font-bold text-lg transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)]">
                            <span className="material-symbols-outlined">download</span>
                            Baixar CV PDF
                        </button>
                    </div>
                </aside>
            </div>
        </section>
    );
};

// ==================== SINGLE PAGE COMPONENT ====================
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
