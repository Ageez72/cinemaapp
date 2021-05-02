import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import NavBar from "./Components/Navbar/Navbar";
import Dashboard from "./Components/Dashboard/Dashboard";
import LoginPage from "./Components/LoginPage/LoginPage";
import Footer from "./Components/Footer/Footer";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import img from "./imgs/login-shape.svg";
function App() {
  // const [token, setToken] = useState();
  let token = sessionStorage.registerState === "true";
  if (!token) {
    return (
      <div className="wrapper ">
        <img src={img} alt="Card" className="cardImg" />
        <div className="container p-0">
          <NavBar registerState={sessionStorage.registerState} />
          <LoginPage />
          <Footer />
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="container p-0">
        <NavBar registerState={sessionStorage.registerState} />
      </div>
      <div className="container-fluid p-0">
        <hr className="hrLine" />
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    </div>
  );
}

export default App;
