import React, { useState } from 'react';

const Skills: React.FC = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>(['Todas']);

  const categories = [
    'Todas',
    'Front-end',
    'Back-end',
    'Banco de Dados',
    'Cloud & DevOps',
    'IA & ML',
    'Ferramentas'
  ];

  const handleCategoryClick = (category: string) => {
    if (category === 'Todas') {
      setSelectedCategories(['Todas']);
      return;
    }

    setSelectedCategories(prev => {
      // Se "Todas" estava selecionado, remove ele e começa a lista com a nova categoria
      if (prev.includes('Todas')) {
        return [category];
      }

      // Se a categoria já está selecionada, remove ela
      if (prev.includes(category)) {
        const newCategories = prev.filter(c => c !== category);
        // Se não sobrar nenhuma, volta para "Todas"
        return newCategories.length === 0 ? ['Todas'] : newCategories;
      }

      // Se não estava selecionada, adiciona
      return [...prev, category];
    });
  };

  const isSelected = (category: string) => selectedCategories.includes(category);
  const shouldShow = (category: string) => selectedCategories.includes('Todas') || selectedCategories.includes(category);

  return (
    <main className="flex-1 flex flex-col items-center py-10 px-4 md:px-10 lg:px-20">
      <div className="w-full max-w-[1080px] flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-3">
            <h1 className="text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em] text-white">Habilidades e Tecnologias</h1>
            <p className="text-gray-300 text-lg font-normal leading-normal max-w-3xl opacity-90">
              Apresento meu ecossistema técnico, selecionado com base nas demandas atuais do mercado de desenvolvimento. Estas competências foram aprimoradas para garantir colaboração efetiva e valor imediato em <span className="text-primary font-bold">posições de estágio ou júnior</span>.
            </p>
          </div>
        </div>
        <div className="w-full overflow-x-auto pb-2 scrollbar-hide">
          <div className="flex gap-3 min-w-max">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`flex h-9 items-center justify-center gap-x-2 rounded-full px-5 transition-all active:scale-95 border ${isSelected(category)
                  ? 'bg-primary border-primary shadow-[0_0_10px_rgba(57,255,20,0.2)]'
                  : 'bg-white/5 border-white/10 hover:bg-primary hover:border-primary group'
                  }`}
              >
                <p className={`text-sm font-bold leading-normal ${isSelected(category)
                  ? 'text-[#1A1C20]'
                  : 'text-gray-300 group-hover:text-background-dark'
                  }`}>
                  {category}
                </p>
              </button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Front-end */}
          {shouldShow('Front-end') && (
            <div className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">html</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">Front-end</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Back-end */}
          {shouldShow('Back-end') && (
            <div className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">dns</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">Back-end</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Node.js', 'Python', 'Go', 'Java', 'GraphQL', 'Express'].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Banco de Dados */}
          {shouldShow('Banco de Dados') && (
            <div className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">database</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">Banco de Dados</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['PostgreSQL', 'MongoDB', 'Redis', 'Firebase', 'Prisma ORM'].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Cloud & DevOps */}
          {shouldShow('Cloud & DevOps') && (
            <div className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">cloud</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">Cloud & DevOps</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Vercel'].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* IA & ML */}
          {shouldShow('IA & ML') && (
            <div className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">smart_toy</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">IA & Machine Learning</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TensorFlow', 'PyTorch', 'OpenAI API', 'Pandas'].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</span>
                ))}
              </div>
            </div>
          )}

          {/* Ferramentas */}
          {shouldShow('Ferramentas') && (
            <div className="group flex flex-col gap-5 rounded-xl border border-white/10 bg-white/5 p-6 shadow-sm hover:shadow-[0_0_20px_rgba(57,255,20,0.15)] hover:border-primary/50 transition-all duration-300 backdrop-blur-sm">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center size-12 rounded-lg bg-primary/10 text-primary border border-primary/20 group-hover:bg-primary group-hover:text-background-dark transition-colors duration-300">
                  <span className="material-symbols-outlined text-3xl">build</span>
                </div>
                <h2 className="text-xl font-bold leading-tight text-white group-hover:text-primary transition-colors">Ferramentas & Metodologias</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {['Git & GitHub', 'Jira', 'Scrum', 'Figma', 'Linux'].map(tech => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-gray-200">{tech}</span>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 rounded-2xl bg-white/5 border border-white/10 p-6 md:p-8 backdrop-blur-md">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
            <div className="flex-1 flex flex-col gap-4">
              <h3 className="text-primary text-sm font-bold uppercase tracking-wider">Proficiência Técnica</h3>
              <p className="text-3xl font-black leading-tight text-white">Níveis de Experiência</p>
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1A1C20]/50 border border-white/10 hover:border-primary/30 transition-colors">
                  <div className="size-10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl text-primary">verified</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-primary">Avançado</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1A1C20]/50 border border-white/10 hover:border-cyan-400/30 transition-colors">
                  <div className="size-10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl text-cyan-400">handyman</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-cyan-400">Intermediário</span>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 rounded-lg bg-[#1A1C20]/50 border border-white/10 hover:border-white/30 transition-colors">
                  <div className="size-10 flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-3xl text-white">school</span>
                  </div>
                  <div>
                    <span className="block text-sm font-bold text-white">Estudos</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-[2] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Avançado */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b-2 border-primary pb-2 mb-2">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <h4 className="font-bold text-lg text-primary">Avançado</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-primary/30 transition-colors">
                    <img alt="React" className="size-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBr7G6wHNRP54nHQn6uisT_AP61SAzg1_fu5tw5u1d-UwG8o24TnVwjmPxyBNwdYg33kdDv_6EVZge_MPhgaouLqxKf2xPXhYegKg0QJn-ZzXmfPmnHxJA48w4YvQCrH-KLXQbNoBnSrjNxaq39Z9VdsmQWVwG3FoMAnqv0K4GvpA0-y7EvdRKQISXhSLewKYrRn7-vibgqnTVQIr_QABrCqYqn5_8g5IDbjz8c4SoZ6YHV89jMHFc66jT2FVkbbLPsBMKD96zY6GP" />
                    <span className="font-semibold text-sm text-gray-200">React & Next.js</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-primary/30 transition-colors">
                    <img alt="NodeJS" className="size-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8QToTE2NIzNCLHc6ex_VJV6WKiM1pDJQaGt9jGxQlymX0mux-DpZbt0Hk0plKXzzihoKr1pYNnplfT03G0qI42yaMoli4euskohje0x33tXeJ9TDYPDg-M7i16NCVOa2DC8zWGystqkHfxVwYl4l9O-HBuKfuFyUdhSChQLD1iyU9aCncw7CJ0TxVn_oK4Qkr-rg6gIfg66bpPq2_LjNdnAuTQkyr_Tu493u2Rd8Y_PC3Gqc2dbUBKxSqRyryDf8Vg5i5UPHrEkLQ" />
                    <span className="font-semibold text-sm text-gray-200">Node.js</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-primary/30 transition-colors">
                    <img alt="TypeScript" className="size-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAh66e8ibhcTNT0q0BzU-PEfFaFQzhsCVm470oEPqSG2t_uX3VNqAMSoIKa44uci-Gets36MBg4nrwPMaJGROsyNGcUjq_kTVUdAW3lJfw8xEAwPsB6-JzZ5aPVCxctMS2BinInsr4HGNKV65u7ZRK1NTv3CZKjnBrobit_sMjMMpZy9cnv9x5gLKNNHaIxEmIkrw3GJZVdGiD-J9vMDS0pGSLgu5BO80ekOMiWjgctJgDAPFjQyzUnmMDMb-Z3eRJMkKud4WPYcSNY" />
                    <span className="font-semibold text-sm text-gray-200">TypeScript</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-primary/30 transition-colors">
                    <img alt="PostgreSQL" className="size-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpPaxlfLNQta1YxiMkBrtqPAdwcc-acjyLVb-5ZssxRR0MlJySyNFbaJzjtKQrUCZ7kfM0QT70wasApOVeQK5VKRkJtUrIghzcoK228MIcTKdCJl00a0_Zs4grJPLgq9zgGLh91Mpae8zCdljGpb78_x0DhUZyVRl8ndrYuzGEzytwLrg5xqDgO1vTz_0bpSvJPb0SQXjxjQxJWDmwrPPe1dznr2DdMpGvK09EL8w6qjIBv1RE8CW1aeg54-PEj21afDMekClqVQlC" />
                    <span className="font-semibold text-sm text-gray-200">PostgreSQL</span>
                  </li>
                </ul>
              </div>

              {/* Intermediário */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b-2 border-cyan-400 pb-2 mb-2">
                  <span className="material-symbols-outlined text-cyan-400 text-xl">handyman</span>
                  <h4 className="font-bold text-lg text-cyan-400">Intermediário</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-cyan-400/30 transition-colors">
                    <img alt="Docker" className="size-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBPhTeLWeyy_yTfglumwQYNiC6dtke9L8eJLqDvlCeKPZ0c_YdsK1Iik8Igc0qr23e5fcs39loGJknJdUgaaQPhvURt1gUonStpOFAC0g6adrdhc4TCCtQlQz-3UdCybHkzqLIHgjBsKr4hCeDEqb-EKbukDS8gxlEE3b0wI9xVDOGYHxozPyJCmAmmfo-PMx_gtamXtozGwwmaHGmpG7quoOW3YcPb5RF52giliqltzeCW7lsGHbV_XfYGFM9wB0NVgR4U_tfMaHLl" />
                    <span className="font-semibold text-sm text-gray-200">Docker</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-cyan-400/30 transition-colors">
                    <img alt="AWS" className="size-6 object-contain bg-white rounded-full p-0.5" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0OARnVo35BSVLC2OLGqpqpd-QrP4P9QD8CsndU-Tvxufdjba_YzVDUo4LnOqecHVaQ5QfAmKXQjl6oITRMbXuE3pTjCUhxXMiUXl_znoXRu8U8mTU8RFkT7Liaipjh8m9TmU4tGD0gAUCm_eG1HeysK_LHtEochVs03w78a3g4h7gZHcMp6BgjDFegBJY8vjpd1gtl1ZlagqchXJYI-nDSgU3FTXHKEXaNcoI7PAF0uLDkNsXSkSgWTYHM88aevRQ8wCtFAqzGlmt" />
                    <span className="font-semibold text-sm text-gray-200">AWS Cloud</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-cyan-400/30 transition-colors">
                    <img alt="Python" className="size-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBbx7AURKst7kvAR9RTYMLm4o6eO3z-XRGhz8jb9pC0d5OY58UslqCCcrvVOJY_o09Jfw-nHKcGHMw7ZuvoMUO-54cIbZ7s0-1xENJ3aeKFWWpZWBZjYXTdA5gcJQK1iIDNo0I-raOuyYnO4b8WYvlvbkyeiuGIg62IL-icBBBvMEq2QXkmgS3tNMq2k92W9Lhy6mQoQRAsmKL0bp5nu_OzwQrFpFmLFGXXE8EzAeRMf3bZl6GsHmpl-T7l8hgotwkKKHPS_otWGTnf" />
                    <span className="font-semibold text-sm text-gray-200">Python</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-cyan-400/30 transition-colors">
                    <img alt="MongoDB" className="size-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBk2MhHsneXbWAdhsy6qUYG0HA7OOAbviYmHaX9jH383odu5Fe7Ho_5MBx93hsuvqaMWzYY-NT8yh3z-B51Su2hncNwBfrWsvnQVJeq0kh5MA0-d-5GZnDSL295q6510CZKa5sUIW9K8B5YfNsEvFh9L3z6GIXZbTokq-4Yev2E3dthNzAmGyI2PEsQ_W7fPE11CtEN6VlvrHQ8V0kUUlTyIH0xIz5rVWGR3xPWq1YZ168t8GqkBAAg9x6xTa0QCgEI9q7t-E8hVN-G" />
                    <span className="font-semibold text-sm text-gray-200">MongoDB</span>
                  </li>
                </ul>
              </div>

              {/* Estudos */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-2 border-b-2 border-white pb-2 mb-2">
                  <span className="material-symbols-outlined text-white text-xl">school</span>
                  <h4 className="font-bold text-lg text-white">Estudos</h4>
                </div>
                <ul className="flex flex-col gap-3">
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-white/30 transition-colors">
                    <img alt="Go" className="size-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA43pR_6ZHUMj3hG9X_7Tz5bLwe2tkIUE2QimQHsPApb4NiCpEspc94biuaFxZgEVBjpF9rsL2zIlQ_xXlMxEo7EMb0MUi-YDoJ0poilnYh12-AmqJ25OTg8zPJjfJU1YHIuq49mvjgwVx0PK5RoIWHVQLQL5YMlGCdETgt8m6G7k1_pGXX9ymNHXMm7jJxl1QZMAN0fbuLWzlw3BeH93Y0udvYZEQGOyulV5jNqSKDwK05oJwvaN7oBnYHiQfOnD7tKt2mLlKotJKe" />
                    <span className="font-semibold text-sm text-gray-200">Go Lang</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-white/30 transition-colors">
                    <img alt="Kubernetes" className="size-6 object-contain" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARFBGag_YiA3tKEe4Cr-tQNEoCsuZstxk4Sl6BlPFNdU4NJgtP8FlHA_T-Ru4dYWi2vrSlKjBGs9miK9tNU0JVAqIC86HZRYAAVivj_jA-vLySATB7jus7Tt7TzVJDV01wuvYFdtXbKE-pah2FlCLFA02x0VMAjxgmj9p5REUu9eAvyPz63Hw1tQvK_v3fe8Dlllq9CqcULRgFWvYDhaVyS72vp0xY9q-HSAeXs5Fu9HREbjlHmTYREiMHc3xWfMrWGIZ5cvMGebyz" />
                    <span className="font-semibold text-sm text-gray-200">Kubernetes</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white/5 p-3 rounded-lg border border-transparent hover:border-white/30 transition-colors">
                    <img alt="Rust" className="size-6 object-contain invert" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAmGIYwSQiQawb_sO_HeSTRnWbKamS_FtF5Av_3LmcS3w5l7rdd42cjsB7B8zP8vuRQQ0X_fEQL6aguLYoR_bD_Zg_a0DLa4xKckHeyHq-H1V-WJgWKLpGHl9aLgpQ1Xt-xf-UXbgVjle-Lccp66UbJzQ8l9d1HFNP1j6biXPwR85d_FAWhTuRFOiDTTCSaq58fNr5NwuPg08CT12XJ54wWUBq4KsQJco7PaMh3XGQvSysJFb076dO3tzQd1hJD1ucTeio85oFfc5IT" />
                    <span className="font-semibold text-sm text-gray-200">Rust</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Skills;