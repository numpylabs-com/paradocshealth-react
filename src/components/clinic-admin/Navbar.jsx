import React,{useState,useContext, useEffect} from 'react'
// import { DataContext } from '../context/DataContext'
import "../clinic-admin/clinic.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className='nav-left'>
          <img src="https://icones.pro/wp-content/uploads/2021/03/symbole-du-docteur-icone-png-violet.png" alt="image"/>
          <p>Hi, Mozi47</p>
      </div>
      <div className='nav-right'>
          <div className='msg'><i className="fa-regular fa-comment-dots"></i></div>
          <div className='notification'>
            <i className="fa-solid fa-bell"></i>
            <span>2</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar