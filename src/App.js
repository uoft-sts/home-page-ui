import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core'
import Header from './components/Header'
import Feature from './components/Feature'

const useStyles = makeStyles((themes) => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg-green.jpeg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '100%',
    height: '10rem',
    backgroundSize: 'cover'
  },
  panel: {
    minHeight: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/bg-green.jpeg'})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '0px 0px',
    width: '100%',
    height: '10rem',
    backgroundSize: 'cover',
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.root}>
        <CssBaseline />
        <Header />
      </div>
      <div className={classes.panel}>
        <Feature />
      </div>
    </div>
  );
}