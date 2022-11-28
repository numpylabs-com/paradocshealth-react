import React from 'react'
import DashboardDetail from '../components/DashboardDetail'
import Navbar from '../components/Navbar'

const Dashboard = () => {

  return (
    <div className='content'>
        <Navbar/>
        <DashboardDetail/>
    </div>
  )
}

export default Dashboard