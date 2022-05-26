import { Link, NavLink } from 'react-router-dom';

import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={'Navbar ' + theme}>
      <ul>
        {/*  <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link> */}
        <NavLink to="/" className={({ isActive }) => (isActive ? 'selected' : '')}>
          Home
        </NavLink>
        <NavLink to="/about" className={({ isActive }) => (isActive ? 'selected' : '')}>
          About
        </NavLink>
        <NavLink to="/projects" className={({ isActive }) => (isActive ? 'selected' : '')}>
          Projects
        </NavLink>
      </ul>
      <button onClick={toggleTheme}>{theme === 'light' ? 'Dark Mode' : 'Light Mode'} </button>
    </nav>
  );
}

export default Navbar;
