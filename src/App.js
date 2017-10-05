import React, { Component } from 'react';
import './App.css';
import Categories from './Categories';
import Products from './products';
import Pagination from './pagination';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            choosedCategory:'', 
            categoriesArr:[],
            choosedCategoryFull: '',
            dataTemp: [],
            pages: []
        };
        this.onCategoryClick = this.onCategoryClick.bind(this);
        this.state.choosedCategory = this.props.params.category;  // to fix

    }
    render() {
        return ( 
         <div>
           <Categories  linkTo={this.state.choosedCategory} onClickProp={this.onCategoryClick} items={this.state.categoriesArr}  />
           <Products items={this.state.dataTemp} />
           <Pagination items={this.state.pages}  />
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
                categoriesArr: this.getUniqueCategories(categoriesList)
            });
        }); 
    } 
    replacer(arr){
        return arr.replace(/\s/g,'').replace('&','').replace(',','');
    }
    getQuantityPages(){
        let counterOfPages = this.state.dataTemp.length/10;
        let tempArray = [];
        for( let i=1; i<counterOfPages+1; i++){
            tempArray.push(i);
        }
        this.setState({
            pages: tempArray
        });
    }

    getUniqueCategories (arr){
        return arr.filter((item,key,array) => {
            return array.indexOf(item) === key;
        });
    }

    setViewCategories(){
        this.setState({
            dataTemp: this.getTempData()
        });
    }
    getTempData() {
        return this.state.data.filter((item,key) => {
          if( this.replacer(item.bsr_category) == this.state.choosedCategory) {
            return item;
          }
        });
    }
    onCategoryClick(a){ 
        this.setState({
            choosedCategory: this.replacer(a)
        });
        this.setViewCategories();
        this.getQuantityPages();
    }    


}
export default App;