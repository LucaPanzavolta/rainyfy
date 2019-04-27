import React from "react";

// ICONS
import rainIcon from "../icons/rain.svg";
import thunderIcon from "../icons/thunder.svg";
import fireIcon from "../icons/fire.svg";

// BACKGROUND-SOUNDS
import rainSound from "../background-sounds/rain.mp3";
import windSound from "../background-sounds/wind.mp3";

// CSS
import "./background-sounds-selection.css";

class BackgroundSoundsSelection extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  state = {
    rainPlaying: false,
    thunderPlaying: false,
    windPlaying: false
  };

  handleClick(e) {
    e.preventDefault();
    const clickedIcon = e.target.name;
    this.setState({
      [`${clickedIcon}Playing`]: !this.state[`${clickedIcon}Playing`]
    });
  }

  returnCorrectSoundSource(key) {
    switch (key) {
      case "rainPlaying":
        return rainSound;
      case "windPlaying":
        return windSound;
      default:
        return "";
    }
  }

  render() {
    return (
      <div id="background-sounds-wrapper">
        <h3>Pick a background sound </h3>
        {/* BACKGROUND SOUNDS ICONS AND VOLUME CONTROLS */}
        <div id="icons-and-volume-controls-wrapper">
          {Object.keys(this.state).map(key => {
            return (
              <div id="icons-and-volume-controls">
                <img
                  className="icon"
                  name="rain"
                  onClick={this.handleClick}
                  src={rainIcon}
                  alt="rain icon"
                />
                <input
                  type="range"
                  className="volume-control"
                  min="0"
                  max="100"
                />
              </div>
            );
          })}
        </div>
        {/* AUDIO PLAYERS */}
        <div id="audio-players">
          {Object.keys(this.state).map(key =>
            this.state[key] ? (
              <audio autoPlay src={this.returnCorrectSoundSource(key)} />
            ) : null
          )}
        </div>
      </div>
    );
  }
}

export default BackgroundSoundsSelection;
