// @ts-nocheck
import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

const reducers = {};

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    ...reducers,
  });

export default createRootReducer;
