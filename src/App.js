import './App.css';
import html2canvas from 'html2canvas';
import React, { useEffect } from 'react';

// My components
// import {default as Component} from './headline/headline.js'
// import {default as Component} from './words/words.js'
// import {default as Component} from './countdown/countdown.js'
import {default as Component} from './mao/mao.js'

function saveCanvases() {
  var canvases = document.querySelectorAll("canvas");
    function downloadCanvas(canvas) {
    // Convert the canvas to data
    var image = canvas.toDataURL();
    // Create a link
    var aDownloadLink = document.createElement('a');
    // Add the name of the file to the link
    aDownloadLink.download = canvas.id + ".png";
    // Attach the data to the link
    aDownloadLink.href = image;
    // Get the code to click the download link
    aDownloadLink.click();
  }
  canvases.forEach(downloadCanvas);

}


function App() {
  useEffect(() => {
    // Update the document title using the browser API
    var canvases = document.querySelectorAll(".container");
    function appendCanvas(canvas) {
      const element_id = canvas.id
      html2canvas(canvas).then(canvas => {
        canvas.id = element_id
        document.querySelector(".canvas").appendChild(canvas)
      });
    }
    canvases.forEach(appendCanvas);
  });


  return (
    <div className="App">
      <header className="App-header">
        <Component/>
        <button onClick={saveCanvases}>
        download images
        </button>
        <div className="canvas">
        </div>
        {/* <p>
          lol <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
