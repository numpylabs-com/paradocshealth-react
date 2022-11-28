import React from 'react'
import { Outlet } from 'react-router-dom'
import SideMenu from "../SideMenu"

const UserLayout = () => {
  return (
    <div className="container">
        <SideMenu />
        <Outlet />
      </div>
  )
}

export default UserLayout