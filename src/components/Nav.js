import React from "react";

function Nav({ setShowLibrary, showLibrary }) {
  return (
    <div className="Nav">
      <button onClick={() => setShowLibrary(!showLibrary)}>Library</button>
    </div>
  );
}

export default Nav;
