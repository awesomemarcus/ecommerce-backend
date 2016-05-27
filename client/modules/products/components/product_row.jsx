import React from 'react';


class ProductRow extends React.Component{

 handleProductRemove(e){
  e.preventDefault();

  this.props.onProductRemove(this.props.product._id);
 }

 render(){

  const {product} = this.props;

  return (
   <tr>
    <td><img className="img-responsive" src={product.productImage} alt=""/></td>
    <td>{product.title}</td>
    <td>{product.product_cat}</td>
    <td>{product.price}</td>
    <td>{product.quantity}</td>
    <td><a href={"/admin/products/update/" + product._id}>Edit</a> | <button className="btn btn-danger" onClick={this.handleProductRemove.bind(this)}>Delete</button></td>
   </tr>
  );
 }
}

export default ProductRow;
