import axios from 'axios';
import { SEARCH_ALL_ORDERS, FILTER_ORDERS, CARGANDO, ERROR} from '../types/ordersTypes';
import { HandleListOrder } from '../order/OrderService';

export  const getOrders = () => async (dispatch: any) => {
    dispatch({
        type: CARGANDO
    });
    try {
        const response = await axios.get('http://localhost:4000/Orders');
        const result:any = HandleListOrder(response.data)
        dispatch({
            type: SEARCH_ALL_ORDERS,
            payload: result
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Los pedidos no estan disponibles, verifique si el server esta disponible'
        })
    }
}

export  const filterOrders = (fullName: string) => async (dispatch: any) => {
    dispatch({
        type: CARGANDO
    });
    try {
        const response = await axios.get('http://localhost:4000/Orders'); 
        const result  = HandleListOrder(response.data).filter((item: any) => item.Apellido.toLowerCase().includes(fullName.toLowerCase()) ||  item.Nombre.toLowerCase().includes(fullName.toLowerCase()));
        dispatch({
            type: FILTER_ORDERS,
            payload: result
        })
        
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Los pedidos no estan disponibles, verifique si el server esta disponible'
        })
    }
}