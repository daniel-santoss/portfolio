import React, { Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import SinglePage from './pages/SinglePage';
import Header from './components/Header';

// Lazy loading do ProjectDetail para reduzir bundle inicial
const ProjectDetail = React.lazy(() => import('./pages/ProjectDetail'));

// Loading fallback component
const LoadingFallback: React.FC = () => (
  <div className="bg-background-dark min-h-screen flex items-center justify-center">
    <div className="flex flex-col items-center gap-4">
      <div className="size-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <p className="text-gray-400 text-sm">Carregando projeto...</p>
    </div>
  </div>
);

const AppContent: React.FC = () => {
  const location = useLocation();
  // ProjectDetail has its own specific header structure in the original HTML
  const isProjectDetail = location.pathname.includes('/project/');

  return (
    <>
      {!isProjectDetail && <Header />}
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<SinglePage />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </Suspense>
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