import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';

interface ProjectData {
    title: string;
    titleHighlight: string;
    date: string;
    type: string;
    description: string;
    heroVideo?: string;
    heroImage?: string;
    challenge: string;
    solution: string;
    techStack: { name: string; color: string }[];
    gallery: string[];
    highlights: string[];
    repoLink: string;
}

const projectsData: Record<string, ProjectData> = {
    '1': {
        title: 'Web',
        titleHighlight: 'Api',
        date: '2024',
        type: 'API REST',
        description: 'API RESTful desenvolvida em C# (.NET) para gerenciamento de dados, utilizando boas práticas de desenvolvimento e arquitetura limpa.',
        heroVideo: '/images/webAPI/demo.mp4',
        heroImage: '/images/webAPI/ImagemCapaApi.jpg',
        challenge: 'Desenvolver uma API robusta e escalável seguindo padrões de mercado e boas práticas de arquitetura de software, garantindo manutenibilidade e facilidade de extensão.',
        solution: 'Implementei uma API RESTful utilizando <strong class="text-white">C#</strong> e <strong class="text-white">.NET</strong>, aplicando conceitos de Clean Architecture, validação de dados e tratamento de erros. A arquitetura permite fácil integração com diferentes bancos de dados e serviços externos.',
        techStack: [
            { name: 'C#', color: '#9B4F96' },
            { name: '.NET', color: '#512BD4' },
            { name: 'REST API', color: '#61DAFB' },
            { name: 'MySQL', color: '#4479A1' },
            { name: 'Entity Framework', color: '#68217A' }
        ],
        gallery: [
            '/images/webAPI/foto1_index.png',
            '/images/webAPI/foto2_mario.png',
            '/images/webAPI/foto3_bowser.png',
            '/images/webAPI/foto4_get.png',
            '/images/webAPI/foto5_getID.png',
            '/images/webAPI/foto6_putP1.png',
            '/images/webAPI/foto6_putP2.png',
            '/images/webAPI/foto7_getAtualizado.png',
            '/images/webAPI/foto8_delete.png',
            '/images/webAPI/foto9_getFinal.png'
        ],
        highlights: [
            'Arquitetura RESTful seguindo boas práticas de API design.',
            'Estrutura de código organizada com Clean Architecture.',
            'Validação de dados e tratamento de erros robusto.'
        ],
        repoLink: 'https://github.com/daniel-santoss/WebApi'
    },
    '2': {
        title: 'PIM II - Sistema',
        titleHighlight: 'Escolar',
        date: '2024',
        type: 'SISTEMA CONSOLE',
        description: 'Sistema completo de gestão escolar via terminal, desenvolvido em C como projeto integrador do 2º semestre da faculdade.',
        heroImage: '/images/PimConsole/ImagemCapaPim.png',
        challenge: 'Desenvolver um sistema completo com múltiplos perfis de usuário (Admin, Professor, Aluno) e persistência de dados em arquivos, garantindo integridade e validação rigorosa.',
        solution: 'Implementei uma arquitetura modular com <strong class="text-white">7 módulos principais</strong> e <strong class="text-white">6 estruturas de dados</strong>, totalizando ~2800 linhas de código em C ANSI. O sistema gerencia turmas, alunos, professores, aulas, atividades, notas e presenças com controle de permissões por perfil.',
        techStack: [
            { name: 'C', color: '#A8B9CC' },
            { name: 'GCC', color: '#FFCB2B' },
            { name: 'File I/O', color: '#4CAF50' },
            { name: 'Modular', color: '#2196F3' },
            { name: 'Terminal', color: '#607D8B' }
        ],
        gallery: [
            '/images/PimConsole/Imagem1.png',
            '/images/PimConsole/Imagem2.png',
            '/images/PimConsole/Imagem3.png',
            '/images/PimConsole/Imagem4.png',
            '/images/PimConsole/Imagem5.png',
            '/images/PimConsole/Imagem6.png',
            '/images/PimConsole/Imagem7.png',
            '/images/PimConsole/Imagem8.png',
            '/images/PimConsole/Imagem9.png',
            '/images/PimConsole/Imagem10.png',
            '/images/PimConsole/Imagem11.png',
            '/images/PimConsole/Imagem12.png',
            '/images/PimConsole/Imagem13.png',
            '/images/PimConsole/Imagem14.png',
            '/images/PimConsole/Imagem15.png',
            '/images/PimConsole/Imagem16.png',
            '/images/PimConsole/Imagem17.png',
            '/images/PimConsole/Imagem18.png',
            '/images/PimConsole/Imagem19.png',
            '/images/PimConsole/Imagem20.png',
            '/images/PimConsole/Imagem21.png',
            '/images/PimConsole/Imagem22.png',
            '/images/PimConsole/Imagem23.png',
            '/images/PimConsole/Imagem24.png',
            '/images/PimConsole/Imagem25.png',
            '/images/PimConsole/Imagem26.png',
            '/images/PimConsole/Imagem27.png',
            '/images/PimConsole/Imagem28.png',
            '/images/PimConsole/Imagem29.png',
            '/images/PimConsole/Imagem30.png',
            '/images/PimConsole/Imagem31.png',
            '/images/PimConsole/Imagem32.png'
        ],
        highlights: [
            'Sistema de login com 3 perfis: Administrador, Professor e Aluno.',
            'Gestão completa de turmas, alunos, professores, aulas e atividades.',
            'Diário eletrônico com lançamento de notas e controle de presenças.',
            'Persistência de dados em arquivos de texto com formato estruturado.',
            'Validação rigorosa de CPF, datas, notas e permissões por perfil.'
        ],
        repoLink: 'https://github.com/daniel-santoss/PIM_II'
    }
};

const getProjectNavigation = (currentId: string) => {
    const ids = Object.keys(projectsData);
    const currentIndex = ids.indexOf(currentId);
    const prevId = currentIndex > 0 ? ids[currentIndex - 1] : null;
    const nextId = currentIndex < ids.length - 1 ? ids[currentIndex + 1] : null;
    return {
        prev: prevId ? { id: prevId, title: `${projectsData[prevId].title}${projectsData[prevId].titleHighlight}` } : null,
        next: nextId ? { id: nextId, title: `${projectsData[nextId].title}${projectsData[nextId].titleHighlight}` } : null
    };
};

// Simple Lightbox Component (no zoom)
interface LightboxProps {
    images: string[];
    currentIndex: number;
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (index: number) => void;
}

const Lightbox: React.FC<LightboxProps> = ({ images, currentIndex, isOpen, onClose, onNavigate }) => {
    if (!isOpen) return null;

    const handlePrev = () => onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
    const handleNext = () => onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
    };

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center"
            onClick={onClose}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            <button
                className="absolute top-6 right-6 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={onClose}
            >
                <span className="material-symbols-outlined text-white text-2xl">close</span>
            </button>

            <div className="absolute top-6 left-6 text-white/70 text-sm font-medium">
                {currentIndex + 1} / {images.length}
            </div>

            <button
                className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={(e) => { e.stopPropagation(); handlePrev(); }}
            >
                <span className="material-symbols-outlined text-white text-3xl">chevron_left</span>
            </button>

            <div
                className="max-w-[90vw] max-h-[85vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={images[currentIndex]}
                    alt={`Gallery image ${currentIndex + 1}`}
                    className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                />
            </div>

            <button
                className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                onClick={(e) => { e.stopPropagation(); handleNext(); }}
            >
                <span className="material-symbols-outlined text-white text-3xl">chevron_right</span>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 px-4 py-2 bg-black/50 rounded-full max-w-[90vw] overflow-x-auto">
                {images.map((img, idx) => (
                    <button
                        key={idx}
                        onClick={(e) => { e.stopPropagation(); onNavigate(idx); }}
                        className={`w-12 h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${idx === currentIndex ? 'border-primary scale-110' : 'border-transparent opacity-60 hover:opacity-100'}`}
                    >
                        <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                ))}
            </div>
        </div>
    );
};

const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const project = projectsData[id || '1'];
    const navigation = getProjectNavigation(id || '1');

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);
    const [videoError, setVideoError] = useState(false);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

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

    const previewImages = project.gallery.slice(0, 3);
    const remainingCount = project.gallery.length - 3;

    return (
        <div className="bg-background-dark min-h-screen text-white font-public">
            <Lightbox
                images={project.gallery}
                currentIndex={lightboxIndex}
                isOpen={lightboxOpen}
                onClose={() => setLightboxOpen(false)}
                onNavigate={setLightboxIndex}
            />

            <header className="w-full border-b border-white/10 px-4 py-3 sticky top-0 z-50 bg-background-dark/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-3 text-white cursor-pointer group">
                        <div className="size-8 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
                            <span className="material-symbols-outlined text-3xl">terminal</span>
                        </div>
                        <h2 className="text-xl font-bold leading-tight tracking-tight">DevPortfolio</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-medium hover:text-primary transition-colors" to="/#sobre">Sobre</Link>
                        <Link className="text-sm font-medium text-primary" to="/#projetos">Projetos</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" to="/#habilidades">Habilidades</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" to="/#contato">Contato</Link>
                    </nav>
                    <a href="/CV/Daniel_Vinicius_TI_Curriculo.pdf" download className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-accent-hover text-background-dark text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                        <span className="mr-2 material-symbols-outlined text-lg">download</span>
                        Baixar CV
                    </a>
                    <button className="md:hidden p-2 text-white">
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>
            </header>

            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <div className="mb-8">
                        <Link to="/#projetos" className="inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors group">
                            <span className="material-symbols-outlined mr-1 text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            Voltar para Projetos
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-7 flex flex-col gap-6">
                            <figure className="relative w-full rounded-2xl overflow-hidden bg-surface-dark border border-white/5 shadow-2xl aspect-video group">
                                {project.heroVideo && !videoError ? (
                                    <video
                                        className="w-full h-full object-cover"
                                        controls
                                        poster={project.heroImage}
                                        onError={() => setVideoError(true)}
                                    >
                                        <source src={project.heroVideo} type="video/mp4" />
                                        <source src={project.heroVideo.replace('.mp4', '.webm')} type="video/webm" />
                                        Seu navegador não suporta vídeos.
                                    </video>
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-gradient-to-t from-background-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-end p-6">
                                            <span className="text-white text-sm font-medium px-3 py-1 bg-black/50 backdrop-blur rounded-full border border-white/10">
                                                {project.heroVideo ? 'Vídeo em breve' : 'Preview do projeto'}
                                            </span>
                                        </div>
                                        <div
                                            className="w-full h-full bg-center bg-cover transition-transform duration-700 group-hover:scale-105 cursor-pointer"
                                            style={{ backgroundImage: `url("${project.heroImage}")` }}
                                            role="img"
                                            aria-label="Preview do projeto"
                                            onClick={() => openLightbox(0)}
                                        />
                                        {project.heroVideo && (
                                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                                <div className="size-16 rounded-full bg-primary/90 backdrop-blur flex items-center justify-center shadow-[0_0_30px_rgba(57,255,20,0.5)]">
                                                    <span className="material-symbols-outlined text-background-dark text-4xl">play_arrow</span>
                                                </div>
                                            </div>
                                        )}
                                    </>
                                )}
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
                                {previewImages.map((image, index) => (
                                    <figure
                                        key={index}
                                        className="aspect-[4/3] rounded-xl bg-surface-dark overflow-hidden cursor-pointer border-2 border-transparent hover:border-primary/50 relative group transition-all"
                                        onClick={() => openLightbox(index)}
                                    >
                                        <img
                                            src={image}
                                            alt={`Project image ${index + 1}`}
                                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                        />
                                        {index === 2 && remainingCount > 0 && (
                                            <div className="absolute inset-0 bg-black/60 flex items-center justify-center group-hover:bg-black/70 transition-colors">
                                                <span className="text-white text-lg font-bold">+{remainingCount} fotos</span>
                                            </div>
                                        )}
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span className="material-symbols-outlined text-white text-3xl drop-shadow-lg">zoom_in</span>
                                        </div>
                                    </figure>
                                ))}
                            </section>

                            <section className="bg-surface-dark rounded-2xl p-6 border border-white/5" aria-labelledby="destaques-tecnicos">
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
                                        {project.title}<span className="text-primary">{project.titleHighlight}</span>
                                    </h1>
                                    <p className="text-lg text-gray-400 leading-relaxed">{project.description}</p>
                                </header>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <a className="flex-1 h-14 bg-primary text-background-dark font-bold text-base rounded-full flex items-center justify-center gap-2 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                                        <span className="material-symbols-outlined">code</span>
                                        Ver no GitHub
                                    </a>
                                </div>
                                <div className="border-t border-white/10 my-2"></div>
                                <div className="space-y-8">
                                    <section className="group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="size-10 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center">
                                                <span className="material-symbols-outlined">flag</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">O Desafio</h3>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed pl-[3.25rem]">{project.challenge}</p>
                                    </section>
                                    <section className="group">
                                        <div className="flex items-center gap-3 mb-3">
                                            <div className="size-10 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                                                <span className="material-symbols-outlined">lightbulb</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white">A Solução</h3>
                                        </div>
                                        <p className="text-gray-400 leading-relaxed pl-[3.25rem]" dangerouslySetInnerHTML={{ __html: project.solution }}></p>
                                    </section>
                                </div>
                            </div>
                        </div>
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