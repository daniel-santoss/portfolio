import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { navItems, CV_PATH } from '../data/socials';

const Header: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('sobre');

  // Verifica se estamos na página principal (não nos detalhes do projeto)
  const isMainPage = location.pathname === '/' || location.pathname === '';
  const isProjectDetail = location.pathname.includes('/project/');

  // Trata a navegação de outras páginas de volta para a principal usando estado do roteador
  useEffect(() => {
    if (isMainPage) {
      const state = location.state as { scrollToSection?: string } | null;
      if (state?.scrollToSection) {
        const sectionId = state.scrollToSection;
        
        navigate('/', { replace: true, state: {} });

        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
  }, [isMainPage, location.state, navigate]);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    if (!isMainPage) {
      navigate('/', { state: { scrollToSection: sectionId } });
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // Monitora as seções visíveis na tela para atualizar o item ativo no menu
  useEffect(() => {
    if (!isMainPage) return;

    const visibleSections = new Set<string>();

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -30% 0px',
      threshold: 0.1
    };

    const updateActiveSection = () => {
      // Se chegou ao final da página, destaca a seção de contato
      const scrolledToBottom = (window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 50);
      if (scrolledToBottom) {
        setActiveSection('contato');
        return;
      }

      const sectionOrder = navItems.map(item => item.id);
      for (const sectionId of sectionOrder) {
        if (visibleSections.has(sectionId)) {
          setActiveSection(sectionId);
          return;
        }
      }
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          visibleSections.add(entry.target.id);
        } else {
          visibleSections.delete(entry.target.id);
        }
      });

      updateActiveSection();
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach(item => {
      const el = document.getElementById(item.id);
      if (el) {
        observer.observe(el);
      }
    });

    const handleScroll = () => {
      updateActiveSection();
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMainPage, location.pathname]);

  // Trata a rolagem pelo hash na URL no carregamento inicial da página
  useEffect(() => {
    if (isMainPage && location.hash) {
      const sectionId = location.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [isMainPage, location.hash]);

  const getLinkClass = (sectionId: string) => {
    const isActive = isMainPage && activeSection === sectionId;
    const baseClass = "relative flex items-center gap-2 text-sm font-medium transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300";
    return isActive
      ? `${baseClass} text-primary after:w-full`
      : `${baseClass} text-[#111418] dark:text-white hover:text-primary after:w-0 hover:after:w-full`;
  };



  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-white/10 px-6 py-4 md:px-10 lg:px-16 xl:px-40 sticky top-0 bg-background-light/95 dark:bg-background-dark/80 backdrop-blur-sm z-50">
      <a
        href="#sobre"
        onClick={(e) => handleScrollTo(e, 'sobre')}
        className="flex items-center gap-3 text-[#111418] dark:text-white cursor-pointer group"
      >
        <div className="size-8 flex items-center justify-center text-primary transition-transform group-hover:scale-110">
          <span className="material-symbols-outlined text-3xl">terminal</span>
        </div>
        <h2 className="text-xl font-bold leading-tight tracking-tight">D.V</h2>
      </a>

      <nav className="hidden lg:flex items-center gap-5 xl:gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        {navItems.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScrollTo(e, item.id)}
            className={getLinkClass(item.id)}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="hidden lg:flex items-center gap-4">
        <a href={CV_PATH} download className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-black text-sm font-bold hover:bg-opacity-90 transition-all shrink-0 shadow-[0_0_10px_rgba(57,255,20,0.3)]">
          <span className="truncate">Baixar CV</span>
        </a>
      </div>

      <button
        className="lg:hidden text-[#111418] dark:text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Abrir Menu"
      >
        <span className="material-symbols-outlined">menu</span>
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-background-dark border-b border-white/10 p-4 flex flex-col gap-4 lg:hidden shadow-xl">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => handleScrollTo(e, item.id)}
              className={getLinkClass(item.id)}
            >
              {item.label}
            </a>
          ))}
          <a
            href={CV_PATH}
            download
            className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-black text-sm font-bold hover:bg-opacity-90 transition-all mt-2 shadow-[0_0_10px_rgba(57,255,20,0.3)]"
          >
            <span className="truncate">Baixar CV</span>
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;