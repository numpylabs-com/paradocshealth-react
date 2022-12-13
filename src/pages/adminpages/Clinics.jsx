import React,{useContext} from 'react'
import Navbar from '../../components/clinic-admin/Navbar'
import Search from '../../components/clinic-admin/Search'
import TableItems from '../../components/clinic-admin/TableItems'
import { ClinicData } from '../../config/data'
import { ModelContext } from '../../context/UIContext';
import UploadModal from "../../components/clinic-admin/UploadModal";

const Clinics = () => {
  const header = ["ID#", "Name", "Date", "Amount", "Due Date","status",""];
  const {dispatch,uploadModel,addModel} = useContext(ModelContext)

  return (
    <>
    <div className="nav-content">
      <Navbar />
      <div className="content">
        <div className="doctor">
          <div className='input'>
            <Search/>
            <div className='btn-group'>
            <button style={{marginRight:"0"}} className="upload-btn" onClick={()=>dispatch({type:"UPLOAD_MODEL"})}>Upload</button>
            </div>  
          </div>
          <TableItems header={header} rowData={ClinicData}/>
        </div>
      </div>
    </div>
    {uploadModel && <UploadModal/>}
    </>
  )
}

export default Clinics