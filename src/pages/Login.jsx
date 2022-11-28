import axios from 'axios'
import React,{useState, useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import spinner from "../assets/loading.gif"
import logo from "../assets/pdh-logo.webp"

const Login = () => {
  const {dispatch,isloading} = useContext(AuthContext)
  const navigate = useNavigate()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const [showPassword,setShowPassword] = useState(false)

  const togglePassword =()=>{
    setShowPassword((currentPassword)=>!currentPassword)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (username === '' || password === "") 
      return alert('field are empty')
    
    try {
      dispatch({type: "LOADING"})
      const config = {
        headers:{
            "Content-Type":"application/json"
        }
      }
      
      const res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`,{username,password},config) 
      if(res.data.status==400){ 
        setError(true)
        dispatch({type: 'LOGIN_FAIL'})
      }else{
        localStorage.setItem("user",JSON.stringify({name:username,user:res.data.provider_id, fullname:res.data.fullname}))
        dispatch({type: 'LOGIN',payload:res.data})
        navigate("/")
    }
    } catch (error) {
      dispatch({type: 'LOGIN_FAIL'})
      setError(true)
      console.log(error)
    }

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
          <form onSubmit={handleSubmit}>
            <h1>Sign In</h1>
            <div className='group-form'>
              <label>Username</label>
              <i className="fa-regular fa-user"></i>
              <input type='text' placeholder='mike09' name="username" onChange={(e)=>setUsername(()=>e.target.value)}/>
            </div>

            <div className='group-form'>
              <label>Password</label>
              <i className="fa-solid fa-lock"></i>
              <input type={showPassword ? 'text':'password'} placeholder='*******' name="password" onChange={(e)=>setPassword(()=>e.target.value)}/>
              <i className={`fa-regular${showPassword ? " fa-eye":" fa-eye-slash"}`} onClick={togglePassword}></i>
            </div>
            <button className='login-btn'><span>Sign In</span> {isloading && <img src={spinner} alt="" style={{width:"24px",height:"24px"}}/>}</button>
            {error && <span className="error">Please enter the correct email or password</span>}
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Login