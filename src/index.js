import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory, IndexRoute } from 'react-router';
import './index.css';
import App from './App';
import Categories from './Categories';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <Route path="/:category" component={Categories} />
        </Route>
    </Router>
, document.getElementById('root'));
registerServiceWorker();
