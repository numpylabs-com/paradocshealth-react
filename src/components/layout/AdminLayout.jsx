import React from 'react'
import { Outlet } from 'react-router-dom'
import AdminMenu from '../super-admin/AdminMenu'

const ClinicLayout = () => {
  return (
    <div className="container">
        <AdminMenu />
        <Outlet />
    </div>
  )
}

export default ClinicLayout