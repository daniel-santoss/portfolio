import { SocialLink } from '../types';

export const CV_PATH = '/CV/CV_DanielVinicius.pdf';

export const socialLinks: SocialLink[] = [
  {
    name: 'LinkedIn',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg',
    url: 'https://www.linkedin.com/in/daniel-vinicius-07a278275/',
    newTab: true,
    hoverColor: '#0A66C2'
  },
  {
    name: 'GitHub',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/github.svg',
    url: 'https://github.com/daniel-santoss',
    newTab: true,
    hoverColor: '#ffffff'
  },
  {
    name: 'Email',
    logo: 'https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/gmail.svg',
    url: 'mailto:danielvinicius.santos7@gmail.com',
    newTab: false,
    hoverColor: '#EA4335'
  }
];

export const navItems = [
  { id: 'sobre', label: 'Sobre Mim' },
  { id: 'habilidades', label: 'Habilidades e Tecnologias' },
  { id: 'jornada', label: 'Jornada Acadêmica' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'contato', label: 'Contato' },
];
