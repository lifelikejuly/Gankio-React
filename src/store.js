import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gankReducer from './redux/reducer';
const win = window;
const reducer = combineReducers({
    gank: gankReducer
})
const middlewares = [thunk];
const storeEnhancers = compose(
    applyMiddleware(...middlewares),
    (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);

export default createStore(reducer, {}, applyMiddleware(thunk));