import React, { Component } from 'react';

import { Link } from 'react-router';
 class Categories extends Component{
    render() {
      return (
	      	this.props.items.map((item,key) =>
	      	<Link key={key} to={item.replace(/\s/g,'').replace('&','').replace(',','')}>
	      		<p onClick={() => this.props.clickedCategory(item) }> {item} </p>
	      	</Link> 			
	      	)
      )
    }
}


export default Categories;