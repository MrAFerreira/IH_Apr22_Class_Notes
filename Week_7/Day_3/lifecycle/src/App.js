import './App.css';
import { useState } from 'react';
import Counter from './components/Counter';
import Timer from './components/Timer';
import Apartments from './components/Apartments';

function App() {
  const [show, setShow] = useState(true);
  return (
    <div className="App">
      <Apartments />
      <button onClick={() => setShow(!show)}>{show ? 'Hide' : 'Show'}</button>

      {/* {show && <Counter />} */}
      {/* {show && <Timer />} */}
    </div>
  );
}

export default App;
