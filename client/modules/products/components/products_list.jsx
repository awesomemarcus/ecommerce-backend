import React from 'react';
import ProductRow from './product_row.jsx';

class ProductsList extends React.Component{

 handleProductRemove(prodId){
  const {productDelete} = this.props;
  productDelete(prodId);
 }

 render(){

  const {products} = this.props;

  return (
   <div className="products-list">
    <table className="table table-hover">
     <thead>
      <tr>
       <th></th>
       <th>Product Name</th>
       <th>Category</th>
       <th>Price</th>
       <th>Quantity</th>
       <th>Action</th>
      </tr>
     </thead>
      <tbody>
       {products.map( product => (
        <ProductRow onProductRemove={this.handleProductRemove.bind(this)} key={product._id} product={product}/>
       ))}
      </tbody>
    </table>
   </div>
  );
 }
}

export default ProductsList;
