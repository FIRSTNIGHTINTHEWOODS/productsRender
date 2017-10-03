import React, { Component } from 'react';

import './App.css';
// import Item from './test';
// import ItemsList from './test';


class Products extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data:[],
        staticData: [],
      }
      this.filterList = this.filterList.bind(this);
    }
  
    filterList(e){
      this.state.data = this.state.staticData;
      var filteredList = this.state.data.filter(function(item,i,arr){
          return item.name.toLowerCase().search(e.target.value.toLowerCase())!== -1;
      });
      this.setState({data: filteredList});
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
        <input type="text" onChange={this.filterList} />
            {
            this.state.data.map((items,key)=>
            <ul>
              <img src={items.img}></img>
              <li name="price"><i>Price:</i> {items.price} $</li>
              <li name="name"><i>Name:</i> {items.name} </li>
              <li name="link"><i>Link:</i> {items.link}</li>
              <li name="bsr_category"><i>bsr_category:</i>{items.bsr_category} </li>   
              <li name="asin"><i>asin:</i> {items.asin}</li>
            </ul>
           )
           } 
        </div>
        )
    }
}





// const propsValues = {
//     title: "Список смартфонов",
//     items: [
//             "HTC U Ultra", 
//             "iPhone 7", 
//             "Google Pixel", 
//             "Iphone P9", 
//             "Meizu Pro 6", 
//             "Asus Zenfone 3"
//     ]
// };
     
// class Item extends Component {
//     render() {
//         return <li>{this.props.name}</li>;
//     }
// }

// class SearchPlugin extends Component{
             
//     constructor(props){
//         super(props);
//         this.onTextChanged = this.onTextChanged.bind(this);
//     }
             
//     onTextChanged(e){
//         var text = e.target.value.trim();   // удаляем пробелы
//         this.props.filter(text); // передаем введенный текст в родительский компонент
//     }
             
//     render() {
//         return <input placeholder="Поиск" onChange={this.onTextChanged} />;
//     }
// }
         
// class ItemsList extends Component {
//     constructor(props){
//     super(props);
//     this.state = { items: this.props.data.items};
             
//     this.filterList = this.filterList.bind(this);
//     }

//     filterList(text){
//         var filteredList = this.props.data.items.filter(function(item){
//             return item.toLowerCase().search(text.target.value.toLowerCase())!== -1;
//         });
//         // обновление состояния
//         this.setState({items: filteredList});
//     }

//     render() {
//         return(
//             <div>         
//                 <h2>{this.props.data.title}</h2>
//                 <input placeholder="Search" onChange={this.filterList} />
//                 <ul>
//                 {
//                     this.state.items.map(function(item){
//                         return <Item key={item} name={item} />
//                     })
//                 }
//                 </ul>
//             </div>);
//     }
// }

class App extends Component {

  render() 
   {
    return (
          <Products />
    );
  }
}

export default App;
