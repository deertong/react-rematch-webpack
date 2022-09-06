import thunk from 'redux-thunk';
import {init} from '@rematch/core'
import loadingPlugin from '@rematch/loading';
import models from '../models/index';
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import ajaxMiddleware from '../utils/ajaxMiddleware';
import createRootReducer from '../reducers'

const loading = loadingPlugin();

export const history = createBrowserHistory()

const middlewares = [thunk, ajaxMiddleware, routerMiddleware(history)];
const store = init({
  plugins: [loading],
  models,
  redux: {
      reducers: createRootReducer(history),
      middlewares,
      devtoolOptions: {
          disabled: process.env.NODE_ENV === 'production'
      }
  }
});

export default store
