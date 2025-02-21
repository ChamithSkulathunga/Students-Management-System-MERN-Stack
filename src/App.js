import { useNavigate } from 'react-router-dom';
import './App.css';

function App() {

  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Student Management system</h1>
        <button className='student_btn' onClick={()=> navigate('/students')} >Students</button>
      </header>
    </div>
  );
}

export default App;
