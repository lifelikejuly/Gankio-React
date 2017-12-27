import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gankReducer from './redux/reducer';
// import { syncHistoryWithStore, routerReducer , routerMiddleware} from 'react-router-redux'
// import createHistory from 'history/createBrowserHistory'

// const history = createHistory()
// const middlewareRouter = routerMiddleware(history)
const win = window;
const reducer = combineReducers({
    gank: gankReducer,
    // router: routerReducer
})
// const middlewares = [thunk];
// if (process.env.NODE_ENV !== 'production') {
//     middlewares.push(require('redux-immutable-state-invariant')());
// }
const middleware = process.env.NODE_ENV !== 'production' ?
  [require('redux-immutable-state-invariant').default(), thunk] :
  [thunk];
const storeEnhancers = compose(
    applyMiddleware(...middleware),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);
export default createStore(reducer, {}, storeEnhancers);
