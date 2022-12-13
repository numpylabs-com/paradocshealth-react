import React,{useState, useEffect, useRef} from "react";
import { Link,NavLink,useLocation } from "react-router-dom";
import logowhilte from "../../assets/pdh-logo-white.webp"

const AdminMenu = () => {
  const ref = useRef(null); 
  const location = useLocation()
  const [display, setDisplay] = useState(false);
  const [pos,setPos] = useState(null)
  const [active, setActive] = useState(location.pathname)
  const posVal = localStorage.getItem('activeTab') || null
  let posObj = {tab1:0,tab2:72,tab3:144,tab4:206,tab5:278}

  if(pos==null && posVal != null) setPos(localStorage.getItem('active'))
  else if(pos==null) setPos("0px")

  const handleEffect= (e) => {
    let Top = e.target.offsetTop
    ref.current = Top+"px";
    setPos(ref.current)
    localStorage.setItem('active', ref.current)
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
              to="/admin"
              className={`tab-btn${active === "/admin" ? " highlighted" : ""}`}
              onClick={(e) =>{handleEffect(e)}}
            >
              <i className="fa-solid fa-border-all"></i> <span>Dashboard</span>
            </Link>
            <Link
              to="/admin/clinics"
              className={`tab-btn${active === "/admin/clinics" ? " highlighted" : ""}`}
              onClick={(e) =>{handleEffect(e)}}
            >
              <i className="fa-solid fa-house-medical"></i>
              <span>Clinics</span>
            </Link>
            <Link
              to="/admin/memberships"
              className={`tab-btn${active === "/admin/memberships" ? " highlighted" : ""}`}
              onClick={(e) =>{handleEffect(e)}}
            >
              <i className="fa-solid fa-address-card"></i> <span>MemberShips</span>
            </Link>
            <Link
              to="/admin/audit"
              className={`tab-btn${active === "/admin/audit" ? " highlighted" : ""}`}
              onClick={(e) =>{handleEffect(e)}}
            >
              <i className="fa-solid fa-file-signature"></i> <span>Audit</span>
            </Link>
            <Link
              to="/admin/setting"
              className={`tab-btn${active === "/admin/setting" ? " highlighted" : ""}`}
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

export default AdminMenu;
