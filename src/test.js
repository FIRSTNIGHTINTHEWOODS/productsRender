import React, { Component } from 'react';

const propsValues = {
    title: "Список смартфонов",
    items: [
            "HTC U Ultra", 
            "iPhone 7", 
            "Google Pixel", 
            "Hawei P9", 
            "Meizu Pro 6", 
            "Asus Zenfone 3"
    ]
};

export  class Item extends Component{
    render() {
      return <li>{this.props.name}</li>;
    }
}
export class ItemsList extends Component{

render(){
    return ( 
    	<div>
    		<h3> {this.props.data.title} </h3>
    		<ul>
    		{
	            this.props.data.items.map(function(item){
	            		return <Item key={item} name={item} />
	           		})
	        }
            </ul>
        </div>
        );
    }
}
