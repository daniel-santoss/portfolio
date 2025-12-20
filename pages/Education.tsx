import React from 'react';

const Education: React.FC = () => {
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
    <main className="flex-grow flex flex-col items-center px-4 md:px-10 py-10">
      <div className="layout-content-container flex flex-col max-w-[960px] w-full gap-10">
        <section className="flex flex-col gap-6 animate-fade-in" >
          <div className="flex flex-col gap-3">
            <h1 className="text-[#111418] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Minha Jornada <span className="text-primary">Acadêmica</span>
            </h1>
            <p className="text-[#637588] dark:text-[#C5C6C7] text-lg font-normal leading-normal max-w-2xl">
              Abaixo descrevo minha trajetória acadêmica, com as instituições de ensino, cursos e bootcamps que fazem parte da minha formação.
            </p>
          </div>
          <div className="bg-white dark:bg-card-dark border border-[#e5e7eb] dark:border-primary/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm relative overflow-hidden shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 z-0"></div>
            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 z-10">
              <span className="material-symbols-outlined text-2xl">rocket_launch</span>
            </div>
            <div className="flex flex-col gap-2 z-10">
              <h3 className="text-[#111418] dark:text-white text-xl font-bold">Inspiração</h3>
              <p className="text-[#637588] dark:text-[#C5C6C7] text-base leading-relaxed">
                Acredito que para realizar meu sonho de ser dev, é preciso ter persistência acima de tudo, mesmo que as oportunidades não surjam de imediato. O estudo nunca termina e a tecnologia evolui todo dia, e por isso minha missão é me manter sempre atualizado e em busca de novos conhecimentos. Para mim, cada desafio é uma oportunidade de aprender algo novo, e esse é o sentimento é o que me motiva a nunca parar de estudar e lutar.
              </p>
            </div>
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
          </section>
        </div>

        {/* CTA */}
        <aside className="mt-12 rounded-2xl bg-card-dark relative overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/30 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
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
    </main>
  );
};

export default Education;