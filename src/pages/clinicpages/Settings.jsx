import React from 'react'
import Navbar from '../../components/clinic-admin/Navbar'
import img from "../../assets/visa.png"

const Settings = () => {
  return (
    <div className='nav-content'>
        <Navbar/>
        <div className="content">
          <div className="doctor setting">
            <div className="title">
              <h1>Account</h1>
              <i className="fa-solid fa-heart-pulse"></i>
              <p>Member since August 2022</p>
            </div>
            <div className="line"></div>
            <div className="payment">
              <p>Status</p>
              <div className='payment-detail'>
                <p>Current Subscription Status: <span>Active</span></p>
                <div className='card'>
                  <img src={img} alt="img"/>
                  <p>**** **** **** 1083</p>
                </div>
                <p>Your next billing date is on 2nd December</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Settings