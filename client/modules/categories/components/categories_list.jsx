import React from 'react';
import CategoryRow from './category_row.jsx';

class CategoriesList extends React.Component{

 componentWillMount(){
  this.setState({
   editting: false,
  })
 }


 render(){

  const {categories} = this.props;

  return (
   <div className="categories-list">
    <table className="table table-hover">
     <thead>
      <tr>
       <th>Title</th>
       <th>Description</th>
       <th>Action</th>
      </tr>
     </thead>
     <tbody>
      {categories.map(category => (
       <CategoryRow onCategoryEdit={this.handleProductUpdate} key={category._id} category={category}/>
      ))}
     </tbody>
    </table>

   </div>
  );
 }
}


export default CategoriesList;
