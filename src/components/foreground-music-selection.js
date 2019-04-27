import React from "react";
import youtubeLogo from "../icons/youtube.png";
import "./foreground-music-selection.css";

class ForegroundMusicSelection extends React.Component {
  render() {
    return (
      <div id="foreground-music-wrapper">
        <img className="logo" src={youtubeLogo} alt="youtube logo" />
      </div>
    );
  }
}

export default ForegroundMusicSelection;
