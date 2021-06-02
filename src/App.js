import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { FileMaker } from "./fm";

function App() {
  const [fileNameFM, setFileNameFM] = useState(null);
  // const fileMaker = await fm;
  // fm.then((res) => setFileMaker(res));
  // const [fmObject, setFmObject] = useState(null);
  // let fmProm = new Promise((resolve, reject) => {
  //   const timer = setInterval(function () {
  //     if (!window.FileMaker) {
  //       console.log("timer => window.FileMaker not available");
  //     } else {
  //       clearInterval(timer);
  //       // setFmObject(window.FileMaker);
  //       resolve(window.FileMaker);
  //     }
  //   }, 100);
  //   //Stop trying after 10 seconds
  //   setTimeout(() => {
  //     clearInterval(timer);
  //     reject(`FileMaker not loaded`);
  //   }, 10 * 1000);
  // });

  // fmProm.then((result) => setFmObject(result)).catch(() => setFmObject(null));

  const fmSetFN = (name) => {
    setFileNameFM(name);
    console.log(
      "fmSetFN => fm",
      FileMaker.then((result) => result).catch((err) => console.log(err))
    );
    FileMaker("test", "test From Promse");
    // if (!fm) return;
    // fm.PerformScript("test", "Test from promise");
  };
  // FileMaker("test", "Imediate!");

  window.setFileNameFM = fmSetFN;
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
        <button
          onClick={() => {
            FileMaker("test", "nut");
          }}
        ></button>
      </header>
    </div>
  );
}

export default App;
