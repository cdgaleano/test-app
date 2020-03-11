import { userTypes } from '../types';

let user = JSON.parse(localStorage.getItem('user') || '[]');
const initialState = user ? { loggedIn: false, user } : {};

export function authentication(state = initialState, action:any) {
  switch (action.type) {

    case userTypes.GET_USER_LOGUER_REQUEST:
		return {
				cargando: true,
				loggedIn: false
		};

	case userTypes.GET_USER_LOGUER_SUCCESS:
		return {
				loading: true,
				cargando:false,
				user: action.payload,
				loggedIn: true
		};

	case userTypes.GET_USER_LOGUER_ERROR:
		return {
				...state,
				loggedIn: false,
				loading: false,
				cargando:false,
				error: action.payload
		};

    case userTypes.LOGIN_REQUEST:
		return {
				loggedIn: true,
				user: action.payload
		};

    case userTypes.LOGIN_SUCCESS:
		return {
				loggedIn: true,
				user: action.payload
		};

    case userTypes.LOGIN_FAILURE:
			  return {};
			  
    case userTypes.LOGOUT:
      		return  {
				loggedIn: false,
				user: null
		};
    default:
      return state
  }
}