import React from "react";
import { connect } from "react-redux";

// ICONS
import rainIcon from "../icons/rain.svg";
import windIcon from "../icons/wind.svg";
import fireIcon from "../icons/fire.svg";

// BACKGROUND-SOUNDS
import rainSound from "../background-sounds/rain.mp3";
import windSound from "../background-sounds/wind.mp3";
import fireSound from "../background-sounds/fire.mp3";

// CSS
import "./background-sounds-selection.css";

class BackgroundSoundsSelection extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  assets = {
    rain: { icon: rainIcon, sound: rainSound },
    wind: { icon: windIcon, sound: windSound },
    fire: { icon: fireIcon, sound: fireSound }
  };

  handleClick(e) {
    e.preventDefault();
    const clickedIcon = e.target.name;
    this.props.changePlayingStatus(clickedIcon);
  }

  handleVolumeChange(e) {
    const newVolume = e.target.value / 100;
    const soundToChange = e.target.name;
    const audioElementToChange = document.querySelectorAll(
      `audio[name=${soundToChange}]`
    )[0];
    audioElementToChange.volume = newVolume;
  }

  render() {
    return (
      <div id="background-sounds-wrapper">
        <h3>Pick a background sound </h3>
        {/* BACKGROUND SOUNDS ICONS AND VOLUME CONTROLS */}
        <div id="icons-and-volume-controls-wrapper">
          {Object.keys(this.props.state).map(key => {
            return (
              <div id="icons-and-volume-controls" key={key}>
                <img
                  className="icon"
                  name={key}
                  src={this.assets[key].icon}
                  alt={`${key} icon`}
                  onClick={this.handleClick}
                />
                <input
                  className="volume-control"
                  name={key}
                  type="range"
                  min="0"
                  max="100"
                  onChange={this.handleVolumeChange}
                />
                <audio
                  autoPlay
                  muted={!this.props.state[key]}
                  loop
                  src={this.assets[key].sound}
                  name={key}
                  key={key}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changePlayingStatus: payload => {
      dispatch({ type: "CHANGE_PLAYING_STATUS", payload });
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BackgroundSoundsSelection);
