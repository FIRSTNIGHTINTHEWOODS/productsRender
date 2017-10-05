import React, { Component } from 'react';
import './App.css';
import Categories from './Categories';
import Products from './products';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            choosedCategory:'', 
            categoriesArr:[],
            choosedCategoryFull: ''
        };
        this.state.choosedCategory = this.props.params.category;
        this.onCategoryClick = this.onCategoryClick.bind(this);
    }

    render() {
        return ( 
         <div>
           <Categories onClick={this.getForViewCategories} items={this.state.categoriesArr}  linkTo={this.state.choosedCategory}  onCategoryClick={this.onCategoryClick}/>
           <Products items={this.state.data}/>
        </div>
        )
    }
    componentDidMount(){
        fetch('http://demo.omnigon.com/pgatdemo1/mikeg/products.json')
        .then(Response => Response.json())
        .then(findresponse => {
            const categoriesList = findresponse.products.map((item,key)=> {
                  return item.bsr_category;
            });
            this.setState({
                data: findresponse.products,
                categoriesArr:   this.getUniqueCategories(categoriesList)
            })
        }) 
    }
    onCategoryClick(a){ 
        this.setState({
            choosedCategory: a.replace(/\s/g,'').replace('&','').replace(',','')
        });
    }      
    getUniqueCategories (arr){
        return arr.filter((item,key,array) => {
            return array.indexOf(item) === key;
        });
    }
    getForViewCategories(){
        console.log('dsds');
        this.setState({
            data: this.state.data.map((item,key) => {
                return this.state.data.filter((product,index) => {
                    if (item.bsr_category == this.state.choosedCategory)
                    return item;
                })
            })
        })
    }


}
export default App;