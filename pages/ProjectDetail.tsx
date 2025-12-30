import React from 'react';
import { Link } from 'react-router-dom';

const ProjectDetail: React.FC = () => {

    const project = {
        title: 'WebApi',
        date: '2024',
        type: 'API REST',
        description: 'API RESTful desenvolvida em C# (.NET) para gerenciamento de dados, utilizando boas práticas de desenvolvimento e arquitetura limpa.',
        heroImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMZqjCSfnqSKmESiFaGh8LOnV6vs-DBKqTdGaPPvf2aF-lZdXASFy8NVj28OOCEyy_7t_yeDMw4blQ1UnCYsoVYFiSvrUCJap49IIT9iJJSU_qkRGapiz6YDyzb7nXY4fpKpPLcJquc7t8x0qizYUBEvzy7rV1TX05qEjomvB78yo9iYCQeRVsr7AyoBvh7k-UXU-3i80gMHt3uB1W9AN9Y_OBJodUM-yruoKm2_plXPpcgSv-FLPmV6QDHiV-2MqwJlaJ_NJ6QkNm',
        challenge: 'Desenvolver uma API robusta e escalável seguindo padrões de mercado e boas práticas de arquitetura de software, garantindo manutenibilidade e facilidade de extensão.',
        solution: 'Implementei uma API RESTful utilizando <strong className="text-white">C#</strong> e <strong className="text-white">.NET</strong>, aplicando conceitos de Clean Architecture, validação de dados e tratamento de erros. A arquitetura permite fácil integração com diferentes bancos de dados e serviços externos.',
        techStack: [
            { name: 'C#', color: '#9B4F96' },
            { name: '.NET', color: '#512BD4' },
            { name: 'REST API', color: '#61DAFB' },
            { name: 'SQL Server', color: '#CC2927' },
            { name: 'Entity Framework', color: '#68217A' }
        ],
        gallery: [
            { image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5rgeuUyFBEBT4qGjHZ-ljUioYqfcthIuW0YKHejbO7V1v2DtrgAhIbszda3u1moG-OU8ZiQkFOUM0gQu9f5NcYg4kv0nhWH13zPlC94MkFbT_tZQw2ia4tVDgppFizYU53qLvuYlrTLQ9I391aoEQZKK8ScnSE3Zl9Q7UqOzoglh8cYvFX4-_IYW_p1pIdPVKPN_c4lL5514lDOOS-Zd76tvp0WgL29kySsQyXzDjuPilV7y5yrwwe-0nWOtLfjkcbFd-I-FHOUzI' },
            { image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD1k_51Ge4Xkt4U6dXP_ke33G1w8xXAS1pxGvbi1C7NlMndSu3rjHKjjRORmS2QUYH-DmlHHGVCeneATXXUe6dJbMUCckwI0O2i0LmeEP5-aj0ImCvPeffgPqa7hRzZ_kbmLYy4xK_8H-ZAMxHRTVcCA_2RKbQneRsyDz7AQvmYkJxnAlysOA1qUmE-OJ8igMi7qbAPNbwBXBRKpxSGfRcLMDGLclBZ6MuHCE-Kn3z2jSnGwWV1AMeFppQrAoL-EqAEzgyL6htk6Gpi' },
            { image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWS7SE2-yDZ3J16Rbb61XB0RadDLn5oJiSCD7ygnvPlg114HfNd6wh2NIS6NPIXDq7vaxl0XEtBXZxDQU3sHHwhY9HPAjeG-NwTOb3ZDKhrTNkix0_rkrXg3WLhwFZ6oTnIlXOK0vOu1AiWaadIFAXnmxjmgAHaQBAyWDSDIzJkOsJEZBYnmVT_OBqY6YWVqFQjD1iWGInLZBp_7lq8-b161n1tU9y226KJ02lzwayk2YQ3VjbmDDmPIra674jslGDbdjRmtvZ9Qv8', count: 5 }
        ],
        highlights: [
            'Arquitetura RESTful seguindo boas práticas de API design.',
            'Estrutura de código organizada com Clean Architecture.',
            'Validação de dados e tratamento de erros robusto.'
        ],
        repoLink: 'https://github.com/daniel-santoss/WebApi'
    };

    return (
        <div className="bg-background-dark min-h-screen text-white font-public">
            <header className="w-full border-b border-white/10 px-4 py-3 sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <div className="flex items-center gap-3 text-white cursor-pointer group">
                        <div className="size-8 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                            <span className="material-symbols-outlined text-3xl">terminal</span>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-tight">DevPortfolio</h2>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Sobre</a>
                        <a className="text-sm font-medium text-primary" href="#">Projetos</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Habilidades</a>
                        <a className="text-sm font-medium hover:text-primary transition-colors" href="#">Contato</a>
                    </nav>
                    <button className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-accent-hover text-background-dark text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                        <span className="mr-2 material-symbols-outlined text-lg">download</span>
                        Baixar CV
                    </button>
                    <button className="md:hidden p-2 text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </header>

            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <div className="mb-8">
                        <Link to="/projects" className="inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors group">
                            <span className="material-symbols-outlined mr-1 text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            Voltar para Projetos
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <figure className="relative w-full rounded-2xl overflow-hidden bg-surface-dark border border-white/5 shadow-2xl hero-glow aspect-video group">
                                <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                                    <span className="text-white text-sm font-medium px-3 py-1 bg-black/50 backdrop-blur rounded-full border border-white/10">Preview em alta resolução</span>
                                </div>
                                <div
                                    className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105"
                                    style={{ backgroundImage: `url("${project.heroImage}")` }}
                                    role="img"
                                    aria-label="High resolution preview of the project"
                                >
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                    <div className="size-16 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center shadow-[0_0_30px_rgba(57,255,20,0.5)] transform scale-0 group-hover:scale-100 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-background-dark text-4xl fill-current">play_arrow</span>
                                    </div>
                                </div>
                            </figure>
                            <section aria-label="Tecnologias Utilizadas" className="flex flex-wrap gap-3">
                                {project.techStack.map((tech, index) => (
                                    <div key={index} className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors cursor-default">
                                        <span className="size-2 rounded-full" style={{ backgroundColor: tech.color }}></span>
                                        <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                                    </div>
                                ))}
                            </section>
                            <section aria-label="Galeria do Projeto" className="grid grid-cols-3 gap-4">
                                {project.gallery.map((item, index) => (
                                    <figure key={index} className="aspect-[4/3] rounded-xl bg-surface-dark overflow-hidden cursor-pointer border-2 border-transparent hover:border-gray-600 relative group">
                                        <div className="w-full h-full bg-cover bg-center hover:opacity-80 transition-opacity" style={{ backgroundImage: `url("${item.image}")` }} role="img" aria-label={`Project image ${index + 1}`}></div>
                                        {item.count && (
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                                <span className="text-white text-xs font-bold">+{item.count} Imagens</span>
                                            </div>
                                        )}
                                    </figure>
                                ))}
                            </section>
                        </div>
                        <div className="lg:col-span-5 flex flex-col h-full">
                            <div className="sticky top-24 flex flex-col gap-8">
                                <header className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">{project.type}</span>
                                        <span className="text-gray-500 text-sm flex items-center gap-1">
                                            <span className="material-symbols-outlined text-base">calendar_month</span>
                                            {project.date}
                                        </span>
                                    </div>
                                    <h1 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                                        Web<span className="text-primary">Api</span>
                                    </h1>
                                    <p className="text-lg text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>
                                </header>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a className="flex-1 h-14 bg-primary text-background-dark font-bold text-base rounded-full flex items-center justify-center gap-2 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] " href={project.repoLink} target="_blank" rel="noopener noreferrer">
                                        <span className="material-symbols-outlined">code</span>
                                        Ver no GitHub
                                    </a>
                                    <a className="flex-1 h-14 bg-transparent border-2 border-gray-600 text-white font-bold text-base rounded-full flex items-center justify-center gap-2 hover:border-white hover:bg-white/5 transition-all" href="#">
                                        <span className="material-symbols-outlined">open_in_new</span>
                                        Visitar Site
                                    </a>
                                </div>
                                <div className="border-t border-white/10 my-2"></div>
                                <div className="space-y-8">
                                    <section className="group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20">
                                                <span className="material-symbols-outlined">warning</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">O Desafio</h3>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed pl-[3.25rem]">
                                            {project.challenge}
                                        </p>
                                    </section>
                                    <section className="group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="p-2 rounded-lg bg-primary/10 text-primary border border-primary/20">
                                                <span className="material-symbols-outlined">lightbulb</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">A Solução</h3>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed pl-[3.25rem]" dangerouslySetInnerHTML={{ __html: project.solution }}>
                                        </p>
                                    </section>
                                </div>
                                <section className="bg-surface-dark rounded-2xl p-6 border border-white/5 mt-4" aria-labelledby="destaques-tecnicos">
                                    <h4 id="destaques-tecnicos" className="text-white font-bold mb-4 flex items-center gap-2">
                                        <span className="material-symbols-outlined text-primary">stars</span>
                                        Destaques Técnicos
                                    </h4>
                                    <ul className="space-y-3">
                                        {project.highlights.map((highlight, index) => (
                                            <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                                                <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
                                                <span>{highlight}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </section>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="Navegação entre projetos" className="mt-20 pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
                        <a className="group flex items-center gap-4 text-left w-full md:w-auto p-4 rounded-xl hover:bg-surface-dark transition-colors" href="#">
                            <div className="size-12 rounded-full bg-surface-dark flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">arrow_back</span>
                            </div>
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Projeto Anterior</p>
                                <p className="text-white font-bold text-lg group-hover:text-primary transition-colors">App Financeiro</p>
                            </div>
                        </a>
                        <div className="hidden md:block h-12 w-px bg-white/10"></div>
                        <a className="group flex items-center gap-4 text-right justify-end w-full md:w-auto p-4 rounded-xl hover:bg-surface-dark transition-colors" href="#">
                            <div>
                                <p className="text-xs text-gray-500 uppercase tracking-wider font-bold">Próximo Projeto</p>
                                <p className="text-white font-bold text-lg group-hover:text-primary transition-colors">Rede Social Pet</p>
                            </div>
                            <div className="size-12 rounded-full bg-surface-dark flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                                <span className="material-symbols-outlined text-gray-400 group-hover:text-primary">arrow_forward</span>
                            </div>
                        </a>
                    </nav>
                </div>
            </main>
        </div>
    );
};

export default ProjectDetail;