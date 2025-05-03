import React from 'react';
import { Link } from 'react-router-dom';
import {motion} from "framer-motion";

const Newsletter = () => {
  return (
    <div className='bg-amber-900/90 flex items-center w-full md:h-[150px] h-[100px] rounded'>
        <div className='flex items-center justify-center md:ml-100 m-3 text-amber-200 font-amarante'>
            
            <h1 className='md:text-2xl'> To book a free Consultation to clear all your queries!</h1>
            <motion.button
                  className="h-[60px] md:w-[150px] w-[220px] m-1 cursor-pointer ml-9 rounded-[50px] bg-amber-600"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to="/register">Click Here!</Link>
                </motion.button>

        </div>
    </div>
  )
}

export default Newsletter