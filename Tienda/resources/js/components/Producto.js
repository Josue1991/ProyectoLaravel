import React, { Component } from 'react';
 
/* Stateless component or pure component
 * { product } syntax is the object destructing
 */
const Product = ({producto}) => {
    
  const divStyle = {
      /*code omitted for brevity */
  }
 
  //if the props product is null, return Product doesn't exist
  if(!producto) {
    return(<div style={divStyle}>  Product Doesnt exist </div>);
  }
     
  //Else, display the product data
  return(  
    <div style={divStyle}> 
      <h2> {producto.title} </h2>
      <p> {producto.description} </p>
      <h3> Status {producto.availability ? 'Available' : 'Out of stock'} </h3>
      <h3> Price : {producto.price} </h3>
      
    </div>
  )
}
 
export default Product ;