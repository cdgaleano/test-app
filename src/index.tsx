import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';
import App from './core/App';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import "font-awesome/css/font-awesome.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

const store  = createStore(
    reducers,
    {},
    applyMiddleware(reduxThunk)
)
ReactDOM.render(
    <Provider store={ store }>
        <App />
    </Provider>,
    document.getElementById('root')
);

