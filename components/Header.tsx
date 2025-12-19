import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  const getLinkClass = (path: string) => {
    return isActive(path)
      ? "flex items-center gap-2 text-primary text-sm font-medium transition-colors"
      : "flex items-center gap-2 text-[#111418] dark:text-white text-sm font-medium hover:text-primary transition-colors";
  };

  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#e5e7eb] dark:border-white/10 px-6 py-4 md:px-10 lg:px-16 xl:px-40 sticky top-0 bg-background-light/95 dark:bg-background-dark/80 backdrop-blur-sm z-50">
      <div className="flex items-center gap-4 text-[#111418] dark:text-white">
        <div className="size-8 rounded bg-primary/20 flex items-center justify-center text-primary">
          <span className="material-symbols-outlined">terminal</span>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">Portfólio</h2>
      </div>

      <nav className="hidden lg:flex items-center gap-5 xl:gap-8 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <Link to="/" className={getLinkClass('/')}>
          Sobre Mim
        </Link>
        <Link to="/skills" className={getLinkClass('/skills')}>
          Habilidades e Tecnologias
        </Link>
        <Link to="/education" className={getLinkClass('/education')}>
          Minha Jornada Acadêmica
        </Link>
        <Link to="/projects" className={getLinkClass('/projects')}>
          Projetos
        </Link>
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
        <div className="absolute top-full left-0 w-full bg-background-dark border-b border-white/10 p-4 flex flex-col gap-4 lg:hidden shadow-xl">
           <Link to="/" className={getLinkClass('/')} onClick={() => setIsMenuOpen(false)}>
            Sobre Mim
          </Link>
          <Link to="/skills" className={getLinkClass('/skills')} onClick={() => setIsMenuOpen(false)}>
            Habilidades e Tecnologias
          </Link>
          <Link to="/education" className={getLinkClass('/education')} onClick={() => setIsMenuOpen(false)}>
            Minha Jornada Acadêmica
          </Link>
          <Link to="/projects" className={getLinkClass('/projects')} onClick={() => setIsMenuOpen(false)}>
            Projetos
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;