import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './actions'

const allReducers = combineReducers({
    paris:dataReducer
})

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;