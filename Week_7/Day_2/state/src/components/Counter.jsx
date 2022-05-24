import React, { useState } from 'react';

//Hooks

function Counter(props) {
  //useState Hook
  //usestate gives us the state variable and the function to update it
  //Inside the () we can pass the initial value
  const { theme } = props;

  let [count, setCount] = useState(0);

  return (
    <div>
      <h2 className={theme}>Counter</h2>

      <p>You clicked {count} times</p>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}> - </button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}> + </button>
      {/*   <button onClick={() => setCount(count - 1)}> - </button>
      <button onClick={() => setCount(count + 1)}> + </button> */}
    </div>
  );
}

export default Counter;
