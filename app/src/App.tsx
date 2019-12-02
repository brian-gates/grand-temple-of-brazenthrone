import React, { FunctionComponent } from 'react';
import Unity, { UnityContent } from "react-unity-webgl";
import './App.css';

const unityContent = new UnityContent(
  "MyGame/Build.json",
  "MyGame/UnityLoader.js"
);
export const App: FunctionComponent = () => {
  
  return (
    <div className="App">
      <a className="github-fork-ribbon" href="https://github.com/brian-gates/grand-temple-of-brazenthrone" data-ribbon="Fork me on GitHub" title="Fork me on GitHub">Fork me on GitHub</a>
      <h1>The Grand Temple of Brazenthrone</h1>
      <Unity unityContent={unityContent} />
    </div>
  );
}

export default App;
