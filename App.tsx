import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import SinglePage from './pages/SinglePage';
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
        <Route path="/" element={<SinglePage />} />
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