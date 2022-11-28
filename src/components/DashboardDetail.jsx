import axios from "axios";
import React, { useContext, useEffect, useState  } from "react";
import { DataContext } from "../context/DataContext";
import { Link,useNavigate } from "react-router-dom";
import Spinner from  "./Spinner"

const DashboardDetail = () => {
  const navigate = useNavigate()
  const { dispatch,patientsStats, patientsInfo } = useContext(DataContext);
  let user = localStorage.getItem("user") || null
  const [revenue,setRevenue] = useState("$0")

  const formatToUnits=(num, precision)=> {
    let number = parseInt(num)
    const abbrev = ['', 'k', 'm', 'b', 't'];
    const unrangifiedOrder = Math.floor(Math.log10(Math.abs(number)) / 3)
    const order = Math.max(0, Math.min(unrangifiedOrder, abbrev.length -1 ))
    const suffix = abbrev[order];
    const answer = (number / Math.pow(10, order * 3)).toFixed(precision) + suffix;
    setRevenue(answer);
  }
  
  const sendData =(formPatient) => {
    dispatch({ type: "ACTIVE_PATIENT", payload: formPatient });
  }

  useEffect(() => {
    if(user==null) navigate("/login")
    else user = JSON.parse(localStorage.getItem("user")).user
    const getPatient = async()=>{
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const result = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/patients`,
          { provider_id: user },
          config
        );
        dispatch({ type: "LOAD_PATIENTS", payload: result.data });  
      } catch (error) {
        console.log("error fectching patient data");
      }
    }
    user && getPatient()
  }, [dispatch]);

  useEffect(() =>{
    const getData = async () => {
      try {
        const config = {
          headers: {
            "Content-Type": "application/json",
          },
        };
        const res = await axios.post(
          `${process.env.REACT_APP_BASE_URL}/dashboard`,
          { provider_id: user },
          config
        );
        
        dispatch({ type: "LOAD_DATA", payload: res.data });
        // localStorage.setItem("revenue", JSON.stringify({revenue:res.data.revenue}))
        
      } catch (error) {
        console.log("error fectching dashboard data");
      }
    };
    user && getData() 
  },[dispatch])

  useEffect(()=>{
    patientsStats && formatToUnits(patientsStats.revenue,2)
  },[patientsStats])

  return (
    !patientsStats ? (<Spinner/>) :( 
    <div className="dashboard">  
      <h1>Numbers</h1>
      <div className="dash-cards">
        <div className="cards-detail">
          <div>
            <p>Total Patients</p>
            <i
              className="fa-solid fa-user-plus"
              style={{ color: "rgb(195,69,254)" }}
            ></i>
          </div>
          <h1>{parseInt(patientsStats.total_patients).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</h1>
        </div>

        <div className="cards-detail">
          <div>
            <p>Reviewed</p>
            <i
              className="fa-solid fa-clipboard-list"
              style={{ color: "rgb(40, 97, 255)" }}
            ></i>
          </div>
          <h1>{parseInt(patientsStats.reviewed).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</h1>
        </div>

        <div className="cards-detail">
          <div>
            <p>Approved</p>
            <i
              className="fa-solid fa-circle-check"
              style={{ color: "#1aa260" }}
            ></i>
          </div>
          <h1>{parseInt(patientsStats.approved).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</h1>
        </div>

        <div className="cards-detail">
          <div>
            <p>Denied</p>
            <i
              className="fa-solid fa-clipboard-question"
              style={{ color: "red" }}
            ></i>
          </div>
          <h1>{parseInt(patientsStats.denied).toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})}</h1>
        </div>

        {/* <div className="cards-detail">
          <div>
            <p>Revenue</p>
            <i
              className="fa-solid fa-dollar-sign"
              style={{ color: "#1aa260" }}
            ></i>
          </div>
          <h1>{revenue}</h1>
        </div> */}
      </div>
      <h1>Patients</h1>
      <div className="patients-detail">
        <table>
          <thead>
            <tr>
              <th>Patients</th>
              <th>Date of Birth</th>
              <th>Contact</th>
              <th>Review Date</th>
              <th>Status</th>
              {/* <th>Revenue</th> */}
              <th>Go to Form</th>
            </tr>
          </thead>
          <tbody>
            {patientsInfo?.map((patient) => (
              <tr key={patient.patient_id}>
                <td>{`${patient.first_name} ${patient.last_name}`} </td>
                <td>03-07-1988</td>
                <td>668-952-1478</td>
                <td>03-07-2022</td>
                <td className={patient.status}><b>{patient.status}</b></td>
                {/* <td>{`$${patient.revenue}`}</td> */}
                <td><Link to="/patients" style={{textDecoration:"underline"}} onClick={()=>sendData(patient)}>Go To Form</Link></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ));
};

export default DashboardDetail;
