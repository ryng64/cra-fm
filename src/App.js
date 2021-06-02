import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [fileNameFM, setFileNameFM] = useState(null);
  const [fmObject, setFmObject] = useState(null);
  const fmProm = new Promise((resolve, reject) => {
    const timer = setInterval(function () {
      if (!window.FileMaker) {
        console.log("timer => window.FileMaker not available");
      } else {
        clearInterval(timer);
        // setFmObject(window.FileMaker);
        resolve(window.FileMaker);
      }
    }, 100);
    setTimeout(() => {
      clearInterval(timer);
      reject(`FileMaker Not Loaded`);
    }, 10 * 1000);
  });

  fmProm.then((result) => setFmObject(result)).catch(() => setFmObject(null));
  // window.FileMaker.PerformScript("test", `App => FileName: ${fileNameFM}`);

  const fmSet = (name) => {
    setFileNameFM(name);
    console.log(fmObject);
    fmObject.PerformScript("test", "Test from promise");
  };

  const autoFM = () => {};
  // fmSet();

  window.setFileNameFM = fmSet;
  // performFM();
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
          {`FileMaker FileName: ${fileNameFM}`}
        </a>
      </header>
    </div>
  );
}

export default App;
