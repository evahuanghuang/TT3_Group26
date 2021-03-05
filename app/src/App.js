import React, { Component, ReactDOM, IndexRoute } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Mainpage from "./Mainpage.js";
import login from "./login.js";
import Viewinfo from "./Viewinfo.js";

class App extends Component {
  render() {
    // console.log('children: ', this.props.children);
    return (
      <Router>
        <Route path="/" component={login} exact />
        {/* <IndexRoute component={login} /> //Being a different component */}
        <Route path="/Mainpage" component={Mainpage} exact/>
        <Route path="/viewInfo" component={Viewinfo} exact/>
      </Router>
    );

  }
}

export default App;