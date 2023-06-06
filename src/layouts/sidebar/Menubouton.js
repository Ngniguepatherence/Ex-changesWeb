import React, { useState } from 'react';
import Sidebar from './index';

function MenuButton() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setSidebarOpen(!sidebarOpen);
  }

  return (
    <div>
      <button onClick={handleMenuClick}><i className="bi bi-list iconstyleMenu"></i></button>
      {sidebarOpen && <Sidebar onClose={() => setSidebarOpen(false)} />}
    </div>
  );
}

export default MenuButton;