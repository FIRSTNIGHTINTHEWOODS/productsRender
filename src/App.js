import React, { Component } from 'react';
import './App.css';
import Categories from './Categories';
import Products from './products';
import Pagination from './pagination';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data:[],
            choosedCategory:'', 
            categoriesArr:[],
            choosedCategoryFull: '',
            dataTemp: [],
            dataStatic: [],
            pages: [],
            currentPage: 0
        };
        this.onCategoryClick = this.onCategoryClick.bind(this);
        this.onPageClick = this.onPageClick.bind(this);
    } 
    render() {
        return ( 
        <div>
            <Categories onClickProp={this.onCategoryClick} linkTo={this.state.choosedCategory}  items={this.state.categoriesArr}  />
            <Products items={this.state.dataTemp} />
            <Pagination  items={this.state.pages} onClickProp={this.onPageClick} />
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
    componentWillMount(){
        this.setState({
            choosedCategory: this.props.params.category
        });
    }
    replacer(arr){
        return arr.replace(/\s/g,'').replace('&','').replace(',','');
    }
    setViewCategories(){
        this.setState({
            dataTemp: this.getTempData(),
            dataStatic: this.getTempData()
        });
    }
    getQuantityPages(){
        let counterOfPages = this.state.dataTemp.length/10;
        let tempArray = [];
        for( let i=0; i<counterOfPages; i++){
            tempArray.push(i+1);
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
    getTempData() {
        return this.state.data.filter((item,key) => {
          if( this.replacer(item.bsr_category) == this.state.choosedCategory) {
            return item;
          }
        });
    }
    onPageClick (index){
        let thisPage = index;
        let productsPerPage = this.state.dataStatic;
        let lastProduct = productsPerPage.length;
        let quantityPages = this.state.pages.length;
        let lastItemOfPage =  +(thisPage + '0');
        let firstItemOfPage = +((thisPage - 1) + '0'); 
        let k = firstItemOfPage;
        if(lastProduct < lastItemOfPage){
            lastItemOfPage = lastProduct;
        }
        productsPerPage = productsPerPage.filter((item,key,array) => {
            if(firstItemOfPage < lastItemOfPage){
                firstItemOfPage++
                return array[firstItemOfPage];
            }
        })
        this.setState({
            dataTemp: productsPerPage
        });
    }
    onCategoryClick(a){ 
        this.setState({
            choosedCategory: this.replacer(a)   
        })
        this.setViewCategories();
        this.getQuantityPages();
    }    


}
export default App;