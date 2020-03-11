import { orderTypes } from '../types';

const INITIAL_STATE: object = {
	result: [],
	cargando: false
};

export default (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
	switch (action.type) {
		case orderTypes.SEARCH_ALL_ORDERS:
			return { 
				...state, 
				result: action.payload,
				cargando: false,
				error: null
			}
		case orderTypes.FILTER_ORDERS:
			return { 
				...state, 
				cargando: false,
				error: null,
				result: action.payload 
			};
		case orderTypes.CARGANDO: 
			return {
				...state, 
				cargando: true,
				error: null
			}
		case orderTypes.ERROR: 
			return {
				...state, 
				error: action.payload, 
				cargando: false
			};
			

		default: return state;
	};
};