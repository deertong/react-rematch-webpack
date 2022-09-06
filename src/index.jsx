import React,{Fragment} from "react"
import ReactDom from "react-dom"
import Main from './router/mian.jsx'
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router'
import store, { history } from './store/createStore'
import './style.less'


const App = () => (
  <Fragment>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Main />
      </ConnectedRouter>
    </Provider>
  </Fragment>
)

ReactDom.render(<App />, document.getElementById('app'))