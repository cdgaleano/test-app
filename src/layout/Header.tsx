import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from '@material-ui/core/Avatar';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    margin: 0
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontSize: '20px'
  },
  title: {
    flexGrow: 1
  },
  alignRight: {
    textAlign: 'right'
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight:'10px',
  }
}));

export default function Header() {
  const classes = useStyles();
  
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
				edge="start"
				className={classes.menuButton}
				color="inherit"
				size='medium'
				aria-label="menu">
				<ChevronLeftIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            	Tenders
          </Typography>
          <Avatar alt="Remy Sharp" src="/logo192.png"  className={classes.small}/>
          <Typography variant="h6" className={classes.alignRight} >
            Daniel Galeano
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
