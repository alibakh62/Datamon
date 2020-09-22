import React from 'react';
import './Home.css';
import Header from './HomeHeader'
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from '@material-ui/core';

function Home() {
  return (
    <div className="App">
      {/* <header className="header"> */}
        {/* <h1>DATAMON</h1> */}
        <Header />
      {/* </header> */}
        <div className="body">
          <div className="mission-title">
            <h1>Our Mission</h1>
          </div>
          <div className="mission-cards">
            <Card className="cards" 
                  variant="outlined">
              <CardContent>
                <Typography variant="h3">
                  Ali
                </Typography>
                <Typography variant="p">
                  This is a paragraph going down here
                </Typography>
              </CardContent>
            </Card>
            <Card className="cards" 
                  variant="outlined">
              <CardContent>
                <Typography variant="h3">
                  Ali
                </Typography>
                <Typography variant="p">
                  This is a paragraph going down here
                </Typography>
              </CardContent>
            </Card>
            <Card className="cards" 
                  variant="outlined">
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

export default Home;