import React, { Component } from 'react';
import { Router, Route, hashHistory,browserHistory } from 'react-router';
import { Link } from 'react-router';
 class Categories extends Component{

    render() {
      return (
      	/* item.replace(/\s/g,'').replace('&','').replace(',','') */
	      	this.props.items.map((item,key) =>
	      	<Link key={key} to={this.props.linkTo}>
	  
	      		<p onClick={() => this.props.clickedCategory(item) }> {item} </p>
	      	</Link> 			
	      	)
      )	
    }
}


export default Categories;