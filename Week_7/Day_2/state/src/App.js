import React, { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import SimpleList from './components/SimpleList';

function App() {
  const [theme, setTheme] = useState('light');

  //handler functions
  const toggleTheme = (event) => {
    //theme = event.target.value;
    setTheme(event.target.value);
  };

  //1st - We declaring the values we want for the classes (light and dark)
  //2nd - Pass the values to the options
  //3rd - Update the state (theme) with the option selected
  //4th - Update the class of the first div with whatever is in the state

  return (
    <div className={`App ${theme}`}>
      <h1>State in React </h1>
      {/* <Counter theme={theme} />
      <select name="theme" onChange={toggleTheme}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select> */}
      <SimpleList />
    </div>
  );
}

export default App;
