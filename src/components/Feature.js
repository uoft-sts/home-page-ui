import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard'
import download from '../static/download';
import useWindowPosition from '../hook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        },
    }
}));

export default function Feature() {
    const classes = useStyles();
    const checked = useWindowPosition('header');
    return (
        <div className={classes.root} id="download">
            <ImageCard download={download[0]} checked={checked}/>
            <ImageCard download={download[1]} checked={checked}/>
        </div>
    )
}