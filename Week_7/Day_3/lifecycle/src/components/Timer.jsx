import React, { useState, useEffect } from 'react';

//DON'T use hooks at the top level (outside react components)
//DON'T use hooks inside loops

function Timer() {
  const [count, setCount] = useState(0);

  //useEffect
  // useEffect(()=>{}, [])
  //1st param - callback function
  //2nd param - dependency Array

  //----------------------

  useEffect(() => {
    console.log('Mounting phase');
    const id = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    //Returning a function inside useEffect will trigger it only when the component is unmounted/killed
    return () => {
      console.log('Gone');
      clearInterval(id);
    };

    //if the dependency array is empty the function will only trigger once, during the mounting phase
  }, []);
  //-----------------------------------

  useEffect(() => {
    document.title = count;
  }, [count]);

  // ----------------------

  return (
    <div>
      <h2>Timer</h2>
      <h3>{count}</h3>
    </div>
  );
}

export default Timer;
