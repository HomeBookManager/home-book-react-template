import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import {
  Action,
  applyMiddleware,
  CombinedState,
  createStore,
  Store,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createBrowserHistory } from 'history';
import { createEpicMiddleware } from 'redux-observable';
import { routerMiddleware } from 'connected-react-router';
import { persistReducer, persistStore } from 'redux-persist';

// others
import reducersToSave from './reducersToSave';
import { STATE_KEY } from './constants';

// store
import reducers from './reducers';
import rootEpics from './module';

export const history = createBrowserHistory();
const epicMiddleware = createEpicMiddleware();

const getPersistConfig = () => {
  return {
    key: STATE_KEY,
    whitelist: reducersToSave,
    storage,
    stateReconciler: autoMergeLevel2,
  };
};

const store = createStore(
  //@ts-ignore
  persistReducer(getPersistConfig(), reducers(history)),
  composeWithDevTools(
    applyMiddleware(...[epicMiddleware, routerMiddleware(history)])
  )
);
export const persistor = persistStore(store);

const configureStore = (): Store<CombinedState<any>, Action> => {
  epicMiddleware.run(rootEpics);

  return store;
};

export default configureStore;
