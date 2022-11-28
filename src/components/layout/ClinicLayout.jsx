import React from 'react'
import { Outlet } from 'react-router-dom'
import ClinicSidebar from "..//clinic-admin/ClinicSidebar"

const ClinicLayout = () => {
  return (
    <div className="container">
        <ClinicSidebar />
        <Outlet />
    </div>
  )
}

export default ClinicLayout