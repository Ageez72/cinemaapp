import React from "react";
import SearchController from "../SearchController/SearchController";
import faker from "faker";
import {search_Text} from "../../actions/index";
import {connect} from "react-redux";
import {Dropdown} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faCog,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.scss";
class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      confirm: true,
    };
  }
  render() {
    console.log(this.props);
    return (
      <>
        <div className="navbar-wrapper">
          <h1>Cinema App</h1>

          {this.props.registerState === "true" ? (
            <>
              <SearchController />
              <Dropdown>
                <Dropdown.Toggle id="dropdown-basic">
                  <img src={faker.image.avatar()} alt="user" />
                  {sessionStorage.username}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">
                    <FontAwesomeIcon icon={faQuestionCircle} /> Help
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    <FontAwesomeIcon icon={faCog} /> Settings
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="/"
                    onClick={() => sessionStorage.clear()}
                  >
                    <FontAwesomeIcon icon={faSignOutAlt} /> Sign out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </>
          ) : (
            ""
          )}
        </div>
      </>
    );
  }
}
// function mapDispatchToProps(dispatch) {
//   return {
//     search_Text: () => dispatch(search_Text()),
//   };
// }
export default connect(null, {search_Text})(NavBar);
