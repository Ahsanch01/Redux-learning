import React from "react";
import { connect } from "react-redux";

const SongDetails = (props) => {
  console.log(props);

  if (!props.song) {
    return <div>Please Select Song</div>;
  }

  return (
    <div>
      <h3>{props.song.title}</h3>
      <p>{props.song.duration}</p>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetails);
