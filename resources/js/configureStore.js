import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import {
  applyMiddleware, combineReducers, compose, createStore,
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import appReducer from './reducers/appReducer';
import userReducer from './reducers/userReducer';

const history = createBrowserHistory({ basename: '/' });

const reducers = {
  app: appReducer,
  user: userReducer,
};

const middlewares = []; // [loggerMiddleware, thunkMiddleware]
const enhancers = [];

const configureStore = (preloadedState) => {
  const store = createStore(
    combineReducers({ router: connectRouter(history), ...reducers }),
    preloadedState,
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(compose(applyMiddleware(...middlewares), ...enhancers))
      : compose(applyMiddleware(...middlewares), ...enhancers),
  );
  return store;
};

export {
  configureStore as default,
  history,
};
