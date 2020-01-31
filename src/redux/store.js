import React from 'react';

//redux imports
import { createStore, applyMiddleware } from 'redux';

//middleware imports
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

//reducer imports
import { mainReducer } from './reducers/mainReducer';


const store = createStore(
    mainReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;