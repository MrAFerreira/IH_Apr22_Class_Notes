import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton/MyButton';
import MyComponent from './components/MyComponent/MyComponent';
const myHeader = <h1>React is cool</h1>;

/* const myHeader2 = React.createElement('h1', null, 'React World')
 */
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton></MyButton>
        <MyButton />
        <MyComponent />
        <br />
        <hr />
        {myHeader}
      </header>
    </div>
  );
}

export default App;
