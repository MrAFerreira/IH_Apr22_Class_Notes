import './App.css';
import Navbar from './components/Navbar';
import Greeting from './components/Greeting';
import StudentCard from './components/StudentCard';
import StudentList from './components/StudentList';
import ReactPlayer from 'react-player';

const apiResponse = 'André';

function App() {
  return (
    <div className="App">
      <Navbar username={apiResponse} />
      <Greeting firstName="João" age={22} />
      <Greeting firstName={apiResponse} />
      <Greeting firstName="Alexandre" />
      <hr />
      <StudentList>
        <h1>This works</h1>
        <StudentCard firstName="Matilde" info={{ cohort: 'Web', city: 'Lis' }} week={7} />
        <StudentCard firstName={apiResponse} info={{ cohort: 'Data', city: 'Bcn' }} week={5} />
        <StudentCard firstName="Letícia" info={{ cohort: 'Web', city: 'Lis' }} week={7} />
        <StudentCard firstName="Letícia" info={{ cohort: 'Web', city: 'Lis' }} week={7} />
      </StudentList>
      <hr />
      <ReactPlayer url="https://www.youtube.com/watch?v=Jgz_YdlPgNk" playing />
      <ReactPlayer
        url="https://www.youtube.com/watch?v=o9cQ3RN_l1o"
        playing
        controls
        volume={0.5}
      />
    </div>
  );
}

export default App;
