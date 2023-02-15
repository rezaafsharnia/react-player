import { useState } from "react";
import Library from "./components/Library";
import Nav from "./components/Nav";
import Player from "./components/Player";
import Song from "./components/Song";
import "./styles/App.scss";
import { musics } from "./utils";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [songs, setSongs] = useState(musics);
  const [showLibrary, setShowLibrary] = useState(false);
  const [currentSong, setCurrentSong] = useState(
    songs.find((song) => song.active === true)
  );
  return (
    <div className="App">
      {showLibrary && (
        <Library
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          songs={songs}
          setSongs={setSongs}
          setIsPlaying={setIsPlaying}
          isPlaying={isPlaying}
          setShowLibrary={setShowLibrary}
          showLibrary={showLibrary}
        />
      )}
      <div
        style={{
          marginLeft: showLibrary ? "250px" : "",
          transition: ".6s ease All",
        }}
      >
        <Nav showLibrary={showLibrary} setShowLibrary={setShowLibrary} />
        <Song currentSong={currentSong} songs={songs} />
        <Player
          currentSong={currentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          songs={songs}
        />
      </div>
    </div>
  );
}

export default App;
