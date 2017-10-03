import React, { Component } from 'react';

import './App.css';
import Categories from './Categories';
import Products from './products';



class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data:[],
        staticData: [],
        choosedCategory:'', 
      }
       this.clickedCategory = this.clickedCategory.bind(this);
    }
    clickedCategory(cat){ 

    this.setState({
        choosedCategory: cat,
    })
     console.log(this.state.choosedCategory);
    }  
    componentDidMount(){
      fetch('http://demo.omnigon.com/pgatdemo1/mikeg/products.json')
      .then((Response)=>Response.json())
      .then((findresponse) => {
        this.setState({
          data: findresponse.products,
          staticData: findresponse.products,
        }) 
      })
    }
    render() {
        return ( 
         <div>
           <Categories clickedCategory={this.clickedCategory} items={this.state.data} />
           <Products items={this.state.data}/>
        </div>
        )
    }
}


export default App;
