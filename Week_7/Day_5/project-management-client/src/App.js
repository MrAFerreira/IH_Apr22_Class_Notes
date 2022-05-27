import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsListPage from './pages/ProjectsListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import { Routes, Route } from 'react-router-dom';
import EditProjectPage from './pages/EditProjectPage';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<ProjectsListPage />} />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />
        <Route path="/projects/edit/:projectId" element={<EditProjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
