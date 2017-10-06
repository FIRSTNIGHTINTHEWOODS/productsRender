import React, { Component } from 'react';
import { Link } from 'react-router';
class Categories extends Component{
    render() {
        return (
            this.props.items.map((item,key) =>
            
                <p key={key} onClick={() => this.props.onClickProp(item) }><Link to={this.props.linkTo}> {item}  </Link></p>
             			
            )
        )	
    }
}

export default Categories;