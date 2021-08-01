import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    maxWidth: 545,
    background: 'rgba(0,0,0,0.5)',
    margin: '20px'
  },
  media: {
    height: 300
  },
  title: {
      fontFamily: 'Nunito',
      fontWeight: 'bold',
      fontSize: '2rem',
      color: '#fff'
  },
  desc: {
    fontFamily: 'Nunito',
    fontSize: '1.1rem',
    color: '#ddd',
  },
});

export default function ImageCard({ download, checked }) {
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
        <Card className={classes.root}>
            <CardMedia
            component="img"
            alt="Download"
            height="140"
            image={download.imageUrl}
            title="Download"
            className={classes.media}
            />
            <CardContent>
                <Typography 
                    gutterBottom 
                    variant="h5" 
                    component="h1" 
                    className={classes.title}
                >
                    {download.title}
                </Typography>
                <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className={classes.desc}
                >
                    {download.description}
                </Typography>
            </CardContent>
        <CardActions>
        <Button href="https://uoft-sts.github.io/Backtesting_Model/" variant="outlined" color="secondary">
          {download.status}
        </Button>
        
        </CardActions>
        </Card>
    </Collapse>
  );
}