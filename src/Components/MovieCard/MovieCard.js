import React from "react";
import "./MovieCard.scss";
import VideoModal from "../VideoModal/VideoModal";
import axios from "axios";
import heart from "../../imgs/heart.svg";
import starsFilled from "../../imgs/star-filled.svg";
import emptyStars from "../../imgs/empty-star.svg";
class MovieCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalShow: false,
      trailer: "",
    };
  }
  showModel = (e) => {
    // console.log(e.target.id);
    this.setState({modalShow: true});
    let movieID = e.target.id;
    const trailerURL = `https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=ddd39c0e5792fa0e513e65e4998ceb3f`;
    axios.get(trailerURL).then((res) => {
      let trailerResult = res.data.results[0].key;
      // console.log(trailerResult);
      this.setState({
        trailer: trailerResult,
      });
    });
  };
  render() {
    const overview = this.props.movie.overview;
    let res = overview.substr(0, 50);
    return (
      <>
        <VideoModal
          show={this.state.modalShow}
          onHide={() => this.setState({modalShow: false})}
          trailer={this.state.trailer}
        />
        <span variant="primary" onClick={(e) => this.showModel(e)}>
          <div className="card-wrapper">
            <div className="poster">
              <img
                src={`https://image.tmdb.org/t/p/w500${this.props.movie.poster_path}`}
                alt="poster"
              />
            </div>
            <div className="overlay" id={this.props.movie.id}>
              <span className="heart">
                <img src={heart} alt={heart} />
              </span>
              <div className="descStars">
                <span className="stars">
                  <img src={starsFilled} alt={starsFilled} />
                  <img src={starsFilled} alt={starsFilled} />
                  <img src={starsFilled} alt={starsFilled} />
                  <img src={emptyStars} alt={emptyStars} />
                  <img src={emptyStars} alt={emptyStars} />
                </span>
                <span className="description">{res + "..."}</span>
              </div>
            </div>
          </div>
        </span>
      </>
    );
  }
}
export default MovieCard;
