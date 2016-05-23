import React from 'react';
import Category from './category.jsx';

const CategoriesList = ({categories}) => (
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
      <Category key={category._id} category={category}/>
     ))}
    </tbody>
   </table>

  </div>
);

export default CategoriesList;
