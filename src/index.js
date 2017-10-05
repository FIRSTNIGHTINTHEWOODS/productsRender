import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './index.css';
import App from './App';
import Categories from './Categories';
import Products from './products';

ReactDOM.render( 
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Products} />
		    <Route path=":category" component={Categories} />
		</Route>
    </Router>
, document.getElementById('root'));

