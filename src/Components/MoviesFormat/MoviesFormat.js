import React from "react";
import axios from "axios";
import MovieCard from "../MovieCard/MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./MoviesFormat.scss";

class MoviesFormat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
    };
    this.getStartedMovies();
  }
  getStartedMovies = () => {
    const type = this.props.type;
    const URLPopular = `https://api.themoviedb.org/3/movie/${type}?api_key=ddd39c0e5792fa0e513e65e4998ceb3f`;
    axios.get(URLPopular).then((res) => {
      const movies = res.data.results;
      this.setState({movies});
    });
  };
  render() {
    const movies = this.state.movies;
    let moviecards = [];
    movies.forEach((movie) => {
      moviecards.push(
        <div key={movie.id}>
          <MovieCard movie={movie} key={movie.id} />
        </div>
      );
    });

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    };
    const className = `movies ${this.props.selector}`;
    return (
      <div className={className}>
        <h2>{this.props.title}</h2>
        <Slider {...settings}>{moviecards}</Slider>
      </div>
    );
  }
}

export default MoviesFormat;
