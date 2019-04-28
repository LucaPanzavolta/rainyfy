import React from "react";
import BackgroundSoundsSelection from "./components/background-sounds-selection";
import ForegroundMusicSelection from "./components/foreground-music-selection";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div id="logo">
        Rainyfy
        <p id="slogan">Add relaxing background sounds to your music.</p>
      </div>
      <div id="container">
        <BackgroundSoundsSelection />
        {/* <ForegroundMusicSelection /> */}
      </div>
    </div>
  );
}

export default App;
