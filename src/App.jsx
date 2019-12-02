import React from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import './App.css';

const unityContent = new UnityContent(
  "Build.json",
  "UnityLoader.js"
);

export const App = () => {
  
  return (
    <div className="App">
      <a className="github-fork-ribbon" href="https://github.com/brian-gates/grand-temple-of-brazenthrone" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
      <div style={{ height: "100vh", width: "100vw", position: "absolute", top: 0, left: 0 }}>
        <Unity unityContent={unityContent}  />
      </div>
      <div style={{ height: "100vh", width: "100vw", position: "absolute", top: 0, left: 0 }}>
        <h1>The Grand Temple of Brazenthrone</h1>
      </div>
    </div>
  );
}

export default App;
