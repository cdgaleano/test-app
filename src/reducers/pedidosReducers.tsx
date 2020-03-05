import { SEARCH_ALL_ORDERS, FILTER_ORDERS} from '../types/ordersTypes';

const INITIAL_STATE: object = {
	pedidos: []
};

export default (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
	switch (action.type) {
		case SEARCH_ALL_ORDERS:
			return { 
				...state, 
				pedidos: action.payload 
			}
		case FILTER_ORDERS:
			return { 
				...state, 
				pedidos: action.payload 
			};

		default: return state;
	};
};