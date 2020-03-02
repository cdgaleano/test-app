import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { menuData } from './datasourceMenu';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  linkMenu: { 
	  textDecoration: 'none', 
	  color: 'inherit' 
	}
}));

 const  Menu = () =>  {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      	<List component="nav">
			{menuData.map((item) => (
				<Link key={item.id} to={item.page} className={classes.linkMenu}>
					<ListItem button >
							<ListItemIcon>
								<i className={item.icon}></i>
							</ListItemIcon>
					<ListItemText primary={item.title}/>
					</ListItem>
				</Link>
			))}
      	</List>
    </div>
  );
}

export default Menu;