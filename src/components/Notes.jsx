import axios from "axios";
import React,{useContext, useEffect, useState} from "react";
import { DataContext } from "../context/DataContext";
import Spinner from "./Spinner";

const Notes = (props) => {
  const {dispatch,notes,activeData} = useContext(DataContext)
  const [showModel,setShowModel] = useState(false)

  const toggleModel = ()=>{
    setShowModel(currentModel=>!currentModel)
  }

  useEffect(()=>{
    const getNotes = async()=>{
    try {
      const res = await axios.get(`${process.env.REACT_APP_BASE_URL}/fullnotes/${activeData.provider_full_notes}`)
      dispatch({type:"GET_NOTES", payload:res.data})
      // console.log(res.data.provider_full_notes)
    } catch (error) {
      console.log("error fetching notes")   
    }
  }

  activeData &&  getNotes()
  },[dispatch])

  return (
    <>
    <div className="notes-container">
      <div className="notes">
        <h3>Extract from your notes</h3>
        <div className="line"></div>
        <p>
          {props.addText}
        </p>
      </div>
      <div className="notes-btn">
        <button className="back" onClick={()=>{props.getNotes(false)}}>Back</button>
        <button className="view-notes" onClick={toggleModel}>View full notes</button>
      </div>
    </div>

    <div className={`model${showModel ? "" : " hide-model"}`} onClick={(e)=>e.stopPropagation()}>
    <div className={`notes-model model-container${showModel ? "" : " hide-model"}`}>
          <button className="close-btn" onClick={toggleModel}><i className="fa-solid fa-circle-xmark"></i></button>
          <h3>Notes</h3>
          <div className="line"></div>
          {notes ? <p>{notes}</p>:(<Spinner/>)}
        </div>
        </div>
    </>
  );
};

export default Notes;
