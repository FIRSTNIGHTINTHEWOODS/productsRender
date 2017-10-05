import React, { Component } from 'react';

class Pagination extends Component {

    render() {
        return  (
            <p onClick={this.props.onClick}> { this.props.items.map(items => { return items }) } </p>
        )                   
    }

}
export default Pagination;