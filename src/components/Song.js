import React, { useState } from "react";

function Song({ currentSong }) {

  const { name, cover, artist } = currentSong;

  return (
    <div className="song-container">
      <img src={cover} alt={name} />
      <div className="song-detail">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  );
}

export default Song;
