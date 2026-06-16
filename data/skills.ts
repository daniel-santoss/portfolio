import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    id: 'Front-end',
    title: 'Front-end',
    skills: [
      { name: 'HTML5', icon: 'https://skillicons.dev/icons?i=html' },
      { name: 'CSS3', icon: 'https://skillicons.dev/icons?i=css' },
      { name: 'Tailwind CSS', icon: 'https://skillicons.dev/icons?i=tailwindcss' },
      { name: 'Bootstrap', icon: 'https://skillicons.dev/icons?i=bootstrap' },
      { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
      { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
      { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
      { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
    ]
  },
  {
    id: 'Back-end',
    title: 'Back-end',
    skills: [
      { name: '.NET', icon: 'https://skillicons.dev/icons?i=dotnet' },
      { name: 'C#', icon: 'https://skillicons.dev/icons?i=cs' },
      { name: 'APIs REST', icon: 'https://skillicons.dev/icons?i=fastapi' },
      { name: 'Python', icon: 'https://skillicons.dev/icons?i=python' },
      { name: 'C', icon: 'https://skillicons.dev/icons?i=c' },
    ]
  },
  {
    id: 'Banco de Dados',
    title: 'Banco de Dados',
    skills: [
      { name: 'SQL Server', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg' },
      { name: 'MySQL', icon: 'https://skillicons.dev/icons?i=mysql' },
    ]
  },
  {
    id: 'Cloud & DevOps',
    title: 'Cloud & DevOps',
    skills: [
      { name: 'Microsoft Azure', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azuredevops/azuredevops-original.svg' },
      { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
      { name: 'GitHub', icon: 'https://skillicons.dev/icons?i=github', invert: true },
      { name: 'GitLab', icon: 'https://skillicons.dev/icons?i=gitlab' },
      { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
      { name: 'CI/CD', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/githubactions/githubactions-original.svg' },
    ]
  },
  {
    id: 'Metodologias',
    title: 'Metodologias Ágeis',
    skills: [
      { name: 'Scrum', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg' },
      { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg' },
      { name: 'Trello', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-original.svg' },
    ]
  }
];

export const skillCategories = ['Todas', 'Front-end', 'Back-end', 'Banco de Dados', 'Cloud & DevOps', 'Metodologias'];
