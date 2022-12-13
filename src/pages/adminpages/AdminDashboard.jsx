import React from 'react'
import Navbar from '../../components/clinic-admin/Navbar'
import "../../components/super-admin/admin.css"
import Map from '../../components/super-admin/Map'
import { adminData } from '../../config/data'

const AdminDashboard = () => {
  
  return (
    <div className="nav-content">
      <Navbar />
      <div className="content">
        <div className="admin-card">
          <div className="card-detail">
            <p>Avg. time per patient</p>
            <div className="admin-detail">
              <span><i className="fa-solid fa-clock-rotate-left"></i></span>
              <p>5min</p>
            </div>
          </div>
          <div className="card-detail">
            <div className='sort'>
              <p>Total Revenue</p>
              <p>By Month</p>
            </div>
            <div className="admin-detail">
              <span><i className="fa-solid fa-chart-line"></i></span>
              <p>$2400</p>
            </div>
          </div>
          <div className="card-detail">
            <p>Total Clinics</p>
            <div className="admin-detail">
              <span><i className="fa-solid fa-house-medical"></i></span>
              <p>48</p>
            </div>
          </div>
        </div>

        <div className='tracking-container'>
          <div className='map-input'>  
            <Map/>
            <div className='input-field'>
              <div className='group-form'>
                <i className="fa-solid fa-caret-down"></i>
                <select>
                  <option>Agha Khan Hospital</option>
                  <option>Doctor Hospital Lahore</option>
                  <option>Shaukat Khanum Memorial Hospital</option>
                </select>
              </div>
            </div>
          </div>
          <div className='hospital-data'>
            <div className='sort'>
              <p>Patients Reviewed</p>
              <p>By Month</p>
            </div>
            <div className='data-header'>
              <div className='header data'>
                <p>No.</p>
                <p>Name</p>
                <p>Patients</p>
              </div>
              {adminData.map(data=>(
                <div className='data' key={data.id}>
                <p>{data.id}</p>
                <p>{data.name}</p>
                <p>{data.patients}</p>
              </div>
              ))}
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard