import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './actions';
import coordReducer from './coord';

const allReducers = combineReducers({
  data: dataReducer,
  coord: coordReducer,
});

const store = createStore(allReducers, applyMiddleware(thunk));

export default store;
