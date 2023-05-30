import React from 'react';
import './cssSidbar.css';
import Items from'../../dataSidbar.json';
import SidebarItem from './sidebarData';



function Sidebar() {
  return (
    <div className='main'>
        <div className='sidebar'>
          <div  className='sidebar-items'>
            <span>
              logo
            </span>
           </div>
          <div>
            {Items.map((item, index) => <SidebarItem hey={index} item={item} />)}
        </div>
        <div className='bouton'>
          <a href='/apropos'>Aide</a>
        </div>
      </div>
      </div>
  )
}

export default Sidebar;
// </div>
//           <div  className='sidebar-ite'>
//             <span>
//               Accueil
//             </span>
//           </div>
//           <div  className='sidebar-ite'>
//             <span>
//               Conversion
//             </span>
//           </div>
//           <SidebarItem/>
//           <div  className={open? "sidebar-items open":"sidebar-items"}>
//           <div  className='sidebar-title'>
//             <span onClick={()=> setOpen(!open)}>
//               Publication
//             </span>
//           </div>
//           <div className='sidebar-caontent'>
//           helle
//           </div>
//           </div>
//           <div  className='sidebar-items'>
//           <div  className='sidebar-title'>
//             <span>
//               Contacts
//             </span>
//           </div>
//           </div>
//           <div className='bouton'>
//            <button>
//             Aide
//            </button>
//           </div>
   
