import React from "react";
import {connect} from "react-redux";
import NewMovies from "../NewMovies/NewMovies";
import MoviesFormat from "../MoviesFormat/MoviesFormat";
import SeachMovie from "../SeachMovie/SeachMovie";
import "./Dashboard.scss";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearch: true,
    };
  }
  render() {
    return (
      <div className="dashboard">
        {this.props.searchInfo.confirm ? (
          <SeachMovie type="search" />
        ) : (
          <>
            <NewMovies />
            <MoviesFormat
              title="Most Popular"
              type="popular"
              selector="mostPopular"
            />
            <MoviesFormat
              title="Top Rated"
              type="top_rated"
              selector="top_rated"
            />
          </>
        )}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchInfo: state,
  };
}
export default connect(mapStateToProps)(Dashboard);
