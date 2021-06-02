import { useState } from "react";

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

const fmCheck = () => {
  return new Promise((resolve, reject) => {
    const timer = setInterval(function () {
      if (!window.FileMaker) {
        console.log("timer => window.FileMaker not available");
        // resolve({
        //   PerformScript: function (scriptName, parameters) {
        //     console.log("fm.PerformScript => scriptName", scriptName);
        //     console.log("fm.PerformScript => parameters", parameters);
        //   },
        // });
        // clearInterval(timer);
      } else {
        clearInterval(timer);
        // setFmObject(window.FileMaker);
        resolve(window.FileMaker);
      }
    }, 100);
    //Stop trying after 10 seconds
    setTimeout(() => {
      clearInterval(timer);
      reject({
        PerformScript: function (scriptName, parameters) {
          console.log("fm.PerformScript => scriptName", scriptName);
          console.log("fm.PerformScript => parameters", parameters);
        },
      });
    }, 10 * 1000);
  });
};

const fmSet = async () => {
  const fm = await fmCheck()
    .then((res) => res)
    .catch((err) => {
      console.log("Promise Rejected: window.FileMaker Not available", err);
      return {
        PerformScript: function (scriptName, parameters) {
          console.log("fm.PerformScript => scriptName", scriptName);
          console.log("fm.PerformScript => parameters", parameters);
        },
      };
    });
  console.log("fmSet => window.Filemaker : ", fm);
  return fm;
};

let fm = fmSet()
  .then((result) => result)
  .catch((err) => console.log(err));

// export default fm;

const fmps = (scriptName, parameters) => {
  const prom = new Promise((resolve, reject) => {
    const timer = setInterval(function () {
      if (window.FileMaker) {
        clearInterval(timer);
        // window.FileMaker.PerformScript(scriptName, parameters);
        resolve(window.FileMaker);
      }
    }, 100);
    //Stop trying after 2 seconds
    setTimeout(() => {
      clearInterval(timer);
      console.log("fm.PerformScript => scriptName", scriptName);
      console.log("fm.PerformScript => parameters", parameters);
      reject({
        PerformScript: function (scriptName, parameters) {
          console.log("fm.PerformScript => scriptName", scriptName);
          console.log("fm.PerformScript => parameters", parameters);
        },
      });
    }, 2 * 1000);
  });

  return prom.then((result) => result).catch((err) => console.log(err));
};

const setFileMaker = async () => {
  const fm = await fmps();
  return fm;
};

export const FileMaker = setFileMaker()
  .then((result) => result)
  .catch((err) => console.log(err));
