import React from 'react';

const Home: React.FC = () => {
  const educationStacks = [
    { name: 'Tailwind CSS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: '.NET', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg' },
    { name: 'MySQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
    { name: 'Azure', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg' }
  ];

  const socialLinks = [
    {
      name: 'LinkedIn',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg',
      url: 'https://www.linkedin.com/in/daniel-vinicius-07a278275/',
      newTab: true,
      hoverColor: '#0A66C2' // Azul do LinkedIn
    },
    {
      name: 'GitHub',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg',
      url: 'https://github.com/daniel-santoss',
      newTab: true,
      hoverColor: '#ffffff' // Branco para GitHub
    },
    {
      name: 'Email',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg',
      url: 'mailto:danielvinicius.santos7@gmail.com',
      newTab: false,
      hoverColor: '#EA4335' // Vermelho do Gmail
    },
    {
      name: 'WhatsApp',
      logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg',
      url: 'https://wa.me/5511940564648',
      newTab: true,
      hoverColor: '#25D366' // Verde do WhatsApp
    }
  ];

  return (
    <main className="flex-grow flex flex-col items-center">
      <header className="w-full px-4 md:px-40 py-10 md:py-20 flex justify-center">
        <div className="max-w-[960px] w-full flex flex-col gap-10 md:gap-16">
          <div className="@container">
            <div className="flex flex-col-reverse md:flex-row gap-8 items-center">
              <section className="flex flex-col gap-6 flex-1 text-center md:text-left">
                <div className="flex flex-col gap-3">
                  <div className="inline-flex items-center gap-2 self-center md:self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary tracking-wide uppercase border border-primary/20">
                    <span className="size-2 rounded-full bg-primary animate-pulse shadow-[0_0_8px_#39FF14]"></span>
                    Buscando vaga de Estágio / Júnior
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-[-0.033em] text-white">
                    Bem-vindo ao meu portfólio! Eu sou o <span className="text-primary drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]">Daniel Vinicius</span>
                  </h1>
                  <h2 className="text-base md:text-lg font-normal text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                    Sou um desenvolvedor apaixonado por criar soluções web e atualmente estou focado no desenvolvimento Full Stack utilizando o ecossistema React e .NET. Além disso, possuo grande interesse por cibersegurança, área à qual também venho dedicando meus estudos com o propósito de desenvolver aplicações cada vez mais robustas e protegidas. Estou em busca de uma oportunidade de <span className="text-primary font-medium">estágio ou júnior</span> para aprender com a equipe, aplicar meus conhecimentos e evoluir na carreira.
                  </h2>
                </div>
              </section>
              <figure className="w-full md:w-[400px] flex justify-center">
                <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-secondary opacity-10 blur-3xl "></div>
                  <div
                    className="relative w-full h-full rounded-full animate-border-pulse overflow-hidden bg-surface-dark bg-cover bg-center"
                    style={{ backgroundImage: "url('/images/foto-d.jpeg')" }}
                    role="img"
                    aria-label="Portrait of a smiling software developer with a clean background"
                  >
                  </div>
                </div>
              </figure>
            </div>
          </div>
        </div>
      </header>
      <section className="group w-full bg-secondary/5 py-16 px-4 md:px-40 flex justify-center border-y border-secondary/10" aria-label="Principais Tecnologias">
        <div className="max-w-[960px] w-full flex flex-col gap-8">
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl md:text-3xl font-bold text-center text-white">Principais Stacks</h2>
            <div className="h-1 w-0 group-hover:w-full bg-primary rounded-full shadow-[0_0_10px_#39FF14] transition-all duration-500"></div>
          </div>
          <ul className="flex flex-wrap justify-center gap-4">
            {educationStacks.map((stack, index) => (
              <li key={index} className="flex h-10 items-center gap-x-3 rounded-full bg-surface-dark border border-secondary/20 pl-3 pr-5">
                <img src={stack.logo} alt={stack.name} className="w-5 h-5" />
                <p className="text-white text-sm font-medium">{stack.name}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="w-full px-4 md:px-40 py-16 flex justify-center mb-10" aria-label="Links de Contato">
        <div className="max-w-[960px] w-full flex flex-col items-center gap-10">
          <h2 className="text-2xl font-bold text-center text-white">Redes e Contato</h2>
          <nav className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full max-w-4xl">
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
                  <img src={link.logo} alt={link.name} className="w-8 h-8 invert group-hover:invert-0" />
                </div>
                <span className="font-medium text-sm text-white group-hover:text-white transition-colors">{link.name}</span>
              </a>
            ))}
          </nav>
        </div>
      </section>
    </main>
  );
};

export default Home;