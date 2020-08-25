import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const getStartedTheme = createMuiTheme({
  typography: {
    fontFamily: "Nunito",
    fontWeight: 400,
    fontSize: 12
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
    fontSize: 12
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
      fontFamiliy: 'Nunito'
    },
  },
}));

const GetStarted = () => {
  const classes = useStyles();

  const handleClick = () => {
    alert('Get Started is clicked!')
  }

  return (
      <div className={classes.nav_auth}>
        <ThemeProvider theme={loginTheme}>
          <Button variant="contained"
                  color="primary" 
                  onClick={handleClick}>
            Log in
          </Button>
        <ThemeProvider theme={getStartedTheme}>
          <Button variant="contained" 
                  color="secondary" 
                  onClick={handleClick}>
            Get Started
          </Button>
        </ThemeProvider>
        </ThemeProvider>
      </div>
  );
}

export default GetStarted