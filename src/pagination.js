import React, { Component } from 'react';

class Pagination extends Component {

    render() {
        return  (
            <ul className="Pagination">
            {
                this.props.items.map((item,key) =>
                <li key={key} onClick={() => this.props.onClickProp(key+1)}> {item}  </li>
                )
            }
            </ul>
                          
        )                   
    }

}
export default Pagination;