import React,{useState} from 'react'
import Spinner from '../../components/Spinner'
import logo from "../../assets/pdh-logo.webp"
import "../../components/clinic-admin/clinic.css"
import { useNavigate } from 'react-router-dom'
const LoginType = () => {
  const navigate = useNavigate()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const [isAdmin,setIsAdmin] = useState(true)
    const [showPassword,setShowPassword] = useState(false)
    let isloading = false;
    
    const togglePassword =()=>{
        setShowPassword((currentPassword)=>!currentPassword)
    }

    const login=()=>{
      navigate("/doctor")
    }

    return (
        <div className="login">
          <div className='login-left'>
            <p></p>
            <div className='login-info'>
            <div className="img"><img src={logo}/></div>
              <p className='headline'>Providers, take advantage of your time.</p>
              <p className='sub-text'>Complete Non-Clinical task <b>10x Faster!</b></p>
            </div>
            
          </div>
          <div className='login-right'>
            <div className='signin'>
              <form>
                <h1>Sign In</h1>
                <div className='group-btn'>
                    <button className={`admin ${isAdmin ? "active":""}`} onClick={(e)=>{e.preventDefault(); setIsAdmin(true)}}><i className="fa-solid fa-user-gear"></i> Admin</button>
                    <button className={`doctor ${isAdmin ? "":"active"}`} onClick={(e)=>{e.preventDefault(); setIsAdmin(false)}}><i className="fa-solid fa-user-doctor"></i> Doctor</button>
                </div>
                <div className='group-form'>
                  <label>Email</label>
                  <i className="fa-regular fa-user"></i>
                  <input type='text' placeholder='mike09' name="username" />
                </div>
    
                <div className='group-form'>
                  <label>Password</label>
                  <i className="fa-solid fa-lock"></i>
                  <input type={showPassword ? 'text':'password'} placeholder='*******' name="password" onChange={(e)=>setPassword(()=>e.target.value)}/>
                  <i className={`fa-regular${showPassword ? " fa-eye":" fa-eye-slash"}`} onClick={togglePassword}></i>
                </div>

                {isAdmin && 
                <div className='group-form'>
                  <label>Hospital</label>
                  <i className="fa-solid fa-house-medical"></i>
                  <i className="fa-solid fa-caret-down"></i>
                  <select>
                    <option>Agha Khan Hospital</option>
                    <option>Doctor Hospital Lahore</option>
                    <option>Shaukat Khanum Memorial Hospital</option>
                  </select>
                </div> }

                <button className='login-btn' onClick={login}><span>Sign In</span> {isloading && <img src={Spinner} alt="" style={{width:"24px",height:"24px"}}/>}</button>
                {error && <span className="error">Please enter the correct email or password</span>}
              </form>
              
            </div>
          </div>
        </div>
      )
    }

export default LoginType