import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './Button.js';
import MyButton from './Button.js';
import 'mathjs';

function App() {
  const math = require("mathjs");
  const [valOne, setValOne] = useState('21'); // Declare a state variable...
  const [valTwo, setValTwo] = useState('3'); // Declare a state variable...
  const [result, setResult] = useState(null);

  const [valCsl, setValCsl] = useState('4,7,2,9'); // Declare a state variable...
  const [resultSortedList, setResultSortedList] = useState(null);
  const [resultMean, setResultMean] = useState(null);
  const [resultMedian, setResultMedian] = useState(null);
  const [resultMode, setResultMode] = useState(null);
  const [resultRange, setResultRange] = useState(null);

  const handleButtonClick = (event) => {
    setResult(valOne * valTwo);
  };
  const handleButtonCalculationClick = (event) => {
     var numberArray = valCsl.split(",").map(Number); // get a number array from the comma separated list
     setResultSortedList(numberArray.sort((a, b) => a - b).join(","));
     setResultMean(math.mean(numberArray).toFixed(1));
     //
     setResultMode(math.mode(numberArray).join(","));
     setResultRange(math.max(numberArray) - math.min(numberArray));
   };

  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-row">
          <div className="App-header-column"><img src={logo} className="App-logo" alt="logo" /></div>
          <div className="App-header-column">An example of a web app that calculates mean, median , mode, and range.
            <br />Enter the string of numbers separated by commas then click the Calculate button.
          </div>
        </div>

        <div>
          <hr />
          Input a comma separated list : <input type="text" value={valCsl} onChange={e => setValCsl(e.target.value)} />
          <br />
          <MyButton calcfunction={handleButtonCalculationClick} />
          <br />
          <div>Sorted List : {resultSortedList}</div>
          <br />
          <div>Mean : {resultMean}</div>
          <br />
          <div>Median : Need to add this!</div>
          <br />
          <div>Mode : {resultMode}</div>
          <br />
          <div>Range :{resultRange}</div>
          <br />

        </div>

        <div>
          <hr />
          <h3>Old stuff below here</h3>
          <input type="text" value={valOne} onChange={e => setValOne(e.target.value)} />
          <input type="text" value={valTwo} onChange={e => setValTwo(e.target.value)} />
          <MyButton calcfunction={handleButtonClick}  />
          <div>Result : {result}</div>
        </div>

      </header>
      <body>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </body>
    </div>
  );
}

export default App;
