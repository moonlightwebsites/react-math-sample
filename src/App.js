import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Button.js';
import MyButton from './Button.js';

function App() {
  const [valOne, setValOne] = useState('21'); // Declare a state variable...
  const [valTwo, setValTwo] = useState('3'); // Declare a state variable...
  const [result, setResult] = useState(null);

  const handleButtonClick = (event) => {
   //alert('here is product ' + valOne * valTwo );
    setResult(valOne * valTwo);
    //event.preventDefault();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input type="text" value={valOne} onChange={e => setValOne(e.target.value)} />
          <input type="text" value={valTwo} onChange={e => setValTwo(e.target.value)} />
          <MyButton calcfunction={handleButtonClick} />
          <div>Result : {result}</div>
        </div>
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
      </header>
    </div>
  );
}

export default App;
