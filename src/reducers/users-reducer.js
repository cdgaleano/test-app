import { userTypes } from '../types';

export function users(state = {}, action) {
	switch (action.type) {
		case userTypes.GETALL_REQUEST:
			return {
				loading: true
			};
		case userTypes.GETALL_SUCCESS:
			return {
				users: action.payload
			};
		case userTypes.GETALL_FAILURE:
			return { 
				error: action.payload
			};
		case userTypes.DELETE_REQUEST:
			return {
				...state,
				cargando: true,
				error: null
		};
		case userTypes.DELETE_SUCCESS:
			return {
				users: action.payload,
				cargando: false,
				error: null
			};
		case userTypes.DELETE_FAILURE:
			return {
				...state,
				cargando: false,
				error: null
			};
		default:
		return state
	}
}