import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { userActions } from '../actions';


class RegisterPage extends React.Component<any, any> {
    constructor(props:any) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event:any) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event: any) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
      
        if (user.firstName && user.lastName && user.username && user.password) {
            this.props.register(user, this.props.history);
        }
    }

    render() {
        const { user,  } = this.state;
        const {firstName, lastName, username, password} = user
        const disabledButton =  !(firstName && lastName && username &&  password);


        return (
            <Container component="main" maxWidth="xs">
                <div className="login-paper">
                <Typography component="h1" variant="h5">
                    Registrate
                </Typography>
                <form className="login-form"  onSubmit={this.handleSubmit} noValidate>

                <TextField
                    id="firstName"
                    name="firstName"
                    autoComplete='off'
                    required={true}
                    label="Nombre"
                    style ={{width: '100%'}}
                    value={user.firstName}
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                    autoFocus
                    />

                <TextField
                    id="lastName"
                    name="lastName"
                    required={true}
                    autoComplete='off'
                    label="Apellido"
                    style ={{width: '100%'}}
                    value={user.lastName}
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                    />

                 <TextField
                    id="username"
                    name="username"
                    autoComplete='off'
                    required={true}
                    label="Usuario"
                    style ={{width: '100%'}}
                    value={user.username}
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                    
                    />
                <TextField
                    id="password"
                    name="password"
                    label="Password"
                    required={true}
                    style ={{width: '100%'}}
                    value={user.password}
                    type="password"
                    autoComplete="current-password"
                    onChange={this.handleChange.bind(this)}
                    margin="normal"
                    />
            
                    <Grid container spacing={3}>
                    <Grid item xs={8}>
                            <Button
                                type="submit"
                                fullWidth
                                disabled={disabledButton}
                                variant="contained"
                                color="primary"
                                className="login-submit">
                                Registrar
                            </Button>
                        </Grid>
                        <Grid item xs={4}>
                            <Link href="#" to="/login" style ={{width: '100%'}} className="text-link" >
                                <Button >Cancelar</Button>
                            </Link>
                        </Grid>
                   
                </Grid>
                </form>
            </div>
            
            </Container>
        )
    }
}

function mapState(state:any) {
    const { registering } = state.registration;
    return { registering };
}

const actionCreators = {
    register: userActions.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(RegisterPage);
export { connectedRegisterPage as RegisterPage };