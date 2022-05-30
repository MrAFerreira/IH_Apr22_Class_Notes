import './App.css';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import ProjectsListPage from './pages/ProjectsListPage';
import ProjectDetailsPage from './pages/ProjectDetailsPage';
import { Routes, Route } from 'react-router-dom';
import EditProjectPage from './pages/EditProjectPage';
import Signuppage from './pages/Signuppage';
import Loginpage from './pages/Loginpage';
import IsPrivate from './components/IsPrivate';
import IsAnon from './components/IsAnon';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/projects"
          element={
            <IsPrivate>
              <ProjectsListPage />
            </IsPrivate>
          }
        />
        <Route
          path="/projects/:projectId"
          element={
            <IsPrivate>
              <ProjectDetailsPage />
            </IsPrivate>
          }
        />
        <Route
          path="/projects/edit/:projectId"
          element={
            <IsPrivate>
              <EditProjectPage />
            </IsPrivate>
          }
        />
        <Route
          path="/signup"
          element={
            <IsAnon>
              <Signuppage />
            </IsAnon>
          }
        />
        <Route
          path="/login"
          element={
            <IsAnon>
              <Loginpage />
            </IsAnon>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
