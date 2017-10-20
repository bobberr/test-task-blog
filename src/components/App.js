import React from 'react';
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import dataReducer from '../reducers/data-reducer';

import Profile from '../components/Profile';

const store = createStore(dataReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


const App = () => {
    return (
        <Provider store={store}>
            <Profile/>
        </Provider>
    )
}

module.exports = App;
