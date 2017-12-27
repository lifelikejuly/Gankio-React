import React from 'react';
import ReactDOM from 'react-dom';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Provider } from 'react-redux';
import { LocaleProvider } from 'antd';
import store from './store';
import {
    BrowserRouter as Router
} from 'react-router-dom';
// import { browserHistory } from 'react-router'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { syncHistoryWithStore } from 'react-router-redux'


// const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(<Provider store={store}>
    <LocaleProvider locale={zhCN}>
    <Router >
        <App />
    </Router>
    </LocaleProvider>
</Provider>, document.getElementById('root'));
registerServiceWorker();
