import React from 'react'
import {Route, BrowserRouter as Router, Switch, Link} from "react-router-dom"
import Home from "./Home"
import Createroom from "./Createroom"
import Joinroom from "./Joinroom"
import Header from "./Header"

function App() {
  return (
    <Router>
      <Header />
      <Switch>
      <Route path="/create" component={Createroom} />
      <Route path="/join" component={Joinroom} />
      <Route path="/" component={Home} />
      </Switch>
      </Router>
    
  );
}

export default App;
