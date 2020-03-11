import { userTypes } from '../types';
import { userService } from '../services';



const login = (username:string, password:string, history:any ) => async (dispatch: any) => {
    dispatch({ 
        type: userTypes.LOGIN_REQUEST, 
        payload: username  
    });
    try {
        const rest = await userService.login(username, password)
        dispatch({ 
            type: userTypes.LOGIN_SUCCESS, 
            payload : rest
        });
        history.push('/orders');
    } catch (error){
        dispatch({ 
            type: userTypes.LOGIN_FAILURE, 
            payload : error
        });
    }
}

const _getUser = () => async (dispatch: any) => {
    dispatch({ 
        type: userTypes.GET_USER_LOGUER_REQUEST, 
    });
    try {
        const rest:any = await userService.getUser()
        const { id } = rest;
        dispatch({ 
            type: (id)? userTypes.GET_USER_LOGUER_SUCCESS : userTypes.GET_USER_LOGUER_ERROR, 
            payload :  (id)?  rest : 'No econtro usuario Logueado'
        });
        
        
    } catch (error){
        dispatch({ 
            type: userTypes.GET_USER_LOGUER_ERROR, 
            payload : 'No econtro usuario Logueado'
        });
    }
}

const logout = () => async(dispatch: any) => {
    await userService.logout();
    dispatch({ 
        type: userTypes.LOGOUT
    });
}

const register = (user:string, history:any) => async (dispatch: any) => {
    dispatch({ 
        type: userTypes.REGISTER_REQUEST, 
        payload: user  
    });
    try{
        const res = await userService.register(user);
        dispatch({ 
            type: userTypes.REGISTER_SUCCESS, 
            payload: res  
        });
        history.push('/login');
    } catch(error) {
        dispatch({ 
            type: userTypes.REGISTER_FAILURE, 
            payload: error  
        });
    } 
}



const getAll = () => async (dispatch: any) => {

    dispatch({ 
        type: userTypes.GETALL_REQUEST
    });
    try{
        const res = await userService.getAll();
        dispatch({ 
            type: userTypes.GETALL_SUCCESS, 
            payload: res  
        });
    } catch(error) {
        dispatch({ 
            type: userTypes.REGISTER_FAILURE, 
            payload: error  
        });
    }
}


const _delete = (id: number) => async (dispatch: any) => {
    dispatch({ 
        type: userTypes.DELETE_REQUEST
    });
    try{
        const res = await userService.delete(id);
        dispatch({ 
            type: userTypes.DELETE_SUCCESS, 
            payload: res  
        });
    } catch(error) {
        dispatch({ 
            type: userTypes.DELETE_FAILURE,
            payload: error  
        });
    }
}

export const userActions = {
    login: login,
    logout: logout,
    register: register,
    getAll: getAll,
    delete: _delete,
    getUser: _getUser
};