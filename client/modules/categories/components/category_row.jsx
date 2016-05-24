import React from 'react';

class CategoryRow extends React.Component {
 render(){

  const {category} = this.props;


  return (
   <tr>
    <td>{category.title}</td>
    <td>{category.description}</td>
   <td>
    <a href={ "/admin/categories/update/" + category._id} >Edit</a> |
    <a ref="">Delete</a>
    </td>
   </tr>
  );
 }
}


export default CategoryRow;
