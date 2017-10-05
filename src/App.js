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
            choosedCategoryFull: '',
            dataTemp: []
        };
        this.onCategoryClick = this.onCategoryClick.bind(this);
        this.state.choosedCategory = this.props.params.category;
    }

    render() {
        return ( 
         <div>
           <Categories  linkTo={this.state.choosedCategory} onClickProp={this.onCategoryClick} items={this.state.categoriesArr}  />
           <Products items={this.state.dataTemp}/>
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
    onCategoryClick(a){ 
        this.setState({
            choosedCategory: a.replace(/\s/g,'').replace('&','').replace(',','')
        });
          this.getForViewCategories();
    }     
    getUniqueCategories (arr){
        return arr.filter((item,key,array) => {
            return array.indexOf(item) === key;
        });
    }
    getForViewCategories(){
        this.setState({
            dataTemp: this.state.data.filter((item,key) => {
            if( item.bsr_category.replace(/\s/g,'').replace('&','').replace(',','') == this.state.choosedCategory)
                return item;
            })
        });
    }


}
export default App;