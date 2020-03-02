import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Orders from '../pedidos/Pedidos';
import Header from '../layout/Header';
import Menu from '../layout/Menu';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Home from '../layout/Home';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <>
    <Header />
    <div className={classes.root}>
      <BrowserRouter>
        <Grid container spacing={3}>
          <Grid item xs={3}>
              <Menu />
          </Grid>
            <Grid item xs={9}>
                <Switch>
                <Route exact path="/" component={ Home }/>
                  <Route exact path="/orders" component={ Orders }/>
                </Switch>
            </Grid>
          </Grid>
        </BrowserRouter>
      </div>
    </>
  )
}




export default App;