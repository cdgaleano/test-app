import axios from 'axios';
import { data } from '../order/datasource';
import { SEARCH_ALL_ORDERS, FILTER_ORDERS} from '../types/ordersTypes';


export  const getOrders = () => async (dispatch: any) => {
    //const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');  REQUEST TO SERVICE 
    dispatch({
        type: SEARCH_ALL_ORDERS,
        payload: data
    })
}

export  const filterOrders = (fullName: string) => async (dispatch: any) => {
    //const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users'); REQUEST TO SERVICE
    const rest  = data.filter((item: any) => item.Apellido.toLowerCase().includes(fullName.toLowerCase()) ||  item.Nombre.toLowerCase().includes(fullName.toLowerCase()));
    dispatch({
        type: FILTER_ORDERS,
        payload: rest
    })
}