import { combineReducers } from 'redux';
import pedidosReducer from './order-reducers';
import { authentication } from './authentication.reducer';
import { registration } from './registration-reducer';
import { users } from './users-reducer';
export default combineReducers({
    pedidosReducer,
    authentication,
    registration,
    users

})