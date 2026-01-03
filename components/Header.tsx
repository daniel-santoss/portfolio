import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('sobre');

  // Check if we're on the main single page (not project detail)
  const isMainPage = location.pathname === '/' || location.pathname === '';
  const isProjectDetail = location.pathname.includes('/project/');

  // Navigation items for smooth scroll
  const navItems = [
    { id: 'sobre', label: 'Sobre Mim' },
    { id: 'habilidades', label: 'Habilidades e Tecnologias' },
    { id: 'jornada', label: 'Jornada Acadêmica' },
    { id: 'projetos', label: 'Projetos' },
    { id: 'contato', label: 'Contato' },
  ];

  // Smooth scroll handler
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();

    // If not on main page, navigate to main page first
    if (!isMainPage) {
      window.location.href = `/#${sectionId}`;
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  // IntersectionObserver to track active section
  useEffect(() => {
    if (!isMainPage) return;

    const observerOptions = {
      root: null,
      rootMargin: '-10% 0px -40% 0px',
      threshold: 0.1
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections
    navItems.forEach(item => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, [isMainPage, location.pathname]);

  // Handle hash in URL on page load
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

  // If on project detail page, show back navigation
  if (isProjectDetail) {
    return (
      <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-white/10 px-6 py-4 md:px-10 lg:px-16 xl:px-40 sticky top-0 bg-background-light/95 dark:bg-background-dark/80 backdrop-blur-sm z-50">
        <Link to="/" className="flex items-center gap-4 text-[#111418] dark:text-white">
          <div className="size-8 rounded bg-primary/20 flex items-center justify-center text-primary">
            <span className="material-symbols-outlined">terminal</span>
          </div>
          <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Portfólio</h2>
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 text-sm font-medium text-white hover:text-primary transition-colors"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Voltar
        </Link>
      </header>
    );
  }

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-white/10 px-6 py-4 md:px-10 lg:px-16 xl:px-40 sticky top-0 bg-background-light/95 dark:bg-background-dark/80 backdrop-blur-sm z-50">
      <a
        href="#sobre"
        onClick={(e) => handleScrollTo(e, 'sobre')}
        className="flex items-center gap-4 text-[#111418] dark:text-white cursor-pointer"
      >
        <div className="size-8 rounded bg-primary/20 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">terminal</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Portfólio</h2>
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
        <button className="flex cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-black text-sm font-bold hover:bg-opacity-90 transition-all shrink-0 shadow-[0_0_10px_rgba(57,255,20,0.3)]">
          <span className="truncate">Baixar CV</span>
        </button>
      </div>

      <button
        className="lg:hidden text-[#111418] dark:text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
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
        </nav>
      )}
    </header>
  );
};

export default Header;