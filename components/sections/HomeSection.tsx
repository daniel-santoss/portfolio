import React from 'react';
import OptimizedImage from '../OptimizedImage';

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
                    Sou um desenvolvedor focado na criação de soluções web e atualmente me concentro no desenvolvimento Full Stack utilizando o ecossistema .NET e React. Além disso, possuo grande interesse por cibersegurança, área à qual também venho dedicando meus estudos com o propósito de desenvolver aplicações cada vez mais robustas e protegidas.
                  </h2>
                </div>
              </section>
              <figure className="w-full lg:w-[400px] flex justify-center">
                <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-10 blur-3xl "></div>
                  <div className="relative w-full h-full rounded-full animate-border-pulse overflow-hidden bg-surface-dark">
                    <OptimizedImage
                      src="/images/foto-perfil.webp"
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
    </section>
  );
};

export default HomeSection;
