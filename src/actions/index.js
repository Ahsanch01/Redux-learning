//Action creater
export const selectSong = (song) => {
  // Action
  return {
    type: "SONG_SELECTED",
    payload: song,
  };
};
