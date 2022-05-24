import './App.css';
import React, { useState } from 'react';
import MovieList from './components/MovieList';
import Spinner from './components/Spinner';

function App() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        <MovieList />
      </div>
    );
  }
}

export default App;
