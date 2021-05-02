import React from "react";
import {search_Text} from "../../actions/index";
import {Form, FormControl, Button} from "react-bootstrap";
import MovieCard from "../MovieCard/MovieCard";
import {connect} from "react-redux";
import axios from "axios";
import {debounce} from "lodash";
import searchImg from "../../imgs/search.svg";
import "./SearchController.scss";

class SearchController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      confirm: false,
      searchResult: [],
    };
  }

  performSearch = debounce((searchTerm) => {
    if (searchTerm) {
      const searchURL = `https://api.themoviedb.org/3/search/movie?api_key=ddd39c0e5792fa0e513e65e4998ceb3f&query=${searchTerm}`;
      axios.get(searchURL).then((res) => {
        let moviecards = [];
        let searchResult = res.data.results;
        searchResult.forEach((movie) => {
          moviecards.push(<MovieCard movie={movie} />);
        });
        this.setState({
          text: searchTerm,
          confirm: true,
          searchResult: moviecards,
        });
        this.props.search_Text(
          this.state.text,
          this.state.confirm,
          this.state.searchResult
        );
      });
    } else {
      this.setState({
        text: "",
        confirm: false,
        searchResult: null,
      });
      this.props.search_Text("", false, null);
    }
  }, 1500);

  render() {
    return (
      <>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Search for a movie"
            className="mr-sm-2"
            onChange={(e) => this.performSearch(e.target.value)}
          />
          <Button>
            <img src={searchImg} alt={searchImg} />
          </Button>
        </Form>
      </>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchText: state,
  };
}
export default connect(mapStateToProps, {search_Text})(SearchController);
