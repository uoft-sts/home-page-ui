import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles'
import { AppBar, IconButton, Toolbar, Collapse } from '@material-ui/core'
import SortIcon from '@material-ui/icons/Sort'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll'

const useStyles = makeStyles((themes) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
        height: '100vh',
        fontFamily: 'Nunito'
    },
    appbar: {
        background: 'none'
    },
    appbarWrapper: {
        width: '80%',
        margin: '0 auto'
    },
    appbarTitle: {
        flexGrow: '1',
    },
    icon: {
        color: '#fff',
        fontSize: '2rem'
    },
    colorText : {
        color: "#5AFF3D"
    },
    container : {
        textAlign: 'center'
    },
    title: {
        color: '#fff',
        fontSize: '3rem'
    },
    goDown: {
        color: '#5AFF3D',
        fontSize: "4rem"
    }
}));

export default function App() {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  useEffect(() => {
      setChecked(true);
  });
  return (
    <div className={classes.root} id="header">
      <AppBar className={classes.appbar} elevations={0}>
          <Toolbar classname={classes.appbarWrapper}>
            <h1 className={classes.appbarTitle}>
                <span className={classes.colorText}>Al</span>fina
            </h1>
            <IconButton>
                <SortIcon className={classes.icon}/>
            </IconButton>
          </Toolbar>
      </AppBar>
      <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})} collapsedHeight={50}>
        <div className={classes.container}>
            <h1 className={classes.title}>
                Big <span className={classes.colorText}>data</span>, big mind <br /> Make investment ever <span className={classes.colorText}>easier</span>
            </h1>
            <Scroll to='download' smooth={true}>
                <IconButton>
                    <ExpandMoreIcon className={classes.goDown} />
                </IconButton>
            </Scroll>
        </div>
      </Collapse>
    </div>
  );
}