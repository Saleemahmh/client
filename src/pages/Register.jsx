import {motion} from "framer-motion";
import { Link } from 'react-router-dom';
import loginimage from '../assets/login2.jpg'
const Register = () => {
  return (
    <div className="bg-[url('/src/assets/login.jpg')] bg-cover bg-center h-screen md:w-full">
    <div className="bg-gradient-to-r from-black/70 to-transparent h-screen md:w-full">
      <motion.section className='min-h-screen flex items-center justify-center font-amarante text-amber-200'
       initial={{ opacity: 0, y: 0 }}
       animate={{ opacity: 1, y: 50 }}
       transition={{ duration: 0.8 }}>
    <div className='flex shadow-2xl'>
      <div className='flex flex-col items-center justify-center text-center md:p-20 p-6 gap-8 rounded-2xl bg-amber-900/60 xl:rounded-tr-none'>
        <h1 className='text-3xl'>Register</h1>
        <div className='flex flex-col text-xl text-left gap-1'>
      <span>Name</span>
      <input type="text" className='rounded-md p-1 border-2 outline-none focus:border-amber-400 focus:bg-amber-100'/>
        </div>
        <div className='flex flex-col text-xl text-left gap-1'>
      <span>Username</span>
      <input type="text" className='rounded-md p-1 border-2 outline-none focus:border-amber-400 focus:bg-amber-100'/>
        </div>
        <div className='flex flex-col text-xl text-left gap-1'>
      <span>Password</span>
      <input type="password" className='rounded-md p-1 border-2 outline-none focus:border-amber-400 focus:bg-amber-100'/>
        </div>
        <motion.button
                className="h-[60px] md:w-[150px] w-[220px] m-1 cursor-pointer ml-9 rounded-[50px] bg-amber-600"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Link to="/login">Register</Link>
              </motion.button>
          <p className='font-semibold'>Don't have an account?<Link to="/register" className='hover:underline'>Register</Link></p>
       </div>
       <img src={loginimage} alt="" className='w-[350px] object-cover xl:rounded-tr-2xl xl:rounded-br-2xl xl:block hidden'/>
    </div>

    </motion.section>  
    </div>
    </div>
  )
}

export default Register