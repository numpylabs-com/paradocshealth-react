import React,{useContext} from 'react'
import { useLocation } from 'react-router-dom'
import { ModelContext } from '../../context/UIContext'
import {motion} from "framer-motion"

const AddModal = () => {
  const {dispatch, addModel} = useContext(ModelContext)
  const location =useLocation()
  // const [modelType,setModelType] = useState(location.pathname)
  
  // useEffect(()=>{
  //   setModelType(location.pathname)
  // },[location])
  return (
    <motion.div
    initial={{opacity:0}} 
    animate={{opacity:1}}  
    className={`model${addModel ? "" : " hide-model"}`} 
    onClick={(e)=>e.stopPropagation()}>
      <motion.div 
        initial={{y:-100}} 
        animate={{y:0}} 
        transition={{type: "spring", stiffness: 100}}
        className="upload-container model-bg">
        <button className="close-btn" onClick={()=>dispatch({type:"ADD_MODEL"})}><i className="fa-solid fa-circle-xmark"></i></button>
        {location.pathname=="/patient"?(
          <form>
            <div className='group-form'>
                <label>Name</label>
                <i className="fa-regular fa-user"></i>
                <input type='text' placeholder='mike09' name="username" />
            </div>
            <div className='group-form'>
                  <label>Disease</label>
                  <i className="fa-solid fa-virus"></i>
                  <i className="fa-solid fa-caret-down"></i>
                  <select>
                    <option>Headache</option>
                    <option>Cancer</option>
                    <option>Diahrea</option>
                  </select>
            </div>
            <div className='group-form'>
                <label>Contact</label>
                <i className="fa-regular fa-user"></i>
                <input type='number' placeholder='+XXX-XXXX-XXX' name="contact" />
            </div>
            <button className='add-btn'><span>Add</span></button>   
        </form>
        ):(
          <form>
            <div className='group-form'>
                <label>Name</label>
                <i className="fa-regular fa-user"></i>
                <input type='text' placeholder='mike09' name="username" />
            </div>
            <div className='group-form'>
                  <label>Email</label>
                  <i className="fa-solid fa-envelope"></i>
                  <input type='text' placeholder='mike09' name="username" />
            </div>
            <div className='group-form'>
                  <label>Specialization</label>
                  <i className="fa-solid fa-sun"></i>
                  <i className="fa-solid fa-caret-down"></i>
                  <select>
                    <option>Neurologist</option>
                    <option>Cardiologist</option>
                    <option>Physiotherapist</option>
                  </select>
            </div>
            <div className='group-form'>
                <label>Contact</label>
                <i className="fa-regular fa-user"></i>
                <input type='number' placeholder='+XXX-XXXX-XXX' name="contact" />
            </div>
            <button className='add-btn'><span>Add</span></button>   
        </form>
        )}
      </motion.div>
    </motion.div> 
  )
}

export default AddModal