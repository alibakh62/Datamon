import React from 'react';
import Home from './Home';
import CreateProject from './CreateProject';
import Test from './Test';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        {/* <Home /> */}
        <Switch>
          <Route path="/createproject">
            <CreateProject />
            {/* <Test /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
