import React from 'react';

class CategoriesSelect extends React.Component{

 handleChange(){
  this.props.onUserSelect(this.refs.product_cat.value);
 }

 render(){

  const {categoriesList} = this.props;

  return (
   <div className="form-group">
    <label htmlFor="product_cat">Product Category:</label>
    <select ref="product_cat" className="form-control" onChange={this.handleChange.bind(this)} defaultValue={this.props.selectedCategory}>
     <option value="" >Select Category</option>
      {categoriesList.map( category => (
       <option key={category._id} value={category.title}>{category.title}</option>

      ))}
    </select>
   </div>
  );
 }
}

export default CategoriesSelect;
