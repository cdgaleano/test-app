import { SEARCH_ALL_ORDERS, FILTER_ORDERS, CARGANDO, ERROR} from '../types/ordersTypes';

const INITIAL_STATE: object = {
	result: [],
	cargando: false
};

export default (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
	switch (action.type) {
		case SEARCH_ALL_ORDERS:
			return { 
				...state, 
				result: action.payload,
				cargando: false,
				error: null
			}
		case FILTER_ORDERS:
			return { 
				...state, 
				cargando: false,
				error: null,
				result: action.payload 
			};
		case CARGANDO: 
			return {
				...state, 
				cargando: true,
				error: null
			}
		case ERROR: 
			return {
				...state, 
				error: action.payload, 
				cargando: false
			};
			

		default: return state;
	};
};