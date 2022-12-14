import React,{useState, useEffect, useRef} from "react";
import { Link,useLocation } from "react-router-dom";
import logowhilte from "../../assets/pdh-logo-white.webp"

const ClinicSidebar = () => {
  const ref = useRef(null);
  const location = useLocation()
  const [display, setDisplay] = useState(false);
  const [pos,setPos] = useState(null)
  const [active, setActive] = useState(location.pathname)
  const posVal = localStorage.getItem('activeTab') || null

  if(pos==null && posVal != null) setPos(localStorage.getItem('activeTab'))
  else if(pos==null) setPos("0px")

  const handleEffect= (e) => {
    let Top = e.target.offsetTop
    // let bound = e.target.getBoundingClientRect().top
    // let parent = e.target.offsetParent.offsetTop
    // let value = bound - parent
    ref.current = Top+"px";
    setPos(ref.current)
    localStorage.setItem('activeTab', ref.current)
  }
  
  const toggleMenu = () => {
    setDisplay((prev) => !prev);
  };

  useEffect(()=>{
    setActive(location.pathname)
    // ref.current = Top+"px";
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
              to="/doctor"
              className={`tab-btn${active === "/doctor" ? " highlighted" : ""}`}
              
              onClick={(e) =>{handleEffect(e)}}
            >
              <i className="fa-solid fa-user-doctor"></i> <span>Doctors</span>
            </Link>
            <Link
              to="/patient"
              className={`tab-btn${active === "/patient" ? " highlighted" : ""}`}
              onClick={(e) =>{handleEffect(e)}}
            >
              <i className="fa-solid fa-user-plus"></i>
              <span>Patients</span>
            </Link>
            <Link
              to="/settings"
              className={`tab-btn${active === "/settings" ? " highlighted" : ""}`}
              onClick={(e) =>{handleEffect(e)}}
            >
              <i className="fa-solid fa-gear"></i> <span>Setting</span>
            </Link>
            {pos != null && <div className="active-tab" ref={ref} style={{top:pos}}></div>}
          </div>

          <button className="logout-btn">
            <i className="fa-solid fa-right-from-bracket"></i> {" "}
            <span>Log out</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default ClinicSidebar;
