import React, { Component } from 'react';

import './App.css';
import Categories from './Categories';
import Products from './products';
import { Router, Route, hashHistory,browserHistory } from 'react-router';


class App extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data:[],
        choosedCategory:'', 
        categoriesArr:[],

      }
       this.state.choosedCategory = this.props.params.category;
       this.clickedCategory = this.clickedCategory.bind(this);


    }
    deleteDuplicatesCategories (arr){
      return arr.filter((item,key,array) => {
         return array.indexOf(item) === key;
      })
    }
    clickedCategory(a){ 
    this.setState({
        choosedCategory: a.replace(/\s/g,'').replace('&','').replace(',','')
    })
    }  
    componentDidMount(){
      fetch('http://demo.omnigon.com/pgatdemo1/mikeg/products.json')
      .then((Response)=>Response.json())
      .then((findresponse) => {
       var categoriesList = findresponse.products.map((item,key)=> {
            return item.bsr_category;
        })
        this.setState({
          data: findresponse.products,
          categoriesArr:   this.deleteDuplicatesCategories(categoriesList)
            })
        }) 
    }
    render() {
      console.log(this.state.choosedCategory);
      console.log(this.props.params.category);

        return ( 
         <div>
           <Categories items={this.state.categoriesArr}  linkTo={this.state.choosedCategory}  clickedCategory={this.clickedCategory}/>
           <Products items={this.state.data}/>
        </div>
        )
    }
}


export default App;