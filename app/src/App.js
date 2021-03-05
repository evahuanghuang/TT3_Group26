import React, { Component, ReactDOM, IndexRoute } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Mainpage from "./Components/Mainpage.js";
import login from "./Components/login.js";
import Viewinfo from "./Components/Viewinfo.js";
import ViewPricing from "./Components/viewpricing.js";
import transHistory from "./Components/transchistory.js";

class App extends Component {
  render() {
    // console.log('children: ', this.props.children);
    return (
      <Router>
        <Route path="/" component={login} exact />
        {/* <IndexRoute component={login} /> //Being a different component */}
        <Route path="/Mainpage" component={Mainpage} exact/>
        <Route path="/viewInfo" component={Viewinfo} exact />
        <Route path="/viewPricing" component={ViewPricing} exact />
        <Route path="/transHistory" component={transHistory} exact/>
      </Router>
    );

  }
}

export default App;