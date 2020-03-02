import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";


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
            aria-label="menu"
          >
            <ChevronLeftIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Tenders
          </Typography>
            <div>
               
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
