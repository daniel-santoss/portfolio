import React from 'react';
import HomeSection from '../components/sections/HomeSection';
import SkillsSection from '../components/sections/SkillsSection';
import EducationSection from '../components/sections/EducationSection';
import ProjectsSection from '../components/sections/ProjectsSection';
import ContactSection from '../components/sections/ContactSection';

const SinglePage: React.FC = () => {
  return (
    <main className="flex-grow flex flex-col">
      <HomeSection />
      <SkillsSection />
      <EducationSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
};

export default SinglePage;
