import React from 'react';

const SideBar = () => (
   <div className="sidebar-nav-fixed affix">
    <div className="well">
     <ul className="nav">
      <li className="nav-header">Admin Panel</li>
      <li>
       <a href="">Products</a>
       <ul>
        <li><a href="/admin/products/add">Add Product</a></li>
       </ul>
      </li>
      <li>
       <a href="">Categories</a>
       <ul>
        <li><a href="/admin/categories/add">Add Category</a></li>
       </ul>
      </li>
     </ul>
    </div>
   </div>
);

export default SideBar;
