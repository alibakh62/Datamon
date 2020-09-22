import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import GetStarted from './GetStarted'
import { useStateValue } from './StateProvider'
import './HomeHeader.css'
import { useHistory } from "react-router-dom"

const getStartedTheme = createMuiTheme({
  typography: {
    fontFamily: "Nunito",
    fontWeight: 400,
    fontSize: 16,
  },
  spacing: {
    marginLeft: 1
  }
});

const loginTheme = createMuiTheme({
  // palette: {
  //   primary: HUE[100]
  // },
  typography: {
    fontFamily: "Nunito",
    fontWeight: 400,
    fontSize: 16,
    color: 'white',
  },
  spacing: {
    marginRight: 1,
    marginTop: 3
  }
});

const useStyles = makeStyles((theme) => ({
  nav_auth: {
    '& > *': {
      margin: theme.spacing(3),
      borderRadius: 25,
      fontFamiliy: 'Nunito',
      color: 'white',
    },
  },
}));

const Header = () => {
  const classes = useStyles();
  const [showMenu, setShowMenu] = React.useState(false);
  const [{ user }] = useStateValue();
  const history = useHistory();

  const handleAboutClick = () => {
    alert('About us is clicked!')
  }

  const handleLoginClick = () => {
    alert('Login is clicked!')
  }

  return (
    <div className="header__home">
      <div className="header__left">
        <h1>DATAMON</h1>
      </div>
      {/* <div className={classes.nav_auth}> */}
      <div className="header__right">
        {/* <ThemeProvider theme={loginTheme}> */}
          <Button onClick={() => history.push('/')}>
            Home
          </Button>
          <Button onClick={handleAboutClick}>
            About us
          </Button>
          {/* <Button variant="contained"
                  color="primary" 
                  onClick={handleLoginClick}>
            Log in
          </Button> */}
          <Avatar className="header__avatar"
                  alt={user?.displayName}
                  src={user?.photoURL}
          />
        {/* <ThemeProvider theme={getStartedTheme}> */}
          <Button variant="contained" 
                  color="secondary" 
                  onClick={() => setShowMenu((showMenu) => !showMenu)}>
            Get Started
          </Button>
        {/* </ThemeProvider> */}
        {/* </ThemeProvider> */}
      </div>
      <div>
        {showMenu ? <GetStarted /> : null}
      </div>
    </div>
  );
}

export default Header