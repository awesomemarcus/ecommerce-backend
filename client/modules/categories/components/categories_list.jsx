import React from 'react';
import CategoryRow from './category_row.jsx';
import CategoriesUpdate from '../containers/categories_update.js';

class CategoriesList extends React.Component{

 componentWillMount(){
  this.setState({
   editting: false,
   catId: '',
   catIdEditting: '',
  })
 }

 handleStatus(catId){
  if(catId){
   return this.setState({
    editting: true,
    catIdEditting: catId,
   });
  }
   return this.setState({
    editting: false,
    catIdEditting: '',
   });

 }

 handleCategoryStatusUpdate(catId){
  this.handleStatus(catId);
 }

 handleUpdate(catId, title, description, categoryImage){

  const {categoriesUpdate} = this.props;
  const catItems = {
   title: title,
   description: description,
   categoryImage: categoryImage,
  }

  categoriesUpdate(catId, catItems);

  this.handleStatus(null);

 }

 handleCategoryDelete(title){
  const {categoriesDelete} = this.props;
  categoriesDelete(title);
 }


 render(){

  const {categories} = this.props;

  return (
   <div className="categories-list">
    <table className="table table-hover">
     <thead>
      <tr>
       <th></th>
       <th>Title</th>
       <th>Description</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {categories.map(category => (
       <CategoryRow
        onCategoryDelete={this.handleCategoryDelete.bind(this)}
        onUpdateRow={this.handleUpdate.bind(this)}
        onStateStatus={this.state.editting} onEditingCatId={this.state.catIdEditting} onCategoryStatusUpdate={this.handleCategoryStatusUpdate.bind(this)} key={category._id} category={category}/>
      ))}
     </tbody>
    </table>
   </div>
  );
 }
}


export default CategoriesList;
