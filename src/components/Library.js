import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
import React from "react";

function Library({
  songs,
  setCurrentSong,
  setSongs,
  currentSong,
  setIsPlaying,
  isPlaying,
  setShowLibrary,
  showLibrary,
}) {
  const activeHandler = (id) => {
    currentSong.active = false;
    setSongs([...songs]);
    const selectedSong = songs.find((song) => song.id === id);
    selectedSong.active = !selectedSong.active;
    setCurrentSong(selectedSong);
    setSongs([...songs]);
    if (isPlaying === false) {
      setIsPlaying(!isPlaying);
    }
  };

const closeLibraryHandler = () => {
  console.log("first")
  setShowLibrary(!showLibrary)
}

  return (
    <motion.div
      initial={{ x: -300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="library_container"
    >
      <div className="library-header">
        <h2>Library</h2>
        <button onClick={closeLibraryHandler}>
          <GrClose />
        </button>
      </div>
      {songs.map((song) => {
        return (
          <div
            onClick={() => activeHandler(song.id)}
            className={song.active ? "song-card Active" : "song-card nonActive"}
            key={song.id}
          >
            <img src={song.cover} alt={song.name} />
            <div>
              <h3>{song.name}</h3>
              <h4>{song.artist}</h4>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}

export default Library;
