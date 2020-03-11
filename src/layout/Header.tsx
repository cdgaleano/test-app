import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Avatar from '@material-ui/core/Avatar';
import {makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { connect } from 'react-redux';

import { userActions } from '../actions';
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

const  Header = (props:any) =>  {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
	setAnchorEl(null);
  };

  const logout = () =>{ 
	setAnchorEl(null);
	props.logout();
  }
  
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
         
          <Typography variant="h6" className={classes.alignRight} >
            Daniel Galeano
          </Typography>
          <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <Avatar alt="Remy Sharp" src="/logo192.png"  className={classes.small}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

const actionCreators = {
    logout: userActions.logout
};

const mapStateToProps = (state:any) => {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

export default connect(mapStateToProps,actionCreators)(Header);