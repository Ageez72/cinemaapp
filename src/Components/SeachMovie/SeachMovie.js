import React from "react";
import {connect} from "react-redux";
import "./SeachMovie.scss";

class SeachMovie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      movies: [],
      AllMovies: [],
      currentPage: 1,
      todosPerPage: 8,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(event) {
    this.setState({
      currentPage: Number(event.target.id),
    });
    var items = document.querySelectorAll("#page-numbers li");
    items.forEach((item) => {
      item.classList.remove("active");
    });
    event.currentTarget.classList.add("active");
  }
  componentDidMount() {
    var items = document.querySelectorAll("#page-numbers li");
    items[0].classList.add("active");
  }
  render() {
    let AllMovies = this.props.searchInfo.searchResult;
    const {currentPage, todosPerPage} = this.state;

    // Logic for displaying current AllMovies
    const indexOfLastTodo = currentPage * todosPerPage;
    const indexOfFirstTodo = indexOfLastTodo - todosPerPage;
    const currentTodos = AllMovies.slice(indexOfFirstTodo, indexOfLastTodo);
    console.log(currentTodos);
    const renderTodos = currentTodos.map((todo, index) => {
      return (
        <div className="movieResult" key={index}>
          {todo}
        </div>
      );
    });

    // Logic for displaying page numbers
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(AllMovies.length / todosPerPage); i++) {
      pageNumbers.push(i);
    }

    const renderPageNumbers = pageNumbers.map((number) => {
      return (
        <li key={number} id={number} onClick={this.handleClick}>
          {number}
        </li>
      );
    });

    return (
      <div className="seachMovie">
        <div className="seachResults">{renderTodos}</div>
        <ul id="page-numbers">{renderPageNumbers}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchInfo: state,
  };
}
export default connect(mapStateToProps)(SeachMovie);
