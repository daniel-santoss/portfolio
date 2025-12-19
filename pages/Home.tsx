import React from 'react';

const Home: React.FC = () => {
  return (
    <main className="flex-grow flex flex-col items-center">
      <div className="w-full px-4 md:px-40 py-10 md:py-20 flex justify-center">
        <div className="max-w-[960px] w-full flex flex-col gap-10 md:gap-16">
          <div className="@container">
            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
              <div className="flex flex-col gap-6 flex-1 text-center md:text-left">
                <div className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 self-center md:self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wide uppercase border border-primary/20">
                    <span className="size-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#39FF14]"></span>
                    Buscando vaga de Estágio / Júnior
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] text-white">
                    Olá, eu sou <span className="text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">Daniel Santos</span>
                  </h1>
                  <h2 className="text-base md:text-lg font-normal text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                    Desenvolvedor apaixonado por criar soluções web. Com foco em React, TypeScript e Node.js, estou em busca de uma oportunidade de <span className="text-primary font-medium">estágio ou júnior</span> para aprender com a equipe, aplicar meus conhecimentos e evoluir na carreira.
                  </h2>
                </div>
              </div>
              <div className="w-full md:w-[400px] flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-10 blur-3xl "></div>
                  <div
                    className="relative w-full h-full rounded-full border-4 border-none overflow-hidden bg-surface-dark bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/foto-d.jpeg')" }}
                    role="img"
                    aria-label="Portrait of a smiling software developer with a clean background"
                  >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-secondary/5 py-16 px-4 md:px-40 flex justify-center border-y border-secondary/10">
        <div className="max-w-[960px] w-full flex flex-col gap-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Principais Stacks</h2>
            <div className="h-1 w-20 bg-primary rounded-full shadow-[0_0_10px_#39FF14]"></div>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {['JavaScript', 'C#', '.NET', 'MySQL', 'Azure'].map((stack, index) => {
              let icon = '';
              let colorClass = '';
              switch (stack) {
                case 'JavaScript': icon = 'code'; colorClass = 'text-yellow-400'; break;
                case 'C#': icon = 'terminal'; colorClass = 'text-purple-500'; break;
                case '.NET': icon = 'deployed_code'; colorClass = 'text-blue-600'; break;
                case 'MySQL': icon = 'database'; colorClass = 'text-orange-500'; break;
                case 'Azure': icon = 'cloud'; colorClass = 'text-blue-400'; break;
              }
              return (
                <div key={index} className="flex h-10 items-center gap-x-3 rounded-full bg-surface-dark border border-secondary/20 pl-3 pr-5">
                  <span className={`material-symbols-outlined ${colorClass}`}>{icon}</span>
                  <p className="text-white text-sm font-medium">{stack}</p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="w-full px-4 md:px-40 py-16 flex justify-center mb-10">
        <div className="max-w-[960px] w-full flex flex-col items-center gap-10">
          <h2 className="text-2xl font-bold text-center text-white">Conecte-se Comigo</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-3xl">
            <a className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-surface-dark border border-secondary/10 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(57,255,20,0.1)] hover:-translate-y-1 transition-all group" href="#">
              <div className="rounded-full bg-background-dark p-4 text-white transition-colors border border-secondary/10 group-hover:bg-primary group-hover:text-black group-hover:border-primary">
                <span className="material-symbols-outlined text-[32px]">source</span>
              </div>
              <span className="font-medium text-sm text-white group-hover:text-white transition-colors">GitHub</span>
            </a>
            <a className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-surface-dark border border-secondary/10 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(57,255,20,0.1)] hover:-translate-y-1 transition-all group" href="#">
              <div className="rounded-full bg-background-dark p-4 text-white transition-colors border border-secondary/10 group-hover:bg-primary group-hover:text-black group-hover:border-primary">
                <span className="material-symbols-outlined text-[32px]">connect_without_contact</span>
              </div>
              <span className="font-medium text-sm text-white group-hover:text-white transition-colors">LinkedIn</span>
            </a>
            <a className="flex flex-col items-center gap-4 p-6 rounded-2xl bg-surface-dark border border-secondary/10 hover:border-primary/40 hover:shadow-[0_0_15px_rgba(57,255,20,0.1)] hover:-translate-y-1 transition-all group" href="mailto:danielvinicius.santos7@gmail.com">
              <div className="rounded-full bg-background-dark p-4 text-white transition-colors border border-secondary/10 group-hover:bg-primary group-hover:text-black group-hover:border-primary">
                <span className="material-symbols-outlined text-[32px]">mail</span>
              </div>
              <span className="font-medium text-sm text-white group-hover:text-white transition-colors">Email</span>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;