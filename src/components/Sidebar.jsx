import axios from "axios";
import React, { Fragment, useContext, useEffect, useState } from "react";
import { DataContext } from "../context/DataContext";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = (props) => {
  const {dispatch,criteria,activeData} = useContext(DataContext)
  let user  = localStorage.getItem("user") || null;
  const [data,setData] = useState(null)
  const navigate = useNavigate()

  const handleSelect=(e)=>{
    criteria.map(code=>{
      if(e.target.value == code.hcc_code){
        setData(code)
      }
    }) 
  }

  useEffect(() => {
    if(user==null) navigate("/login")
    else user = JSON.parse(localStorage.getItem("user")).user 
    const getCriteria = async()=>{
      try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/meat_critera`,
        { provider_id: user,patient_id:activeData.patient_id},
        config
      );
      dispatch({type:"CRITERIA",payload:res.data})
     } catch (error) {
        console.log("error",error)
      }
    }
    
    activeData && getCriteria()
  },[dispatch,activeData])

  useEffect(()=>{
    setData(criteria[0])
  },[criteria])
  

  return (
    <div className="feedback">
      <h1>Clinical Evidence</h1>
      <div className="card card1">
        <select name="hcc_code" id="hcc_code" onChange={handleSelect}>
          {criteria && criteria.map((code,index)=>(
          <Fragment key={index}>
          <option key={index} value={code.hcc_code}>{code.hcc_code} {code.description}</option>
          </Fragment>
          ))}
        </select>
      </div>

      <div className="card-sub">
        <div className="sub-detail">
          <span>ICD-10 code</span>
          <span className="imp" style={{color:"rgb(172, 172, 172)"}}>{data && data.icd10_code}</span>
        </div>
        {/* <div className="sub-detail">
          <span>Revenue</span>
          <span className="clr" style={{color:"#1aa260"}}>${data && data.expected_revenue}</span>
        </div> */}
      </div>

      <hr className="line"/>

      <div className="cards">
        <div className="section">
          <div>
          <h2>Monitor</h2>
            <span>03-07-2022</span>
          </div>
          <p>{data && data.criteria_measure_excerpt}</p>
          {/* <Link to={}></Link> */}
          <Link href="" onClick={()=>{props.getSidebar(true); props.data(data.criteria_measure_excerpt)}}>Review</Link>
        </div>
        
        <div className="section">
          <div>
          <h2>Evaluate</h2>
            <span>03-07-2022</span>
          </div>
          <p>{data && data.criteria_evaluate_excerpt}</p>
          {/* <Link to={}></Link> */}
          <Link href="" onClick={()=>{props.getSidebar(true); props.data(data.criteria_evaluate_excerpt)}}>Review</Link>
        </div>
        
        <div className="section">
          <div>
            <h2>Assess</h2>
            <span>03-07-2022</span>
          </div>
          <p>{data && data.criteria_assess_excerpt}</p>
          {/* <Link to={}></Link> */}
          <Link href="" onClick={()=>{props.getSidebar(true); props.data(data.criteria_assess_excerpt)}}>Review</Link>
        </div>
        
        <div className="section">
          <div>
            <h2>Treat</h2>
            <span>03-07-2022</span>
          </div>
          <p>{data && data.criteria_treat_excerpt}</p>
          {/* <Link to={}></Link> */}
          <Link href="" onClick={()=>{props.getSidebar(true); props.data(data.criteria_treat_excerpt)}}>Review</Link>
        </div>
      </div>   
    </div>
  );
};

export default Sidebar;
