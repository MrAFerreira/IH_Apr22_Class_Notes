import './App.css';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ErrorPage from './pages/ErrorPage';
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import Pokemon from './pages/Pokemon';
import Navbar from './components/Navbar';

import { Routes, Route } from 'react-router-dom';

import projectsData from './assets/projects-data.json';

function App() {
  return (
    <div className="App ">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage projects={projectsData} />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/pokemon/:name" element={<Pokemon />} />
        {/* Catches everything except the above routes */}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
