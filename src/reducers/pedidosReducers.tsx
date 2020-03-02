const INITIAL_STATE: object = {
	pedidos: []
};

export default (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
	switch (action.type) {
		case 'traer_pedidos':
			return { ...state, pedidos: action.payload };

		default: return state;
	};
};