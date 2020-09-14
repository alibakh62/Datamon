import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import GetStarted from './GetStarted'

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

  const handleAboutClick = () => {
    alert('About us is clicked!')
  }

  const handleLoginClick = () => {
    alert('Login is clicked!')
  }

  const handleMenuClick = () => {
    setShowMenu((showMenu) => !showMenu);
  }

  return (
    <div className="header__home">
      <div className={classes.nav_auth}>
        <ThemeProvider theme={loginTheme}>
          <Button onClick={handleAboutClick}>
            About us
          </Button>
          <Button variant="contained"
                  color="primary" 
                  onClick={handleLoginClick}>
            Log in
          </Button>
        <ThemeProvider theme={getStartedTheme}>
          <Button variant="contained" 
                  color="secondary" 
                  onClick={handleMenuClick}>
            Get Started
          </Button>
        </ThemeProvider>
        </ThemeProvider>
      </div>
      <div>
        {showMenu ? <GetStarted /> : null}
      </div>
    </div>
  );
}

export default Header