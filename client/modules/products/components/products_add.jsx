import React from 'react';
import CategoriesSelect from '../../categories/containers/categories_select.js';
import UploadsImage from '../../uploads/containers/uploads_image.js';

class ProductsAdd extends React.Component{

componentWillMount(){

 this.setState({
  selectedCategory: '',
  imageUploaded: false,
 })

}

 handleUserSelect(selectedCategory) {
  return this.setState({
   selectedCategory: selectedCategory,
  });

 }

 handleSubmit(e){
  e.preventDefault();
  const {addProduct} = this.props;
  const category = this.state.selectedCategory;
  const productImage = this.state.productImage;
  const {title, description, price, quantity} = this.refs;

  addProduct(title.value, description.value, category, price.value, quantity.value, productImage);

  title.value = '';
  description.value = '';
  this.setState({selectedCategory: '', imageUploaded: false});
  price.value = '';
  quantity.value = '';

 }


 handleImageUpload(uploadedImage){
  this.setState({
   productImage: uploadedImage,
   imageUploaded: true,
  });
 }

 render(){

  // const {categories} = this.props;
  const {error} = this.props;

  return (
   <div className="products-add">
    <div className="panel panel-default">
     <div className="panel-heading">
      <h4>Add Product</h4>
     </div>
     <div className="panel-body">
      {error ? <p className="bg-danger error-msg">{error}</p> : ''}
      <form action="" enctype="multipart/form-data">
      {this.state.imageUploaded ? 'Image uploaded..' : <UploadsImage onImageUpload={this.handleImageUpload.bind(this)} />}
       <div className="form-group">
        <label htmlFor="title">Product Title:</label>
        <input type="text" ref="title" className="form-control" />
       </div>
       <div className="form-group">
        <label htmlFor="description">Product Description:</label>
        <textarea ref="description" className="form-control" placeholder="text here..." ></textarea>
       </div>
       <CategoriesSelect selectedCategory={this.state.selectedCategory} onUserSelect={this.handleUserSelect.bind(this)} />
       <div className="form-group">
        <label htmlFor="price">Price:</label>
        <div className="input-group col-xs-3">
         <div className="input-group-addon">$</div>
         <input type="text" ref="price" className="form-control" placeholder="Price" />
         <div className="input-group-addon">.00</div>
        </div>
       </div>
       <div className="form-group">
        <label htmlFor="quantity">Quantity:</label>
        <div className="input-group col-xs-3">
         <input type="number" ref="quantity" className="form-control" min="1" max="20" placeholder="Quantity" />
        </div>
       </div>
       <button className="btn btn-primary" onClick={this.handleSubmit.bind(this)}>Add Product</button>
      </form>
     </div>
    </div>
   </div>
  )
 }
}

export default ProductsAdd;
