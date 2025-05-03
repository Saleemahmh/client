import React,{useState,useEffect} from 'react';
import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import loginimage from '../assets/login2.jpg'
import Dashboard from './userDashboard/Dashboard';

const Login = () => {
  const user = {
    username:"admin",
    password:"admin98765",
  };
  const [isLoggedIn,setLoggedIn] = useState(false);
  const [credentials,setCredentials] = useState({
    username:"",
    password:""
  });
 
  const [error,setError] = useState("");

  useEffect(()=>{
    const isUserLoggedIn = localStorage.getItem("isLoggedIn");
    if(isUserLoggedIn === "true"){
      setLoggedIn(true);
    }
  },[]);

  const handleLogin = (e) =>{
    e.preventDefault();
    
    const {username, password} = credentials;
    if(username === user.username && password === user.password){
      setLoggedIn(true);
      localStorage.setItem("isLoggedIn","true");
      setError("");
    }else{
      setError("Invalid Credentials. Please try again!");
    }
  };

  const handleLogout = ()=>{
    setCredentials({username: "",password: ""});
    setLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  }

  return (
    <div className="bg-[url('/src/assets/login.jpg')] bg-cover bg-center h-screen md:w-full">
      <div className="bg-gradient-to-r from-black/70 to-transparent h-screen md:w-full">
        <motion.section className='min-h-screen flex items-center justify-center font-amarante text-amber-200'
         initial={{ opacity: 0, y: 0 }}
         animate={{ opacity: 1, y: 50 }}
         transition={{ duration: 0.8 }}>
      {!isLoggedIn ? (
      <form onSubmit={handleLogin}>
      <div className='flex shadow-2xl'>
        <div className='flex flex-col items-center justify-center text-center md:p-20 p-6 gap-8 rounded-2xl bg-amber-900/60 xl:rounded-tr-none'>
          <h1 className='text-3xl'>Login</h1>
          <div className='flex flex-col text-xl text-left gap-1'>
        <span>Username</span>
        <input type="text" className='rounded-md p-1 border-2 outline-none focus:border-amber-400 focus:bg-amber-100 focus:text-amber-900'/>
          </div>

          <div className='flex flex-col text-xl text-left gap-1'>
        <span>Password</span>
        <input type="password" className='rounded-md p-1 border-2 outline-none focus:border-amber-400 focus:bg-amber-100 focus:text-amber-900'/>
        <div className='flex gap-1 items-center'>
          <input type="checkbox"/>
          <span className='text-base'>Remember password</span>
        </div>
          </div>
          <motion.button
                  className="h-[60px] md:w-[150px] w-[220px] m-1 cursor-pointer ml-9 rounded-[50px] bg-amber-600"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  type="submit"
                >
                  <Link to="/dashboard">Login</Link>
                </motion.button>
            <p className='font-semibold'>Don't have an account?<Link to="/register" className='hover:underline'>Register</Link></p>
         </div>
         <img src={loginimage} alt="" className='w-[350px] object-cover xl:rounded-tr-2xl xl:rounded-br-2xl xl:block hidden'/>
      </div>
      </form>
      ):(
<Dashboard/>

      )}
      </motion.section>  
      </div>
      </div>

  )
}

export default Login