import axios from 'axios';
import { orderTypes } from '../types';
import { HandleListOrder } from '../order/OrderService';

export  const getOrders = () => async (dispatch: any) => {
    dispatch({
        type: orderTypes.CARGANDO
    });
    try {
        const response = await axios.get('http://localhost:4000/Orders');
        const result:any = HandleListOrder(response.data)
        dispatch({
            type: orderTypes.SEARCH_ALL_ORDERS,
            payload: result
        })
    } catch (error) {
        dispatch({
            type: orderTypes.ERROR,
            payload: 'Los pedidos no estan disponibles, verifique si el server esta disponible'
        })
    }
}

export  const filterOrders = (fullName: string) => async (dispatch: any) => {
    dispatch({
        type: orderTypes.CARGANDO
    });
    try {
        
        const response = await axios.get('http://localhost:4000/Orders'); 
        const result  = HandleListOrder(response.data).filter((item: any) => item.Apellido.toLowerCase().includes(fullName.toLowerCase()) ||  item.Nombre.toLowerCase().includes(fullName.toLowerCase()));
        dispatch({
            type: orderTypes.FILTER_ORDERS,
            payload: result
        })
        
    } catch (error) {
        dispatch({
            type: orderTypes.ERROR,
            payload: 'Los pedidos no estan disponibles, verifique si el server esta disponible'
        })
    }
}