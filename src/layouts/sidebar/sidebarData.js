import React, { useState } from 'react';
import './cssSidbar.css';
// import Item from'../../dataSidbar.json';
import SidebarItem from './sidebarData';



function SidebaItem({item}) {
  const [open, setOpen]=useState(false);

  if(item.childrens){
  return (
      <div  className={open ? "sidebar-item open" : "sidebar-item"}>
      <div  className='sidebar-title' onClick={() => setOpen(!open)}>
        <span>
          { item.icon && <i className={item.icon}></i> }
          {item.title}
        </span>
        <i className="bi-chevron-down toggle-btn"></i>
      </div> 
      <div className="sidebar-content">
      {item.childrens.map((child, index) => <SidebarItem hey={index} item={child} />)}

      </div>
      </div>
  )
   }else{
      return (
      <a href={item.path || "#"}  className="sidebar-item plain">
          { item.icon && <i className={item.icon}></i> }
          {item.title}
      </a>
    )
    }
         
}


export default SidebaItem;
