import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/theme.context';

const imgURL =
  'https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/m3/react-routing/home.gif';

function HomePage() {
  const { theme } = useContext(ThemeContext);
  const [loggedIn, setLoggedIn] = useState(true);

  if (!loggedIn) return <Navigate to="/error" />;

  return (
    <div className={'Homepage ' + theme}>
      <h1>Home</h1>
      <img src={imgURL} alt="home gif" className="page-img" />
    </div>
  );
}

export default HomePage;
