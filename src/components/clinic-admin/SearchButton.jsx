import React,{useContext,useEffect,useState} from "react";
import { ModelContext } from '../../context/UIContext';
import {useLocation} from "react-router-dom"
import AddModal from "./AddModal";
import UploadModal from "./UploadModal";

const SearchButton = () => {
  const {dispatch,uploadModel,addModel} = useContext(ModelContext)
  const location = useLocation()
  // const [showbtn,setShowBtn] = useState(location.pathname)
  // useEffect(()=>{
    
  // },[location])
  return (
    <>
    <div className="input">
      <div className="search">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="text"
          className="search-field"
          placeholder="Search Here..."
        />
      </div>
      <div className="btn-group">
        <button className="upload-btn" onClick={()=>dispatch({type:"UPLOAD_MODEL"})}>Upload</button>
        <button className="add-btn" onClick={()=>dispatch({type:"ADD_MODEL"})}>Add +</button>
        {/* {location.pathname=="/patient" &&<button className={`assign-btn`}>Assign</button>} */}
        <button className={`assign-btn${location.pathname=="/patient"?" show":" hide"}`}>Assign</button>
      </div>
    </div>

    {uploadModel && <UploadModal/>}
    {addModel && <AddModal/>}
      
    </>
  );
};

export default SearchButton;
