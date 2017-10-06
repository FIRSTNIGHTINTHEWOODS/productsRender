import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';
import './index.css';
import App from './App';
import Categories from './Categories';
import Products from './products';

ReactDOM.render( 
    <Router history={browserHistory}>
        <Route  path="/" component={App}>
        	<Route path=":category" component={Products} />
		</Route>
    </Router>
, document.getElementById('root'));

