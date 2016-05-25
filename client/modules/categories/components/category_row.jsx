import React from 'react';

class CategoryRow extends React.Component {

 handleCategoryStatusUpdate(e){
  e.preventDefault();
  this.props.onCategoryStatusUpdate(this.props.category._id);
 }

 handleCategoryStatusCancel(e){
  e.preventDefault();
  this.props.onCategoryStatusUpdate(null);
 }

 handleCategoryUpdate(e){
  e.preventDefault();
  const {onEditingCatId, onUpdateRow} = this.props;
  const {cat_title, cat_description} = this.refs;
  onUpdateRow(onEditingCatId, cat_title.value, cat_description.value);
 }

 handleCategoryDelete(e){
  e.preventDefault();
  this.props.onCategoryDelete(this.props.category.title);
 }

 render(){

  const {category, onStateStatus, onEditingCatId} = this.props;

  if(onStateStatus && onEditingCatId == category._id){
   return (
    <tr>
     <td><input type="text" ref="cat_title" id="" className="cat-title form-control" defaultValue={category.title}/></td>
     <td><textarea ref="cat_description" id="" className="form-control" defaultValue={category.description}></textarea></td>
    <td>
     <button className="btn btn-success" onClick={this.handleCategoryUpdate.bind(this)}>Update</button>&nbsp;
      <button className="btn btn-warning" onClick={this.handleCategoryStatusCancel.bind(this)}>Cancel</button>
     </td>
    </tr>
   );
  }

  return (
   <tr>
    <td>{category.title}</td>
    <td>{category.description}</td>
   <td>
    <a href="" onClick={this.handleCategoryStatusUpdate.bind(this)} >Edit</a> |
    <a href="" onClick={this.handleCategoryDelete.bind(this)}> Delete</a>
    </td>
   </tr>
  );
 }
}


export default CategoryRow;
