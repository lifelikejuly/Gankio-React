import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import store  from './store';
import {
    BrowserRouter as Router
} from 'react-router-dom';
// // import { browserHistory } from 'react-router'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// // import { ConnectedRouter } from 'react-router-redux'
// import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
// import thunk from 'redux-thunk';
// import gankReducer from './redux/reducer';
// import { ConnectedRouter,syncHistoryWithStore, routerReducer , routerMiddleware} from 'react-router-redux'
// import createHistory from 'history/createBrowserHistory'

// const history = createHistory()
// const middlewareRouter = routerMiddleware(history)
// const win = window;

// const reducer = combineReducers({
//     gank: gankReducer,
//     router: routerReducer
// })
// const middleware = process.env.NODE_ENV !== 'production' ?
//   [require('redux-immutable-state-invariant').default(), thunk] :
//   [thunk];
//   middleware.push(middlewareRouter);

// const storeEnhancers = compose(
//     applyMiddleware(...middleware),
//     (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
// );
// const store = createStore(reducer, {}, storeEnhancers);
// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(<Provider store={store}>
    <LocaleProvider locale={zhCN}>
    <Router >
        <App />
    </Router>
    </LocaleProvider>
</Provider>, document.getElementById('root'));
registerServiceWorker();
