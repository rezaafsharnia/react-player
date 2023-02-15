import React, { useEffect, useRef, useState } from "react";
import { FaPause, FaPlay } from "react-icons/fa";

function Player({ songs, setIsPlaying, isPlaying, currentSong }) {
  const audioRef = useRef();
  const [inputValue, setInputValue] = useState(0);
  const [songInfo, setSongInfo] = useState({
    duration: 0,
    currerntTime: 0,
  });

  // useEffect(() => {
  //   audioRef.current.play();
  // }, []);

  const playHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const changePlayer = (e) => {
    setSongInfo({ ...songInfo, currerntTime: e.target.value });
    audioRef.current.currentTime = e.target.value;
  };

  const getTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const timeUpdateHandler = (e) => {
    setSongInfo({
      ...songInfo,
      currerntTime: e.target.currentTime.toFixed(),
      duration: e.target.duration.toFixed(),
    });
  };

  return (
    <div className="player-container">
      <div className="player">
        <p>{getTime(songInfo.currerntTime)}</p>
        <input
          value={songInfo.currerntTime}
          onChange={changePlayer}
          min={0}
          max={songInfo.duration}
          type="range"
          name="music-range"
        />
        <p>{getTime(songInfo.duration)}</p>
      </div>
      <div>
        <button onClick={playHandler}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>
      <audio
        loop
        autoPlay
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default Player;
