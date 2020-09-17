import React from 'react';
import Home from './Home';
import Login from './Login'
import CreateProject from './CreateProject';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from './StateProvider'

function App() {

  // const [user, setUser] = React.useState(null);
  const [{ user }, dispatch] = useStateValue();

  return (
    <div>
      <Router>
        {!user ? (
            <Login />
          ) : (
          <Switch>
            <Route path="/createproject">
              <CreateProject />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          )
        }
      </Router>
    </div>
  );
}

export default App;
