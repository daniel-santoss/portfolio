import React, { useState } from 'react';
import OptimizedImage from '../OptimizedImage';
import { skillsData, skillCategories } from '../../data/skills';

const SkillsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');

  const filteredCategories = skillsData.filter(
    cat => selectedCategory === 'Todas' || cat.id === selectedCategory
  );

  return (
    <section id="habilidades" className="scroll-mt-20 flex flex-col items-center py-10 px-4 md:px-20 xl:px-40 border-t border-white/10">
      <div className="w-full max-w-[1080px] flex flex-col gap-10">
        <header className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">Habilidades e Tecnologias</h1>
            <p className="text-gray-300 text-lg font-normal leading-normal max-w-3xl opacity-90">
              Esses são os meus conhecimentos e ferramentas que utilizo no meu dia a dia.
            </p>
          </div>
        </header>

        <nav aria-label="Filtro de Categorias" className="w-full pb-2">
          <div className="flex flex-wrap gap-2 md:gap-3">
            {skillCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-4 md:px-5 transition-all active:scale-95 border text-xs md:text-sm ${
                  selectedCategory === category
                    ? 'bg-primary border-primary shadow-[0_0_10px_rgba(57,255,20,0.2)]'
                    : 'bg-white/5 border-white/10 hover:bg-primary hover:border-primary group'
                }`}
              >
                <p className={`font-bold leading-normal ${
                  selectedCategory === category
                    ? 'text-[#1A1C20]'
                    : 'text-gray-300 group-hover:text-background-dark'
                }`}>
                  {category}
                </p>
              </button>
            ))}
          </div>
        </nav>

        <div className="flex flex-col gap-10">
          {filteredCategories.map((cat) => (
            <section key={cat.id} className="flex flex-col gap-5" aria-labelledby={`skill-${cat.id}`}>
              <h2 id={`skill-${cat.id}`} className="text-xl font-bold text-white flex items-center gap-2">
                <span className="h-px flex-1 bg-white/10"></span>
                <span>{cat.title}</span>
                <span className="h-px flex-1 bg-white/10"></span>
              </h2>
              <div className="flex flex-wrap gap-2 justify-center">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-center gap-3 w-[120px] h-[120px] rounded-2xl bg-background-dark"
                  >
                    {skill.icon ? (
                      <OptimizedImage
                        src={skill.icon}
                        alt={skill.name}
                        className={`w-10 h-10 object-contain${skill.invert ? ' invert' : ''}`}
                      />
                    ) : skill.iconClass ? (
                      <i
                        className={skill.iconClass}
                        style={{ color: skill.iconColor || '#FFFFFF', fontSize: '2.5rem' }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span className="text-sm font-semibold text-white text-center">{skill.name}</span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
