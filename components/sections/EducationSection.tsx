import React from 'react';
import OptimizedImage from '../OptimizedImage';
import { educationTimeline, certificationsData, languages } from '../../data/education';

const EducationSection: React.FC = () => {
  return (
    <section id="jornada" className="scroll-mt-20 flex flex-col items-center px-4 md:px-20 xl:px-40 py-10 border-t border-white/10">
      <div className="layout-content-container flex flex-col max-w-[1080px] w-full gap-10">
        <section className="flex flex-col gap-6 animate-fade-in">
          <div className="flex flex-col gap-3">
            <h1 className="text-[#111418] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
              Minha Jornada Acadêmica
            </h1>
            <p className="text-[#637588] dark:text-[#C5C6C7] text-lg font-normal leading-normal max-w-2xl">
              Abaixo descrevo minha trajetória acadêmica, com as instituições de ensino, cursos e bootcamps que fazem parte da minha formação.
            </p>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <section className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-[#111418] dark:text-white text-2xl font-bold flex items-center gap-3">
              <span className="material-symbols-outlined text-primary">school</span>
              Formação Acadêmica
            </h2>
            <div className="bg-white dark:bg-card-dark rounded-xl p-6 md:p-8 border border-[#e5e7eb] dark:border-primary/30 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
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

          <section className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-[#111418] dark:text-white text-2xl font-bold flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">translate</span>
                Idiomas
              </h2>
              <ul className="flex flex-col gap-4">
                {languages.map((lang, index) => (
                  <li key={index} className="bg-white dark:bg-card-dark p-5 rounded-xl border border-[#e5e7eb] dark:border-primary/30 flex items-center gap-4 shadow-md hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <OptimizedImage alt={lang.alt} className="h-6 w-6 rounded-full object-cover shadow-sm" src={lang.flag} />
                          <p className="text-[#111418] dark:text-white font-bold text-lg">{lang.name}</p>
                        </div>
                        <span className="text-black text-xs font-bold bg-primary px-2 py-1 rounded">{lang.level}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-[#111418] dark:text-white text-2xl font-bold flex items-center gap-3">
                <span className="material-symbols-outlined text-primary">workspace_premium</span>
                Principais Certificações
              </h2>
              {certificationsData.map((cert, index) => (
                <div key={index} className="flex-1 bg-white dark:bg-card-dark border border-[#e5e7eb] dark:border-primary/30 rounded-2xl p-6 md:p-8 flex flex-col gap-4 items-start shadow-sm relative overflow-hidden hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
                  <div className="flex items-center gap-3 w-full">
                    <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0 z-10">
                      <span className="material-symbols-outlined text-xl">{cert.icon}</span>
                    </div>
                    <div className="flex-1 z-10">
                      <h3 className="text-[#111418] dark:text-white text-lg font-bold leading-tight">{cert.title}</h3>
                      <p className="text-[#637588] dark:text-[#C5C6C7] text-sm">{cert.institution}</p>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 z-10">
                    <span className="text-primary text-sm font-bold">{cert.date}</span>
                    <p className="text-[#637588] dark:text-[#C5C6C7] text-sm leading-relaxed">
                      {cert.description}
                    </p>
                  </div>
                  {cert.certLink && (
                    <a
                      href={cert.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-primary hover:text-[#1A1C20] bg-primary/10 hover:bg-primary border border-primary/30 hover:border-primary px-4 py-2 rounded-lg transition-all duration-300 z-10 self-start hover:shadow-[0_0_12px_rgba(57,255,20,0.3)]"
                    >
                      <span className="material-symbols-outlined text-base">open_in_new</span>
                      Exibir Certificado
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
