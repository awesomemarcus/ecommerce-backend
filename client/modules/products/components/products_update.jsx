import React from 'react';
import CategoriesSelect from '../../categories/containers/categories_select.js';
import UploadsImage from '../../uploads/containers/uploads_image.js';

class ProductsUpdate extends React.Component{

componentWillMount(){

 var {product} = this.props;

 this.setState({
  selectedCategory: product.product_cat,
 })

}

 handleUserSelect(selectedCategory) {
  this.setState({
   selectedCategory: selectedCategory,
  })
 }

 handleSubmit(e){
  e.preventDefault();
  const {updateProduct, prodId} = this.props;
  const {title, description, price, quantity} = this.refs;
  const productImage = this.state.productImage;

  const prodItem = {
   title: title.value,
   description: description.value,
   category: this.state.selectedCategory,
   price: price.value,
   quantity: quantity.value,
   productImage: productImage,
  }

  updateProduct(prodId, prodItem);

  title.value = '';
  description.value = '';
  this.setState({selectedCategory: ''});
  price.value = '';
  quantity.value = '';

 }

 handleImageUpload(uploadedImage){
  this.setState({
   productImage: uploadedImage,
  });
 }


 render(){

  // const {categories} = this.props;
  const {error} = this.props;
  var {product} = this.props;
  return (
   <div className="products-add">
    <div className="panel panel-default">
     <div className="panel-heading">
      <h4>Edit Product</h4>
     </div>
     <div className="panel-body">
      {error ? <p className="bg-danger error-msg">{error}</p> : ''}
      <form action="" enctype="multipart/form-data">
       <UploadsImage onImageUpload={this.handleImageUpload.bind(this)}/>
       <div className="form-group">
        <label htmlFor="title">Product Title:</label>
        <input type="text" ref="title" className="form-control" defaultValue={product.title}/>
       </div>
       <div className="form-group">
        <label htmlFor="description">Product Description:</label>
        <textarea ref="description" className="form-control" placeholder="text here..." defaultValue={product.description} ></textarea>
       </div>
       <CategoriesSelect key={product._id} selectedCategory={this.state.selectedCategory} onUserSelect={this.handleUserSelect.bind(this)} />
       <div className="form-group">
        <label htmlFor="price">Price:</label>
        <div className="input-group col-xs-3">
         <div className="input-group-addon">$</div>
         <input type="text" ref="price" className="form-control" placeholder="Price" defaultValue={product.price}/>
         <div className="input-group-addon">.00</div>
        </div>
       </div>
       <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <div className="input-group col-xs-3">
         <input type="number" ref="quantity" className="form-control" min="1" max="20" placeholder="Quantity" defaultValue={product.quantity}/>
        </div>
       </div>
       <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Update Product</button>
      </form>
     </div>
    </div>
   </div>
  )
 }
}

export default ProductsUpdate;
