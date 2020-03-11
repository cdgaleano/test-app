import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import { connect } from 'react-redux';
import Orders from '../order/OrderManage';
import Header from '../layout/Header';
import Menu from '../layout/Menu';
import Grid from '@material-ui/core/Grid';
import Home from '../layout/Home';
import { LoginPage } from '../login/Login';
import { RegisterPage } from '../register-page';
import { PrivateRoute } from './private';
import UserList from '../user/UserPage';
import { userActions } from '../actions';
class  App extends React.Component<any, any> {
	
	async componentDidMount(){
		await this.props.getUser();
	}

	header(){
		if(this.props.loggedIn){
			return (
				<Header />
			)
		}
	}

	menu(){
		if(this.props.loggedIn){
			return (
				<Grid item xs={2}>
					<Menu />
				</Grid>
			)
		}
	}
 render(){
  return (
    <>
		{this.header()}
		<div >
		<BrowserRouter>
			<Grid container spacing={3}>
				{this.menu()}
				<Grid item xs={(this.props.loggedIn) ? 10 : 12}>
					<Switch>
						<Route path="/login" component={LoginPage} />
						<Route path="/register" component={RegisterPage} />
						<PrivateRoute exact path="/home" component={ Home }/>
						<PrivateRoute exact path="/orders" component={ Orders }/>
						<PrivateRoute exact path="/users" component={ UserList }/>
					</Switch>
				</Grid>
			</Grid>
			</BrowserRouter>
		</div>
		</>
	  )
  	}
}
const mapStateToProps = (reducers: any) => {
    return reducers.authentication;
};

const actionCreators = {
    getUser: userActions.getUser,
   
}

export default connect(mapStateToProps, actionCreators)(App);