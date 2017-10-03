    import React, { Component } from 'react';



class Products extends Component {


    // filterList(e){
    //   this.state.data = this.state.staticData;
    //   var filteredList = this.state.data.filter(function(item,i,arr){
    //       return item.name.toLowerCase().search(e.target.value.toLowerCase())!== -1;
    //   });
    //   this.setState({data: filteredList});
    // }      <input type="text" onChange={this.filterList} />

    render() {
        return (   
          <div> 
            {
            this.props.items.map((item,key)=>
             <div key={key} className="products">
              <img src={item.img}></img>
              <ul>
                <li name="price"><i>Price:</i> {item.price} $</li>
                <li name="name"><i>Name:</i> {item.name} </li>
                <li name="link"><i>Link:</i> {item.link}</li>
                <li name="bsr_category"><i>bsr_category:</i>{item.bsr_category} </li>   
                <li name="asin"><i>asin:</i> {item.asin}</li>
              </ul>
            </div>
           )
           }
        </div>
        )
    }
  }

  export default Products;