import React,{useState,useContext, useEffect} from 'react'
// import { DataContext } from '../context/DataContext'

const Navbar = () => {
  // const [value,setValue] = useState("0")
  // const {patientsStats,patientsInfo} = useContext(DataContext) 

  //  useEffect(()=>{
  //   if(patientsStats){
  //       setValue(patientsStats.revenue)
  //   }else if(localStorage.getItem("revenue")){
  //       setValue(JSON.parse(localStorage.getItem("revenue")).revenue)
  //   }
  // },[patientsStats,patientsInfo])  
  
  return (
    <div className="nav">
          <img
            src="https://icones.pro/wp-content/uploads/2021/03/symbole-du-docteur-icone-png-violet.png"
            alt="image"
          />
          <div>
            <p>Hi, {localStorage.getItem("user") && JSON.parse(localStorage.getItem("user")).fullname}</p>
            {/* <span>${value}</span> */}
          </div>
        </div>
  )
}

export default Navbar