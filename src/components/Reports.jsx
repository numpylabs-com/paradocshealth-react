import React, { useContext, useState, useEffect, useRef } from "react";
import Sidebar from "./Sidebar";
import Notes from "./Notes";
import axios from "axios";
import { DataContext } from "../context/DataContext";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const Reports = () => {
  const {dispatch,pdfUrl, patientsInfo, activeData} = useContext(DataContext)
  let user  = localStorage.getItem("user") || null;
  const navigate = useNavigate()
  const isFirstRun = useRef(true);
  const [model, setModel] = useState(false);
  const [nextModel, setNextModel] = useState(false);
  const [denyModel, setDenyModel] = useState(false);
  const [patient, setPatient] = useState();
  const [id,setId] = useState(activeData.patient_id-1 || 0)
  const [showComp,setShowComp] = useState(false)
  const [reviewData,setReviewData] = useState("")
  const [denyReason,setDenyReason] = useState("")
  const [status,setStatus] = useState(null)
  

  const getText =(data) => {
    setReviewData(data)
  }

  const getCompData = (data) => {
    setShowComp(data)
  }

  const nextPatient = () =>{
    console.log("check",id)
    if(id<patientsInfo.length-1) {
      setId(id+1)
    }
  }

  const prevPatient = () =>{
    console.log("check",id)
    if(id>0){
      setId(id-1) 
    }
  }

  const approveModel = async() => {
    try {
      setStatus("Approved")
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/status`,{provider_id:activeData.provider_id,patient_id:activeData.patient_id,status:status,reason:denyReason},config)
        if(res.data.status ==200)
          setModel((currentModel) => !currentModel); 
      } catch (error) {
        console.log("error fetching status")   
      }
    
  };

  const deniedModel = () => {
    setDenyModel((currentModel) =>!currentModel);  
  };

  const denyPopup = async() => {
    try {
      setStatus("Denied")
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      if(denyReason!=""){
        const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/status`,{provider_id:activeData.provider_id,patient_id:activeData.patient_id,status:'Denied',reason:denyReason},config)
        if(res.data.status ==200)
          setNextModel((currentModel) =>!currentModel);
      }else alert("Please write the reason!")  
    } catch (error) {
      console.log("error fetching status")   
    }
    
  };

  const dialogueBox = (e) => {
    if(!nextModel) e.stopPropagation()
  }

  useEffect(()=>{
    const getPDF = async()=>{
      try {
        const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/fetch-pdf-url/${activeData.s3_pdf_url}`)
        dispatch({type:"GET_PDF", payload:res.data})
      } catch (error) {
        console.log("error fetching pdf")   
      }
    }
    activeData && getPDF()
  },[dispatch,activeData])

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
        
        if(Object.keys(activeData).length === 0) {
          setPatient(result.data[0]) 
          dispatch({ type: "ACTIVE_PATIENT", payload: result.data[0] }); 
        }
      } catch (error) {
        console.log("error fectching patient data");
      }
    }
    user && getPatient()
  }, [dispatch]);

  useEffect(() => {
    setPatient(activeData)
  },[activeData])

  useEffect(()=>{
    const updatePatient = () => {
      patientsInfo.map((patient,index) =>{
        if(index == id ){
          setPatient(patient)
          dispatch({type:"ACTIVE_PATIENT",payload:patient})
        }
      })
    }
    if(isFirstRun.current){
        isFirstRun.current = false;
        return;
      }else{
        updatePatient()
      }
    
  },[id])

  return (
    <>
      <div className="main-content">
        <div className="report">
        <div className="buttons">
            <button className="btn-border" onClick={prevPatient}>Previous Patient</button>
            <p>Patient {`# ${patient ? patient.patient_id:"0"} of ${patientsInfo && patientsInfo.length}`}</p>
            <button className="btn-fill" onClick={nextPatient}>Next Patient</button>
          </div>
          <div className="main-report">
            <div className="pdf">
              <iframe className="" src={pdfUrl}></iframe>
            </div>
          </div>
          <div className="selection">
            <button className="btn-border" onClick={deniedModel}>
              Deny Form
            </button>
            <button className="btn-fill" onClick={approveModel}>
              Approve Form
            </button>
          </div>
        </div>
      
        {showComp ? <Notes getNotes={getCompData} addText={reviewData}/> : <Sidebar getSidebar={getCompData} data={getText}/>}        
        
      </div>

      <div
        className={`model${model ? "" : " hide-model"}`}
        onClick={approveModel}
      >
        <div className="model-container">
          <i
            className="fa-solid fa-circle-check"
            style={{ color: "#1aa260" }}
          ></i>
          <h1>Approved!</h1>
        </div>
      </div>

      <div className={`model${denyModel ? "" : " hide-model"}`} onClick={()=>{deniedModel(); setNextModel(false)}} >
        <div className={`deny-container model-container${nextModel ? " hide-model" : ""}`} onClick={(e)=>dialogueBox(e)}>
          <p>Reason for Denying</p>
          <div className="line"></div>
          <textarea
          value={denyReason}
          onChange={(e)=>setDenyReason(e.target.value)}
            type="hidden"
            rows="10"
            placeholder="Write here..."
          ></textarea>
          <button className="deny-btn" onClick={denyPopup}>
            Deny
          </button>
        </div>
        
        <div className={`model-container${nextModel ? "" : " hide-model"}`}>
          {pdfUrl ?(<i
            className="fa-solid fa-clipboard-question"
            style={{ color: "red" }}
          ></i>): (<Spinner/>)}
          <h1>Denied!</h1>
        </div>
      </div>
    </>
  );
};

export default Reports;

