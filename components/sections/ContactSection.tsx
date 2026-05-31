import React from 'react';
import OptimizedImage from '../OptimizedImage';
import { socialLinks, CV_PATH } from '../../data/socials';

const ContactSection: React.FC = () => {
  return (
    <section id="contato" className="scroll-mt-20 w-full px-4 md:px-20 xl:px-40 py-16 flex justify-center border-t border-white/10" aria-label="Links de Contato">
      <div className="max-w-[1080px] w-full flex flex-col items-center gap-10">
        <div className="flex flex-col gap-3 text-center">
          <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">Redes e Contato</h1>
        </div>
        <nav className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl">
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
            <a href={CV_PATH} download className="flex items-center gap-3 bg-primary hover:bg-accent-hover text-black px-6 py-3 rounded-full font-bold text-base transition-all shadow-[0_0_15px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.5)]">
              <span className="material-symbols-outlined">download</span>
              Baixar CV PDF
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default ContactSection;
