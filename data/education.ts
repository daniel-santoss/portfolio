import { TimelineItem, Certification, Language } from '../types';

export const educationTimeline: TimelineItem[] = [
  {
    icon: 'school',
    date: 'Fevereiro de 2025 - Dezembro de 2026 (Previsão)',
    title: 'Análise e Desenvolvimento de Sistemas',
    institution: 'Universidade Paulista (UNIP)',
    description: 'Aprofundamento técnico com foco nos conteúdos estudados: Engenharia de Software, Banco de Dados, Programação Web e Mobile, além de Arquitetura de Sistemas e práticas ágeis de desenvolvimento.',
    animate: true,
    hasLine: true,
    dateColor: 'text-primary font-bold'
  },
  {
    icon: 'school',
    date: 'Concluído em Dezembro de 2024',
    title: 'Técnico em Informática',
    institution: 'ITB Brasílio Flores de Azevedo (FIEB) - Ensino Médio Técnico',
    description: 'Esta formação foi a base essencial para o meu começo em desenvolvimento de software, consolidando minha lógica de programação e introduzindo conceitos fundamentais de algoritmos e hardware.',
    animate: false,
    hasLine: false,
    dateColor: 'text-[#637588] dark:text-primary font-medium'
  }
];

export const certificationsData: Certification[] = [
  {
    icon: 'code',
    title: 'Bootcamp XP Inc. - Full Stack Developer',
    institution: 'DIO (Digital Innovation One)',
    date: 'Concluído em Março de 2026',
    description: 'Programa intensivo focado na formação Full Stack, abordando tecnologias como React com JavaScript e TypeScript, Next.js, .NET com C#, NoSQL, Cloud Azure, Docker e DevOps.',
    certLink: 'https://hermes.dio.me/certificates/LSPX4EUY.pdf'
  }
];

export const languages: Language[] = [
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
    level: 'Técnico'
  }
];
