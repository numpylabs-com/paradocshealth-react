import React,{useContext,useEffect,useState} from "react";
import { ModelContext } from '../../context/UIContext';
import {useLocation} from "react-router-dom"
import AddModal from "./AddModal";
import UploadModal from "./UploadModal";
import Search from "./Search";

const SearchButton = () => {
  const {dispatch,uploadModel,addModel} = useContext(ModelContext)
  const location = useLocation()
  // const [showbtn,setShowBtn] = useState(location.pathname)
  // useEffect(()=>{
    
  // },[location])
  return (
    <>
    <div className="input">
      <Search/>
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
