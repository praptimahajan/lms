import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Admin from '../Admin/Admin';

function AdminRoute() {
  return (
    <div>
      <Routes>
        <Route path="/admin" element={<Admin/>} />
      </Routes>
    </div>
  )
}

export default AdminRoute
