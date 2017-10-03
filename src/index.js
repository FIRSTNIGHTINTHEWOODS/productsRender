import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory,browserHistory } from 'react-router';
import './index.css';
import App from './App';
import Categories from './Categories';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( 
	<Router history={browserHistory}>
   		 <Route path="/app" component={App}/>
   		 <Route path="/AppsGames" component={App}/>
   		 <Route path="/AmazonLaunchpad" component={App}/>
  	</Router>

  , document.getElementById('root'));
registerServiceWorker();
