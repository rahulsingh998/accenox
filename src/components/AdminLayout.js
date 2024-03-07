// components/CustomLayout.js

import React from 'react';
import AdminHeader from './AdminHeader';


const CustomLayout = ({ children }) => {
  return (
    <div className="custom-layout">
      <AdminHeader />
      <main>{children}</main>
      
    </div>
  );
};

export default CustomLayout;
