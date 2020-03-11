import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { userActions } from '../actions';
import './login.scss';

class LoginPage extends React.Component<any,  any> {
    constructor(props:any) {
        super(props);
        this.props.logout();

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e:any) {
        e.preventDefault();
        this.setState({ submitted: true });
        const { username, password } = this.state;
        if (username && password) {
            this.props.login(username, password, this.props.history);
        }
    }

    render() {
        const { username, password} = this.state;
        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className="login-paper">
                    <Avatar className="login-avatar">
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                <form className="login-form"  onSubmit={this.handleSubmit} noValidate>
                    <TextField
                        id="username"
                        name="username"
                        label="Username"
                        style ={{width: '100%'}}
                        value={username}
                        onChange={this.handleChange.bind(this)}
                        margin="normal"
                        autoFocus
                        />
        
                    <TextField
                        id="password"
                        name="password"
                        label="Password"
                        style ={{width: '100%'}}
                        value={password}
                        type="password"
                        autoComplete="current-password"
                        onChange={this.handleChange.bind(this)}
                        margin="normal"
                        />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className="login-submit">
                        Sign In
                    </Button>
                
                    <Grid container>
                        <Grid item xs>
                        </Grid>
                        <Grid item>
                            <Link href="#" to="/register" >
                                <Button color="primary">
                                    Registrarse
                                </Button>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            </Container>
        )
        
    }
}

const mapState = (state:any) => {
    const { loggingIn } = state.authentication;
    return { loggingIn };
}

const actionCreators = {
    login: userActions.login,
    logout: userActions.logout
};

const connectedLoginPage = connect(mapState, actionCreators)(LoginPage);
export { connectedLoginPage as LoginPage };