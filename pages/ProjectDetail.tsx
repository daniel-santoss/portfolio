import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import OptimizedImage from '../components/OptimizedImage';

interface ProjectData {
    title: string;
    titleHighlight: string;
    date: string;
    type: string;
    description: string;
    heroImage?: string;
    challenge: string;
    solution: string;
    techStack: { name: string; color: string }[];
    gallery: string[];
    highlights: string[];
    repoLink: string;
    deployLink?: string;
}

const projectsData: Record<string, ProjectData> = {
    '1': {
        title: 'Studio Tattoo',
        titleHighlight: ' INK',
        date: '2025',
        type: 'FRONT-END',
        description: 'Interface web moderna para estúdio de tatuagem, focada em UI/UX. Projeto front-end desenvolvido com React e TypeScript, apresentando páginas de agendamento, portfólio de artistas e galeria de trabalhos.',
        heroImage: '/images/studioInk/capa.png',
        challenge: 'Desenvolver uma interface moderna, responsiva e intuitiva para um estúdio de tatuagem, focando na experiência do usuário e na apresentação visual do conteúdo.',
        solution: 'Criei uma aplicação <strong class="text-white">front-end completa</strong> utilizando <strong class="text-white">React 19</strong> com <strong class="text-white">TypeScript</strong> e <strong class="text-white">Vite</strong>. O projeto foca na experiência visual e navegação fluida, sem backend - ideal para demonstrar habilidades em componentização, roteamento e estilização.',
        techStack: [
            { name: 'Tailwind CSS', color: '#264DE4' },
            { name: 'React', color: '#61DAFB' },
            { name: 'TypeScript', color: '#3178C6' },
            { name: 'Vite', color: '#646CFF' }
        ],
        gallery: [
            '/images/studioInk/imagem1.png',
            '/images/studioInk/imagem2.png',
            '/images/studioInk/imagem3.png',
            '/images/studioInk/imagem4.png',
            '/images/studioInk/imagem5.png',
            '/images/studioInk/imagem6.png',
            '/images/studioInk/imagem7.png',
            '/images/studioInk/imagem8.png',
            '/images/studioInk/imagem9.png',
            '/images/studioInk/imagem10.png',
            '/images/studioInk/imagem11.png',
            '/images/studioInk/imagem12.png',
            '/images/studioInk/imagem13.png',
            '/images/studioInk/imagem14.png',
            '/images/studioInk/imagem15.png',
            '/images/studioInk/imagem16.png',
            '/images/studioInk/imagem17.png',
            '/images/studioInk/imagem18.png',
            '/images/studioInk/imagem19.png',
            '/images/studioInk/imagem20.png',
            '/images/studioInk/imagem21.png',
            '/images/studioInk/imagem22.png',
            '/images/studioInk/imagem23.png',
            '/images/studioInk/imagem24.png',
            '/images/studioInk/imagem25.png',
            '/images/studioInk/imagem26.png',
            '/images/studioInk/imagem27.png',
            '/images/studioInk/imagem28.png',
            '/images/studioInk/imagem29.png',
            '/images/studioInk/imagem30.png',
            '/images/studioInk/imagem31.png',
            '/images/studioInk/imagem32.png',
            '/images/studioInk/imagem33.png'
        ],
        highlights: [
            'Interface moderna e totalmente responsiva para mobile e desktop.',
            'Componentização eficiente com React e tipagem forte em TypeScript.',
            'Navegação fluida entre páginas utilizando React Router.',
            'Estilização com Tailwind CSS para design consistente e customizável.',
            'Build otimizado com Vite para carregamento rápido.'
        ],
        repoLink: 'https://github.com/daniel-santoss/StudioTattooINK',
        deployLink: ''
    },
    '2': {
        title: 'PIM II - Sistema',
        titleHighlight: ' Escolar',
        date: '2025',
        type: 'SISTEMA CONSOLE',
        description: 'Sistema completo de gestão escolar via terminal, desenvolvido em C como projeto integrador do 2º semestre da faculdade.',
        heroImage: '/images/PimConsole/ImagemCapaPim.png',
        challenge: 'Desenvolver um sistema completo com múltiplos perfis de usuário (Admin, Professor, Aluno), onde os dados possam ser salvos em arquivos de texto, além de validações de entradas e permissões por perfil.',
        solution: 'Implementei uma arquitetura modular com <strong class="text-white">7 módulos principais</strong> e <strong class="text-white">6 estruturas de dados</strong>, totalizando ~2800 linhas de código em C ANSI. O sistema gerencia turmas, alunos, professores, aulas, atividades, notas e presenças com controle de permissões por perfil.',
        techStack: [
            { name: 'C', color: '#A8B9CC' },
            { name: 'GCC', color: '#FFCB2B' },
            { name: 'File I/O', color: '#4CAF50' },
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
            'Dados salvos em arquivos de texto com formato estruturado.',
            'Validação de CPF, datas, notas e permissões por perfil.'
        ],
        repoLink: 'https://github.com/daniel-santoss/PIM_II',
        deployLink: ''
    },
    '3': {
        title: 'RESTful',
        titleHighlight: ' API',
        date: '2025',
        type: 'API REST',
        description: 'API RESTful desenvolvida em C# (.NET) para gerenciamento de dados, utilizando boas práticas de desenvolvimento e arquitetura limpa.',
        heroImage: '/images/webAPI/ImagemCapaApi.jpg',
        challenge: 'Desenvolver uma API robusta e escalável seguindo as boas práticas de arquitetura de software, garantindo manutenibilidade e facilidade de extensão.',
        solution: 'Implementei uma API RESTful utilizando <strong class="text-white">C#</strong> e <strong class="text-white">.NET</strong>, aplicando conceitos de Clean Architecture, validação de dados e tratamento de erros. A arquitetura permite fácil integração com diferentes bancos de dados e serviços externos.',
        techStack: [
            { name: '.NET', color: '#512BD4' },
            { name: 'C#', color: '#9B4F96' },
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
            'Implementação de persistência de dados utilizando Entity Framework Core como ORM e o provider Pomelo para MySQL.',
            'Otimização de recursos e I/O através do uso extensivo do padrão async/await em todas as operações da API.',
            'Documentação automática via Swagger e arquitetura desacoplada com uso nativo de Injeção de Dependência.'
        ],
        repoLink: 'https://github.com/daniel-santoss/WebApi',
        deployLink: ''
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
    const [zoom, setZoom] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

    if (!isOpen) return null;

    const handlePrev = () => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
        onNavigate(currentIndex > 0 ? currentIndex - 1 : images.length - 1);
    };

    const handleNext = () => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
        onNavigate(currentIndex < images.length - 1 ? currentIndex + 1 : 0);
    };

    const zoomIn = () => setZoom(prev => Math.min(prev + 0.5, 4));
    const zoomOut = () => {
        setZoom(prev => {
            const newZoom = Math.max(prev - 0.5, 1);
            if (newZoom === 1) setPosition({ x: 0, y: 0 });
            return newZoom;
        });
    };
    const resetZoom = () => {
        setZoom(1);
        setPosition({ x: 0, y: 0 });
    };

    const handleWheel = (e: React.WheelEvent) => {
        e.preventDefault();
        if (e.deltaY < 0) {
            zoomIn();
        } else {
            zoomOut();
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (zoom > 1) {
            setIsDragging(true);
            setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && zoom > 1) {
            // Limites baseados no viewport - permite explorar toda a imagem
            const viewportWidth = window.innerWidth * 0.85;
            const viewportHeight = window.innerHeight * 0.65;
            const maxX = (viewportWidth * (zoom - 1)) / 2;
            const maxY = (viewportHeight * (zoom - 1)) / 2;

            let newX = e.clientX - dragStart.x;
            let newY = e.clientY - dragStart.y;

            // Limitar movimento
            newX = Math.max(-maxX, Math.min(maxX, newX));
            newY = Math.max(-maxY, Math.min(maxY, newY));

            setPosition({ x: newX, y: newY });
        }
    };

    const handleMouseUp = () => setIsDragging(false);

    // Touch handlers para mobile
    const handleTouchStart = (e: React.TouchEvent) => {
        if (zoom > 1 && e.touches.length === 1) {
            setIsDragging(true);
            setDragStart({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (isDragging && zoom > 1 && e.touches.length === 1) {
            const viewportWidth = window.innerWidth * 0.85;
            const viewportHeight = window.innerHeight * 0.55;
            const maxX = (viewportWidth * (zoom - 1)) / 2;
            const maxY = (viewportHeight * (zoom - 1)) / 2;

            let newX = e.touches[0].clientX - dragStart.x;
            let newY = e.touches[0].clientY - dragStart.y;

            newX = Math.max(-maxX, Math.min(maxX, newX));
            newY = Math.max(-maxY, Math.min(maxY, newY));

            setPosition({ x: newX, y: newY });
        }
    };

    const handleTouchEnd = () => setIsDragging(false);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Escape') onClose();
        if (e.key === 'ArrowLeft') handlePrev();
        if (e.key === 'ArrowRight') handleNext();
        if (e.key === '+' || e.key === '=') zoomIn();
        if (e.key === '-') zoomOut();
        if (e.key === '0') resetZoom();
    };

    return (
        <div
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex flex-col"
            onClick={() => { resetZoom(); onClose(); }}
            onKeyDown={handleKeyDown}
            tabIndex={0}
        >
            {/* Header com contador, zoom e botão fechar */}
            <div className="flex items-center justify-between px-6 py-4">
                <div className="text-white/70 text-sm font-medium">
                    {currentIndex + 1} / {images.length}
                </div>

                {/* Controles de Zoom */}
                <div className="flex items-center gap-2">
                    <button
                        className="size-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30"
                        onClick={(e) => { e.stopPropagation(); zoomOut(); }}
                        disabled={zoom <= 1}
                        title="Diminuir zoom (-)"
                    >
                        <span className="material-symbols-outlined text-white text-xl">zoom_out</span>
                    </button>
                    <span className="text-white/70 text-sm font-medium min-w-[3rem] text-center">
                        {Math.round(zoom * 100)}%
                    </span>
                    <button
                        className="size-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors disabled:opacity-30"
                        onClick={(e) => { e.stopPropagation(); zoomIn(); }}
                        disabled={zoom >= 4}
                        title="Aumentar zoom (+)"
                    >
                        <span className="material-symbols-outlined text-white text-xl">zoom_in</span>
                    </button>
                    {zoom > 1 && (
                        <button
                            className="size-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors ml-2"
                            onClick={(e) => { e.stopPropagation(); resetZoom(); }}
                            title="Resetar zoom (0)"
                        >
                            <span className="material-symbols-outlined text-white text-xl">restart_alt</span>
                        </button>
                    )}
                </div>

                <button
                    className="size-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    onClick={() => { resetZoom(); onClose(); }}
                >
                    <span className="material-symbols-outlined text-white text-2xl">close</span>
                </button>
            </div>

            {/* Área principal da imagem */}
            <div
                className="flex-1 flex items-center justify-center px-4 md:px-16 relative overflow-hidden"
                onWheel={handleWheel}
            >
                <button
                    className="absolute left-4 md:left-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    onClick={(e) => { e.stopPropagation(); handlePrev(); }}
                >
                    <span className="material-symbols-outlined text-white text-3xl">chevron_left</span>
                </button>

                <div
                    className={`max-w-[85vw] max-h-[65vh] flex items-center justify-center ${zoom > 1 ? 'cursor-grab' : 'cursor-zoom-in'} ${isDragging ? 'cursor-grabbing' : ''}`}
                    onClick={(e) => { e.stopPropagation(); if (zoom === 1) zoomIn(); }}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    <OptimizedImage
                        src={images[currentIndex]}
                        alt={`Gallery image ${currentIndex + 1}`}
                        className={`max-w-full max-h-[55vh] md:max-h-[65vh] object-contain rounded-lg shadow-2xl select-none ${isDragging ? '' : 'transition-transform duration-200'}`}
                        style={{
                            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
                        }}
                        draggable={false}
                    />
                </div>

                <button
                    className="absolute right-4 md:right-8 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                    onClick={(e) => { e.stopPropagation(); handleNext(); }}
                >
                    <span className="material-symbols-outlined text-white text-3xl">chevron_right</span>
                </button>
            </div>

            {/* Barra de miniaturas */}
            <div className="py-4 px-6">
                <div className="flex gap-2 justify-center max-w-[90vw] mx-auto overflow-x-auto py-2">
                    {images.map((img, idx) => (
                        <button
                            key={idx}
                            onClick={(e) => { e.stopPropagation(); setZoom(1); setPosition({ x: 0, y: 0 }); onNavigate(idx); }}
                            className={`w-10 h-10 md:w-12 md:h-12 rounded-lg overflow-hidden border-2 transition-all shrink-0 ${idx === currentIndex ? 'border-primary scale-110' : 'border-transparent opacity-60 hover:opacity-100'}`}
                        >
                            <OptimizedImage src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
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
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const openLightbox = (index: number) => {
        setLightboxIndex(index);
        setLightboxOpen(true);
    };

    // Scroll para o topo quando mudar de projeto
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
                        <h2 className="text-xl font-bold leading-tight tracking-tight">D.V</h2>
                    </Link>
                    <nav className="hidden md:flex items-center gap-8">
                        <Link className="text-sm font-medium hover:text-primary transition-colors" to="/#sobre">Sobre</Link>
                        <Link className="text-sm font-medium text-primary" to="/#projetos">Projetos</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" to="/#habilidades">Habilidades</Link>
                        <Link className="text-sm font-medium hover:text-primary transition-colors" to="/#contato">Contato</Link>
                    </nav>
                    <a href="/CV/CV_DanielVinicius_TI.pdf" download className="hidden sm:flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-accent-hover text-background-dark text-sm font-bold transition-all transform hover:scale-105 shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                        <span className="mr-2 material-symbols-outlined text-lg">download</span>
                        Baixar CV
                    </a>
                    <button
                        className="md:hidden p-2 text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {mobileMenuOpen && (
                    <nav className="absolute top-full left-0 w-full bg-background-dark border-b border-white/10 p-4 flex flex-col gap-4 md:hidden shadow-xl animate-fade-in z-50">
                        <Link to="/#sobre" className="text-sm font-medium text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Sobre</Link>
                        <Link to="/#projetos" className="text-sm font-medium text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Projetos</Link>
                        <Link to="/#habilidades" className="text-sm font-medium text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Habilidades</Link>
                        <Link to="/#contato" className="text-sm font-medium text-white hover:text-primary transition-colors" onClick={() => setMobileMenuOpen(false)}>Contato</Link>
                        <a href="/CV/CV_DanielVinicius_TI.pdf" download className="flex items-center justify-center rounded-full h-10 px-6 bg-primary hover:bg-accent-hover text-background-dark text-sm font-bold transition-all transform active:scale-95 shadow-[0_0_15px_rgba(57,255,20,0.3)]">
                            <span className="mr-2 material-symbols-outlined text-lg">download</span>
                            Baixar CV
                        </a>
                    </nav>
                )}
            </header>

            <main className="flex-grow">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                    <div className="mb-8">
                        <Link to="/#projetos" className="inline-flex items-center text-sm text-gray-400 hover:text-primary transition-colors group">
                            <span className="material-symbols-outlined mr-1 text-lg group-hover:-translate-x-1 transition-transform">arrow_back</span>
                            Voltar para Projetos
                        </Link>
                    </div>
                    {/* Hero Section - Layout 2 colunas */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-12 items-start">
                        {/* Coluna Esquerda - Informações */}
                        <header className="space-y-6">
                            <div className="flex items-center gap-3">
                                <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">{project.type}</span>
                                <span className="text-gray-500 text-sm flex items-center gap-1">
                                    <span className="material-symbols-outlined text-base">calendar_month</span>
                                    {project.date}
                                </span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                                {project.title}<span className="text-primary">{project.titleHighlight}</span>
                            </h1>
                            <p className="text-lg text-gray-400 leading-relaxed">{project.description}</p>

                            {/* Tech Stack */}
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech, index) => (
                                    <div key={index} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-dark border border-white/5 hover:border-primary/50 transition-colors">
                                        <span className="size-2 rounded-full" style={{ backgroundColor: tech.color }}></span>
                                        <span className="text-sm font-medium text-gray-300">{tech.name}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                                <button
                                    onClick={() => openLightbox(0)}
                                    className="inline-flex h-12 px-6 bg-surface-dark text-white font-bold text-sm rounded-full items-center justify-center gap-2 border border-white/10 hover:border-primary/50 hover:bg-surface-dark/80 transition-all"
                                >
                                    <span className="material-symbols-outlined text-lg">photo_library</span>
                                    Ver Fotos ({project.gallery.length})
                                </button>
                                <a className="inline-flex h-12 px-6 bg-primary text-background-dark font-bold text-sm rounded-full items-center justify-center gap-2 hover:bg-accent-hover hover:shadow-[0_0_20px_rgba(57,255,20,0.4)] transition-all" href={project.repoLink} target="_blank" rel="noopener noreferrer">
                                    <span className="material-symbols-outlined text-lg">code</span>
                                    Ver no GitHub
                                </a>
                                {project.deployLink && (
                                    <a className="inline-flex h-12 px-6 bg-surface-dark text-white font-bold text-sm rounded-full items-center justify-center gap-2 border border-white/10 hover:border-primary/50 hover:bg-surface-dark/80 transition-all" href={project.deployLink} target="_blank" rel="noopener noreferrer">
                                        <span className="material-symbols-outlined text-lg">rocket_launch</span>
                                        Ver Deploy
                                    </a>
                                )}
                            </div>
                        </header>

                        {/* Coluna Direita - Destaques Técnicos */}
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

                    {/* Desafio e Solução - Grid de 2 colunas */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Desafio - Esquerda */}
                        <section className="bg-surface-dark rounded-2xl p-6 border border-white/5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="size-10 rounded-full bg-red-500/10 text-red-400 border border-red-500/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined">flag</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">O Desafio</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed">{project.challenge}</p>
                        </section>

                        {/* Solução - Direita */}
                        <section className="bg-surface-dark rounded-2xl p-6 border border-white/5">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="size-10 rounded-full bg-primary/10 text-primary border border-primary/20 flex items-center justify-center">
                                    <span className="material-symbols-outlined">lightbulb</span>
                                </div>
                                <h3 className="text-xl font-bold text-white">A Solução</h3>
                            </div>
                            <p className="text-gray-400 leading-relaxed" dangerouslySetInnerHTML={{ __html: project.solution }}></p>
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