import React, { Component } from "react";
import { connect } from "react-redux";
import { selectSong } from "../actions/index";

class SongList extends React.Component {
  renderList = () => {
    return this.props.song.map((s) => {
      return (
        <div className="item" key={s.title}>
          <div className="right floated content">
            <button
              onClick={() => {
                this.props.selectSong(s);
              }}
              className="ui button primary"
            >
              Select
            </button>
          </div>
          <div className="content">{s.title}</div>
        </div>
      );
    });
  };
  render() {
    console.log(this.props);
    return <div className="ui divided list">{this.renderList()}</div>;
  }
}
const mapStateToProps = (state) => {
  console.log(state);
  return { song: state.song };
};
export default connect(mapStateToProps, { selectSong: selectSong })(SongList);
