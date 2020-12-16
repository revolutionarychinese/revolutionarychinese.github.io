import logo from './logo.svg';
import './App.css';
import html2canvas from 'html2canvas';
import React, { useState, useEffect } from 'react';

// My components
import Headline from './headline/headline.js'
import Words from './words/words.js'
import Countdown from './countdown/countdown.js'

function saveCanvases() {
  var canvases = document.querySelectorAll("canvas");
    function downloadCanvas(canvas) {
    // Convert the canvas to data
    var image = canvas.toDataURL();
    // Create a link
    var aDownloadLink = document.createElement('a');
    // Add the name of the file to the link
    aDownloadLink.download = 'canvas_image.png';
    // Attach the data to the link
    aDownloadLink.href = image;
    // Get the code to click the download link
    aDownloadLink.click();
  }
  canvases.forEach(downloadCanvas);

}

function ChineseWords() {
    return (
      <div>
      <Words/>
      {/* <Words
        simplified="共产主义"
        traditional="共產主義"
        pinyin="gòng chǎn zhǔ yì"
        trans="communism"
      />
      <Words
        simplified="共产主"
        traditional="共產主"
        pinyin="gòng chǎn zhǔ"
        trans="communism"
      />
      <Words
        simplified="共产"
        traditional="共產"
        pinyin="gòng chǎn"
        trans="communism"
      /> */}
      </div>
    );
}

function App() {
  useEffect(() => {
    // Update the document title using the browser API
    var canvases = document.querySelectorAll(".container");
    function appendCanvas(canvas) {
      html2canvas(canvas).then(canvas => {
        console.log("canvas")
        document.querySelector(".canvas").appendChild(canvas)
      });
    }
    canvases.forEach(appendCanvas);
  });


  return (
    <div className="App">
      <header className="App-header">
        <div>
          <Countdown/>
          {/* <ChineseWords/> */}
          {/* <Headline/> */}
        </div>
        <button onClick={saveCanvases}>
        download images
        </button>
        <div class="canvas">
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
