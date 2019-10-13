import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import PauseIcon from '@material-ui/icons/Pause';
import { LinearProgress } from '@material-ui/core'

import * as R from 'ramda'

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
}));

const toTimeString = (milliSeconds) => {
  let seconds = parseInt((milliSeconds / 1000) % 60)
  let minutes = parseInt((milliSeconds / (1000 * 60)) % 60)
  let hours = parseInt((milliSeconds / (1000 * 60 * 60)) % 24)

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return `${hours}:${minutes}:${seconds}`
}

const MediaControlCard = ({track, next, previous, play, pause}) => {
    const classes = useStyles();
    const theme = useTheme();
        
   return (
        <Card className={classes.card}>
          <div className={classes.details}>
            <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
          {track.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {R.pluck('name', track.artists)}
          </Typography>
          <Typography>
            {toTimeString(track.progress)}/{toTimeString(track.duration)}
          </Typography>
        </CardContent>
        <LinearProgress variant="determinate" value={100 * track.progress / track.duration} />
        <div className={classes.controls}>
          <IconButton aria-label="previous" onClick = {previous}>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause" onClick = {play}>
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="xxxplay/pause" onClick = {pause}>
            <PauseIcon className={classes.pauseIcon} />
          </IconButton>
          <IconButton aria-label="next" onClick = {next}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={track.image || "/spotify_green.jpg"}
        title={track.title}
      />
    </Card>
   );
}

export { MediaControlCard}