import React, { useContext, useEffect, useState } from "react";
import { Link,useNavigate,useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext";
import logo from "../assets/pdh-logo.png"
import logowhilte from "../assets/pdh-logo-white.webp"

const SideMenu = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const [display, setDisplay] = useState(false);
  const [active, setActive] = useState(location.pathname);
  const { dispatch, patientsInfo } = useContext(DataContext);

  const activePatient=(patient)=>{
    dispatch({type:"ACTIVE_PATIENT", payload:patient})
  }

  const onLogout = () => {
    setActive("0")
    localStorage.removeItem("user")
    localStorage.removeItem("revenue")
    navigate("/login")
  }

  const toggleMenu = () => {
    setDisplay((prev) => !prev);
  };

  useEffect(()=>{
      setActive(location.pathname)
  },[location])

  return (
    <>
      <div className="menu">
        <button className="hamburger" onClick={toggleMenu}>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>

      <div className={`sidemenu${display ? " show" : ""}`}>
        <div className="close">
          <button className="ham" onClick={toggleMenu}>
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="img"><img src={logowhilte}/></div>
        <div className="side-size">
          <div className="line"></div>
          <div className="btn">
            <Link
              to="/"
              className={`plain-btn${active === "/" ? " active" : ""}`}
              onClick={() => setActive("/")}
            >
              <i className="fa-solid fa-border-all"></i> <span>Dashboard</span>
            </Link>
            <Link
              to="/patients"
              className={`plain-btn${active === "/patients" ? " active" : ""}`}
              onClick={() => setActive("/patients")}
            >
              <i className="fa-solid fa-user-plus"></i>
              <span>Patients</span>
            </Link>
          </div>

          <div className={`${active === "/patients" ? "" : "hide-tab"}`}>
            <div className="line"></div>
            <div className="queue">
              <p>Patients Queue</p>
              <div className="line"></div>
              <div className="details">
                {patientsInfo && patientsInfo.map((patient,index)=>(
                  <div key={index} onClick={()=>activePatient(patient)}>
                    <p>{patient.last_name}</p>
                    <i className={`fa-solid fa-circle ${patient.status!=null ? `${patient.status}`:"Default"}`}></i>
                </div>
                ))}
                
              </div>
            </div>
          </div>

          <div className="btn">
            <button
              className={`plain-btn${active === "0" ? " active" : ""}`}
              onClick={onLogout}
            >
              <i className="fa-solid fa-right-from-bracket"></i>{" "}
              <span>Log out</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
