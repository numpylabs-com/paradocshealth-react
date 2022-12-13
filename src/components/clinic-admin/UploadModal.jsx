import React,{useContext} from 'react'
import { ModelContext } from '../../context/UIContext'
import filepng from "../../assets/csv-file.png"
import {motion} from "framer-motion"

const UploadModal = () => {
    const {dispatch, uploadModel} = useContext(ModelContext)

    const filehandling = (e)=>{
        console.log(e.target.files[0])
    }
    return (
    <motion.div initial={{opacity:0}} animate={{opacity:1}}
        className={`model${uploadModel ? "" : " hide-model"}`}
        onClick={()=>dispatch({type:"UPLOAD_MODEL"})}>
        <motion.div 
        initial={{y:-100}} 
        animate={{y:0}} 
        transition={{type: "spring", stiffness: 100}}
        className="upload-container" 
        onClick={(e)=>e.stopPropagation()}>
        <div className="upload-card">
            <p>Upload Files</p>
            <div className="upload-box">
                <p>Drag File Here</p>
                <p>or <span>Browser</span></p>
                <input type="file" name="file" onChange={filehandling}/>
            </div>
        </div>
        <div className="upload-files">
            <div className="upload-file">
                <div className="img">
                    <img src={filepng} alt="img"/>
                </div>
                <div className="file-detail">
                    <div className="file">
                        <span>file name</span>
                        <span>50%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-width">
                            <div className="progress-bar"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="upload-file">
                <div className="img">
                    <img src={filepng} alt="img"/>
                </div>
                <div className="file-detail">
                    <div className="file">
                        <span>file name</span>
                        <span>50%</span>
                    </div>
                    <div className="progress">
                        <div className="progress-width">
                            <div className="progress-bar" id="show"></div>
                        </div>
                    </div>
                </div>
            </div>

            <button id="btn" className="upload-btn">Done</button>
        </div>
        </motion.div>
      </motion.div>
  )
}

export default UploadModal