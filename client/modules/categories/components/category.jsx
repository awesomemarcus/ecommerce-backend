import React from 'react';

const Category = ({category}) => (
  <tr>
   <td>{category.title}</td>
   <td>{category.description}</td>
   <td><a href="/admin/categories/edit/{category._id}">Edit</a> | <a href="">Delete</a></td>
  </tr>
);

export default Category;
