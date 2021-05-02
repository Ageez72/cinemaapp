import "./MainPage.scss";
import React from "react";

class MainPage extends React.Component {
  render() {
    return (
      <div
        className="mainPage"
        onClick={() => localStorage.setItem("registerState", "false")}
      >
        MainPage
      </div>
    );
  }
}

export default MainPage;
