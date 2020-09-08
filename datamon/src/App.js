import React from 'react';
import './App.css';
import GetStarted from './NavRoutes'
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>DATAMON</h1>
        <GetStarted />
      </header>
      <div className="body">
        <div>
          <h1 className="mission">Our Mission</h1>
        </div>
        <div className="mission_cards">
          <Card className="cards" variant="outlined">
            <CardContent>
              <Typography variant="h3">
                Ali
              </Typography>
              <Typography variant="p">
                This is a paragraph going down here
              </Typography>
            </CardContent>
          </Card>
          <Card className="cards" variant="outlined">
            <CardContent>
              <Typography variant="h3">
                Ali
              </Typography>
              <Typography variant="p">
                This is a paragraph going down here
              </Typography>
            </CardContent>
          </Card>
          <Card className="cards" variant="outlined">
            <CardContent>
              <Typography variant="h3">
                Ali
              </Typography>
              <Typography variant="p">
                This is a paragraph going down here
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default App;
