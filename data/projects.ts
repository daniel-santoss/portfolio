import { Project, TechItem } from '../types';

// Dicionário global de tecnologias para unificação de ícones e cores
export const TECHNOLOGIES: Record<string, TechItem & { tagColor: string }> = {
  dotnet10: {
    name: '.NET 10',
    color: '#512BD4',
    icon: 'https://skillicons.dev/icons?i=dotnet',
    iconType: 'image',
    tagColor: 'text-violet-200'
  },
  dotnet: {
    name: '.NET',
    color: '#512BD4',
    icon: 'https://skillicons.dev/icons?i=dotnet',
    iconType: 'image',
    tagColor: 'text-violet-200'
  },
  react19: {
    name: 'React 19',
    color: '#61DAFB',
    icon: 'https://skillicons.dev/icons?i=react',
    iconType: 'image',
    tagColor: 'text-cyan-200'
  },
  react: {
    name: 'React',
    color: '#61DAFB',
    icon: 'https://skillicons.dev/icons?i=react',
    iconType: 'image',
    tagColor: 'text-cyan-200'
  },
  gemini: {
    name: 'Gemini 2.5',
    color: '#F4B400',
    icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8f/Google-gemini-icon.svg',
    iconType: 'image',
    tagColor: 'text-yellow-200'
  },
  sqlserver: {
    name: 'SQL Server',
    color: '#CC292B',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg',
    iconType: 'image',
    tagColor: 'text-blue-200'
  },
  typescript: {
    name: 'TypeScript',
    color: '#3178C6',
    icon: 'https://skillicons.dev/icons?i=ts',
    iconType: 'image',
    tagColor: 'text-blue-300'
  },
  tailwind: {
    name: 'Tailwind CSS',
    color: '#264DE4',
    icon: 'https://skillicons.dev/icons?i=tailwindcss',
    iconType: 'image',
    tagColor: 'text-blue-200'
  },
  vite: {
    name: 'Vite',
    color: '#646CFF',
    icon: 'https://skillicons.dev/icons?i=vite',
    iconType: 'image',
    tagColor: 'text-violet-200'
  },
  csharp: {
    name: 'C#',
    color: '#9B4F96',
    icon: 'https://skillicons.dev/icons?i=cs',
    iconType: 'image',
    tagColor: 'text-purple-200'
  },
  mysql: {
    name: 'MySQL',
    color: '#4479A1',
    icon: 'https://skillicons.dev/icons?i=mysql',
    iconType: 'image',
    tagColor: 'text-orange-200'
  },
  entityframework: {
    name: 'Entity Framework',
    color: '#68217A',
    icon: 'database',
    iconType: 'font',
    tagColor: 'text-purple-300'
  },
  c: {
    name: 'C',
    color: '#A8B9CC',
    icon: 'https://skillicons.dev/icons?i=c',
    iconType: 'image',
    tagColor: 'text-blue-200'
  },
  gcc: {
    name: 'GCC',
    color: '#FFCB2B',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gcc/gcc-original.svg',
    iconType: 'image',
    tagColor: 'text-yellow-200'
  },
  fileio: {
    name: 'File I/O',
    color: '#4CAF50',
    icon: 'description',
    iconType: 'font',
    tagColor: 'text-green-200'
  },
  terminal: {
    name: 'Terminal',
    color: '#607D8B',
    icon: 'terminal',
    iconType: 'font',
    tagColor: 'text-gray-200'
  }
};

// Helper para gerar caminhos de galeria sequenciais de forma dinâmica
export const generateGallery = (basePath: string, prefix: string, count: number, ext: string = 'webp'): string[] => {
  return Array.from({ length: count }, (_, i) => `${basePath}/${prefix}${i + 1}.${ext}`);
};

export const projectsData: Project[] = [
  {
    id: 4,
    title: 'Clínica Mais Saúde',
    category: 'Full-stack',
    image: '/images/clinica/capa.webp',
    date: '2026',
    type: 'SISTEMA DE GESTÃO PARA CLÍNICA MÉDICA COM IA INTEGRADA',
    description: 'Uma plataforma médica integrada projetada para centralizar e automatizar toda a jornada de atendimento clínico. A ferramenta resolve a complexidade na gestão de diferentes públicos (pacientes, médicos, enfermeiros e administradores), eliminando processos manuais em papel e erros na triagem de sintomas, garantindo um fluxo ágil, organizado e seguro desde o agendamento até a consulta final.',
    shortDescription: 'Plataforma clínica full-stack com controle de acesso (RBAC), auditoria e triagem inteligente de sintomas por IA (Gemini 2.5).',
    techStack: ['dotnet', 'csharp', 'react', 'typescript', 'sqlserver', 'gemini'],
    gallery: [],
    highlights: [
      'Arquitetura limpa (Clean Architecture) estrita com desacoplamento total em .NET 10.',
      'Integração com IA (Gemini 2.5) para análise preditiva de sintomas e triagem de especialidades médicas.',
      'Controle de acesso baseado em função (RBAC) para Pacientes, Médicos, Enfermeiras e Administradores com tokens JWT robustos.',
      'Auditoria completa, rastreável e criptografada de todas as ações de escrita e transições de estado do sistema.',
      'Métricas críticas em tempo real com dashboard integrado para taxas de ausência e consolidação de status.',
      'Paginação nativa server-side de máxima performance, garantindo carregamento instantâneo de milhares de registros.'
    ],
    repoLink: 'https://github.com/daniel-santoss/PIM_III_ClinicaMaisSaude',
    deployLink: ''
  },
  {
    id: 1,
    title: 'Studio Tattoo INK',
    category: 'Front-end',
    image: '/images/studioInk/capa.webp',
    date: '2025',
    type: 'SISTEMA DE AGENDAMENTO PARA ESTÚDIO DE TATUAGEM',
    description: 'Um site moderno projetado para estúdios de tatuagem com o objetivo de aproximar clientes e artistas. A aplicação soluciona a dificuldade em divulgar portfólios profissionais de forma organizada e facilita o agendamento de sessões, oferecendo uma experiência visual imersiva que destaca o talento artístico e os trabalhos realizados.',
    shortDescription: 'Interface web moderna para estúdio de tatuagem, focada em UI/UX. Projeto front-end com páginas de agendamento, portfólio de artistas e galeria.',
    techStack: ['react', 'typescript', 'vite', 'tailwind'],
    gallery: generateGallery('/images/studioInk', 'imagem', 33, 'webp'),
    highlights: [
      'Interface moderna e totalmente responsiva para mobile e desktop.',
      'Componentização de UI eficiente com React e tipagem estrita em TypeScript.',
      'Navegação fluida e transições de rotas utilizando React Router.',
      'Estilização modular com Tailwind CSS para design consistente, escalável e customizável.',
      'Build de produção otimizado com Vite para carregamento rápido e performance de carregamento.'
    ],
    repoLink: 'https://github.com/daniel-santoss/StudioTattooINK',
    deployLink: 'https://studio-tattoo-ink.vercel.app/'
  },
  {
    id: 3,
    title: 'WebApi - API RESTful',
    category: 'Back-end',
    image: '/images/webAPI/capa.webp',
    date: '2025',
    type: 'API REST VIA SWAGGER',
    description: 'Um sistema de retaguarda projetado para servir como central inteligente de armazenamento e processamento de dados organizacionais. O projeto resolve a lentidão e a falta de segurança na troca de informações entre sistemas corporativos, com a finalidade de fornecer serviços rápidos, seguros e ininterruptos para que aplicativos e interfaces web consumam e gerenciem dados em tempo real.',
    shortDescription: 'API RESTful desenvolvida em C# (.NET) para gerenciamento de dados, utilizando boas práticas de desenvolvimento e arquitetura limpa.',
    techStack: ['dotnet', 'csharp', 'mysql', 'entityframework'],
    gallery: [
      '/images/webAPI/foto1_index.webp',
      '/images/webAPI/foto2_mario.webp',
      '/images/webAPI/foto3_bowser.webp',
      '/images/webAPI/foto4_get.webp',
      '/images/webAPI/foto5_getID.webp',
      '/images/webAPI/foto6_putP1.webp',
      '/images/webAPI/foto6_putP2.webp',
      '/images/webAPI/foto7_getAtualizado.webp',
      '/images/webAPI/foto8_delete.webp',
      '/images/webAPI/foto9_getFinal.webp'
    ],
    highlights: [
      'Arquitetura limpa (Clean Architecture) estrita para total desacoplamento e manutenibilidade do código.',
      'Injeção de dependência nativa e persistência de dados utilizando Entity Framework Core no MySQL.',
      'Otimização extrema de recursos e I/O através do uso de processamento assíncrono (async/await) em todas as rotas.',
      'Middleware centralizado e robusto para tratamento de exceções global e validações de dados de entrada.',
      'Documentação e testes de endpoints interativos gerados de forma automática com Swagger UI.'
    ],
    repoLink: 'https://github.com/daniel-santoss/WebApi',
    deployLink: ''
  },
  {
    id: 2,
    title: 'PIM II - Sistema Escolar',
    category: 'Back-end',
    image: '/images/PimConsole/ImagemCapaPim.webp',
    date: '2025',
    type: 'SISTEMA DE ADMINISTRAÇÃO ESCOLAR VIA TERMINAL',
    description: 'Um sistema integrador de administração escolar projetado para organizar rotinas pedagógicas e administrativas de instituições de ensino. A aplicação resolve a desorganização em diários de classe manuais e a dificuldade de consolidação de dados acadêmicos, com o objetivo de facilitar o controle de turmas, controle de presenças diárias, lançamentos de notas e acompanhamento do rendimento escolar.',
    shortDescription: 'Sistema completo de gestão escolar via terminal, desenvolvido em C como projeto integrador do 2º semestre da faculdade.',
    techStack: ['c', 'gcc', 'fileio', 'terminal'],
    gallery: generateGallery('/images/PimConsole', 'Imagem', 32, 'webp'),
    highlights: [
      'Arquitetura modular em C ANSI puro estruturada em 7 módulos principais e 6 estruturas de dados complexas (~2800 linhas).',
      'Controle rígido de permissões e segurança com 3 perfis de usuários: Administrador, Professor e Aluno.',
      'Diário eletrônico completo para lançamento automatizado de avaliações, notas e controle de frequências.',
      'Persistência em disco robusta usando sistema de arquivos nativo estruturado (File System via arquivos de texto).',
      'Módulo inteligente de validação de dados de entrada (validação de formato de CPF, notas e consistência de datas).'
    ],
    repoLink: 'https://github.com/daniel-santoss/PIM_II',
    deployLink: ''
  }
];
