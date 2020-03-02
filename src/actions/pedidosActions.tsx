import axios from 'axios';

export  const traerTodos = () => async (dispatch: any) => {
    const respuesta = await axios.get('https://jsonplaceholder.typicode.com/users');
    dispatch({
        type: 'traer_pedidos',
        payload: respuesta.data
    })
}