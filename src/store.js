import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'


import rootReducer1 from '../src/reducers/rootreducer1'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore(rootReducer1);
