import React from "react";
import {Carousel} from "react-bootstrap";
import oblivion from "../../imgs/oblivion.png";
import playImg from "../../imgs/play.svg";
import "./NewMovies.scss";

class NewMovies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      persons: [],
    };
  }

  handleSelect = (selectedIndex) => {
    this.setState({
      index: selectedIndex,
    });
  };

  render() {
    return (
      <>
        <Carousel activeIndex={this.state.index} onSelect={this.handleSelect}>
          <Carousel.Item>
            <div className="overlay"></div>
            <img className="d-block w-100" src={oblivion} alt="First slide" />
            <Carousel.Caption>
              <p className="newMovie">New Movie</p>
              <p className="artistName">Tom Cruise</p>
              <h3>Oblivion</h3>
              <p className="viewTrailer">
                <img src={playImg} alt={playImg} /> View Trailer
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay"></div>
            <img className="d-block w-100" src={oblivion} alt="Second slide" />

            <Carousel.Caption>
              <p className="newMovie">New Movie</p>
              <p className="artistName">Tom Cruise</p>
              <h3>Oblivion</h3>
              <p className="viewTrailer">
                <img src={playImg} alt={playImg} /> View Trailer
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className="overlay"></div>
            <img className="d-block w-100" src={oblivion} alt="Third slide" />

            <Carousel.Caption>
              <p className="newMovie">New Movie</p>
              <p className="artistName">Tom Cruise</p>
              <h3>Oblivion</h3>
              <p className="viewTrailer">
                <img src={playImg} alt={playImg} /> View Trailer
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </>
    );
  }
}

export default NewMovies;
