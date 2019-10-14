import React, { Component } from 'react';
import ReactDOM from 'react-dom';
 
/* Main Component */
class Main extends Component {
 
  constructor() {
    
    super();
    //Initialize the state in the constructor
    this.state = {
        products: [],
    }
    this.handleAddProduct = this.handleAddProduct.bind (this);
  }
  /*componentDidMount() is a lifecycle method
   * that gets called after the component is rendered
   */
  componentDidMount() {
    /* fetch API in action */
    fetch('/api/productos')
        .then(response => {
            return response.json();
        })
        .then(products => {
            //Fetched product is stored in the state
            this.setState({ products });
        });
  }
 
 renderProducts() {
    return this.state.productos.map(product => {
        return (
            /* When using list you need to specify a key
             * attribute that is unique for each list item
            */
            <li key={product.id} >
                { product.title } 
            </li>      
        );
    })
  }
  handleAddProduct(product) {
     
    product.price = Number(product.price);
    /*Fetch API for post request */
    fetch( 'api/productos/', {
        method:'post',
        /* headers are important*/
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
         
        body: JSON.stringify(product)
    })
    .then(response => {
        return response.json();
    })
    .then( data => {
        //update the state of products and currentProduct
        this.setState((prevState)=> ({
            products: prevState.products.concat(data),
            currentProduct : data
        }))
    })
  
  }
   
  render() {
    return (
      /* The extra divs are for the css styles */
          <div>
              <div>
               <h3> All products </h3>
                <ul>
                  { this.renderProducts() }
                </ul> 
              </div> 
             
              <Producto product={this.state.currentProduct} />
              <AddProduct onAdd={this.handleAddProduct} />
          </div>
      );
    }
}
