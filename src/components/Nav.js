import React from "react";

function Nav({ setShowLibrary, showLibrary }) {
  return (
    <div className="Nav">
      <div className="nav-container">
      <img src="https://www.freepnglogos.com/uploads/apple-music-logo-circle-png-28.png" alt="logo" />
      <button onClick={() => setShowLibrary(!showLibrary)}>Library</button>
      </div>
    </div>
  );
}

export default Nav;
