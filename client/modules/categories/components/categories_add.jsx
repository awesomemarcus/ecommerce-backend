import React from 'react';
import UploadsImage from '../../uploads/containers/uploads_image.js';

class CategoriesAdd extends React.Component {

 handleSubmit(e){
  e.preventDefault();

  const {addCategory} = this.props;
  const {cat_title, cat_description} = this.refs;
  const categoryImage = this.state.categoryImage;
  addCategory(cat_title.value, cat_description.value, categoryImage);
  cat_title.value = '';
  cat_description.value = '';
 }

 handleImageUpload(uploadedImage){
  this.setState({
   categoryImage: uploadedImage,
  });
 }

 render(){

  const {error} = this.props;

  return (
   <div className="categories-add">
    <div className="panel panel-default">
     <div className="panel-heading">
      <h4>Add Category</h4>
     </div>
     <div className="panel-body">
      {error ? <p className="bg-danger error-msg">{error}</p> : ''}
      <form action="" onSubmit={this.handleSubmit.bind(this)}>
       <UploadsImage onImageUpload={this.handleImageUpload.bind(this)}/>
       <div className="form-group">
        <label htmlFor="cat_title">Category Title:</label>
        <input type="text" ref="cat_title" id="" className="cat-title form-control"/>
       </div>
       <div className="form-group">
        <label htmlFor="cat_description">Category Description:</label>
        <textarea ref="cat_description" id="" className="form-control"></textarea>
       </div>
       <button className="btn btn-primary">Add Category</button>
      </form>
     </div>
    </div>
   </div>
  );
 }
}

export default CategoriesAdd;
