import { combineReducers } from "redux";

const songReducer = () => {
  return [
    { title: "GOAT", duration: "2:04" },
    {
      title: "invisible",
      duration: "3:06",
    },
    {
      title: "B&W",
      duration: "4:00",
    },
  ];
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }

  return selectedSong;
};
export default combineReducers({
  song: songReducer,
  selectedSong: selectSongReducer,
});
