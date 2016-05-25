import React from 'react';

class CategoriesUpdate extends React.Component {

 handleSubmit(e){
  e.preventDefault();

  const {addCategory} = this.props;
  const {cat_title, cat_description} = this.refs;
  addCategory(cat_title.value, cat_description.value);
  cat_title.value = '';
  cat_description.value = '';
 }

 render(){

  const {error, category} = this.props;

  return (
   <div className="categories-add">
    <div className="panel panel-default">
     <div className="panel-heading">
      <h4>Add Category</h4>
     </div>
     <div className="panel-body">
      {error ? <p className="bg-danger error-msg">{error}</p> : ''}
      <form action="" onSubmit={this.handleSubmit.bind(this)}>
       <div className="form-group">
        <label htmlFor="cat_title">Category Title:</label>
        <input type="text" ref="cat_title" id="" className="cat-title form-control" defaultValue={category.title}/>
       </div>
       <div className="form-group">
        <label htmlFor="cat_description">Category Description:</label>
        <textarea ref="cat_description" id="" className="form-control" defaultValue={category.description}></textarea>
       </div>
       <button className="btn btn-primary">Add Category</button>
      </form>
     </div>
    </div>
   </div>
  );
 }
}

export default CategoriesUpdate;
