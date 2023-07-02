import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createStore} from "redux";
import {Provider} from "react-redux";

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'increase':
            return state + 3
        case 'decrease':
            return state - 2 < 0 ? 0 : state - 2
        case 'reset':
            return 0
        default :
            return state
    }
}

const store = createStore(reducer)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App/>
        </Provider>
    </React.StrictMode>
);


