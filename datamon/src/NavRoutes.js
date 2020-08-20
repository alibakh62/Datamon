import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  nav_auth: {
    '& > *': {
      margin: theme.spacing(1),
      borderRadius: 25,
      fontFamiliy: 'Nunito',
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
      <Button variant="contained" 
              color="secondary" 
              onClick={handleClick}>
        Get Started
      </Button>
    </div>
  );
}

export default GetStarted