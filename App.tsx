import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Skills from './pages/Skills';
import Education from './pages/Education';
import Projects from './pages/Projects';
import ProjectDetail from './pages/ProjectDetail';
import Header from './components/Header';

const AppContent: React.FC = () => {
  const location = useLocation();
  // ProjectDetail has its own specific header structure in the original HTML
  const isProjectDetail = location.pathname.includes('/project/');

  return (
    <>
      {!isProjectDetail && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <AppContent />
    </HashRouter>
  );
};

export default App;