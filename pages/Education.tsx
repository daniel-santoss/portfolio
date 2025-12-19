import React from 'react';

const Education: React.FC = () => {
  return (
    <main className="flex-grow flex flex-col items-center px-4 md:px-10 py-10">
      <div className="layout-content-container flex flex-col max-w-[960px] w-full gap-10">
        <section className="flex flex-col gap-6 animate-fade-in">
          <div className="flex flex-col gap-3">
            <h1 className="text-[#111418] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Minha Jornada <span className="text-primary">Acadêmica</span>
            </h1>
            <p className="text-[#637588] dark:text-[#C5C6C7] text-lg font-normal leading-normal max-w-2xl">
              Abaixo descrevo minha trajetória acadêmica, com as instituições de ensino, cursos e bootcamps que fazem parte da minha formação.
            </p>
          </div>
          <div className="bg-white dark:bg-card-dark border border-[#e5e7eb] dark:border-primary/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start shadow-sm relative overflow-hidden">
            <div className="absolute right-0 top-0 w-32 h-32 bg-primary/10 rounded-bl-full -mr-8 -mt-8 z-0"></div>
            <div className="size-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 z-10">
              <span className="material-symbols-outlined text-2xl">rocket_launch</span>
            </div>
            <div className="flex flex-col gap-2 z-10">
              <h3 className="text-[#111418] dark:text-white text-xl font-bold">Pronto para o Mercado de Trabalho</h3>
              <p className="text-[#637588] dark:text-[#C5C6C7] text-base leading-relaxed">
                Minha trajetória é focada na aplicação prática da teoria. O domínio do <strong className="text-[#111418] dark:text-primary font-bold">Inglês Técnico</strong> me permite consumir documentação oficial instantaneamente, e minha base em Engenharia garante código limpo e escalável. Busco uma oportunidade de estágio ou júnior para transformar esse preparo em resultados reais para a equipe.
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
            <div className="bg-white dark:bg-card-dark rounded-xl p-6 md:p-8 shadow-sm border border-[#e5e7eb] dark:border-primary/30">
              <ul className="flex flex-col">
                {/* Item 1 */}
                <li className="grid grid-cols-[40px_1fr] gap-x-4">
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary z-10 shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                      <span className="material-symbols-outlined text-[20px]">code</span>
                    </div>
                    <div className="w-[2px] bg-[#e5e7eb] dark:bg-primary/50 h-full grow my-2"></div>
                  </div>
                  <div className="flex flex-col pb-8">
                    <span className="text-primary text-sm font-bold mb-1">Previsão: 28/03/2026</span>
                    <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">Bootcamp XP Inc. - Full Stack Developer</h3>
                    <p className="text-[#637588] dark:text-[#C5C6C7] text-base mt-1">DIO (Digital Innovation One)</p>
                    <p className="text-[#637588] dark:text-[#C5C6C7] text-sm mt-3 leading-relaxed">
                    Programa intensivo focado na formação Full Stack, abordando tecnologias como React com JavaScript e TypeScript, Next.js, .NET com C#, NoSQL, cloud com Azure e DevOps com docker.
                    </p>
                  </div>
                </li>

                {/* Item 2 */}
                <li className="grid grid-cols-[40px_1fr] gap-x-4">
                  <div className="flex flex-col items-center gap-1 pt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary z-10 shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                      <span className="material-symbols-outlined text-[20px]">school</span>
                    </div>
                    <div className="w-[2px] bg-[#e5e7eb] dark:bg-primary/50 h-full grow my-2"></div>
                  </div>
                  <div className="flex flex-col pb-8">
                    <span className="text-primary text-sm font-bold mb-1">Fev 2025 - Dez 2026 (Previsão)</span>
                    <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">Análise e Desenvolvimento de Sistemas</h3>
                    <p className="text-[#637588] dark:text-[#C5C6C7] text-base mt-1">Universidade Paulista (UNIP)</p>
                    <p className="text-[#637588] dark:text-[#C5C6C7] text-sm mt-3 leading-relaxed">
                      Aprofundamento técnico com foco nos conteúdos estudados: Engenharia de Software, Banco de Dados, Programação Web e Mobile, além de Arquitetura de Sistemas e práticas ágeis de desenvolvimento.
                    </p>
                  </div>
                </li>

                {/* Item 3 */}
                <li className="grid grid-cols-[40px_1fr] gap-x-4">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary z-10 shadow-[0_0_10px_rgba(57,255,20,0.2)]">
                      <span className="material-symbols-outlined text-[20px]">school</span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[#637588] dark:text-primary text-sm font-medium mb-1">Concluído em Dez 2024</span>
                    <h3 className="text-[#111418] dark:text-white text-xl font-bold leading-tight">Técnico em Informática</h3>
                    <p className="text-[#637588] dark:text-[#C5C6C7] text-base mt-1">ITB Brasílio Flores de Azevedo - FIEB</p>
                    <p className="text-[#637588] dark:text-[#C5C6C7] text-sm mt-3 leading-relaxed">
                      Esta formação foi a base essencial para o desenvolvimento de software, consolidando minha lógica de programação e introduzindo conceitos fundamentais de algoritmos e hardware.
                    </p>
                  </div>
                </li>
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
                <li className="bg-white dark:bg-card-dark p-5 rounded-xl border border-[#e5e7eb] dark:border-primary/30 flex items-center gap-4 shadow-md">
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img alt="Bandeira do Brasil" className="h-6 w-6 rounded-full object-cover shadow-sm" src="https://flagcdn.com/w40/br.png" />
                        <p className="text-[#111418] dark:text-white font-bold text-lg">Português</p>
                      </div>
                      <span className="text-black text-xs font-bold bg-primary px-2 py-1 rounded">Nativo</span>
                    </div>
                  </div>
                </li>
                <li className="bg-white dark:bg-card-dark p-5 rounded-xl border border-[#e5e7eb] dark:border-primary/30 flex items-center gap-4 shadow-md">
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <img alt="Bandeira dos EUA" className="h-6 w-6 rounded-full object-cover shadow-sm" src="https://flagcdn.com/w40/us.png" />
                        <p className="text-[#111418] dark:text-white font-bold text-lg">Inglês</p>
                      </div>
                      <span className="text-black text-xs font-bold bg-primary px-2 py-1 rounded">Nível Técnico</span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </section>
        </div>

        {/* CTA */}
        <aside className="mt-12 rounded-2xl bg-card-dark relative overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-primary/30">
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