import React from 'react'
import { IoHome } from "react-icons/io5";
import { IoIosCompass } from "react-icons/io";
import { IoBusiness } from "react-icons/io5";
import { Link } from 'react-router-dom';
import {motion} from "framer-motion"
const Services = () => {
  return (
    <section id="changeColorTarget" className='max-w-10xl font-amarante text-indigo-950 mx-auto px-4 py-16 bg-indigo-50'>
        <div className='flex flex-col items-center'>
        <h1 className='text-3xl text-indigo-950'>Your Gateway to Dubai</h1>
        <p className='text-xl '>Discover the comprehensive services designed to make your transition to Dubai Seamless.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 ml-17 p-8 gap-1'>
        <motion.div className='bg-white w-[80%] border border-indigo-500/40 rounded-xl shadow-xl/20 hover:bg-indigo-950/80 hover:text-amber-100'
                 whileHover={{ scale: 1.1 }}
                 transition={{ type: "spring", stiffness: 200, damping: 8 }}>
                <div className='bg-indigo-950 w-fit m-4 p-2 text-amber-200 rounded '>
                    <IoHome></IoHome>
                </div>
                <h1 className='m-5 text-2xl'>Residency</h1>
                <p className='m-5'>Long-term residency options through various investment routes.</p>
                <Link className="p-8" to="/">Explore</Link>
            </motion.div>
            <motion.div className='bg-white  w-[80%]  border border-indigo-500/40 rounded-xl shadow-xl/20 hover:bg-indigo-950/80 items-center justify-between hover:text-amber-100'
                 whileHover={{ scale: 1.1 }}
                 transition={{ type: "spring", stiffness: 200, damping: 8 }}>
                <motion.div className='bg-indigo-950 w-fit m-4 p-2 text-amber-200 rounded '>
                    <IoBusiness></IoBusiness>
                </motion.div>
                <h1 className='m-5 text-2xl'>Business Setup</h1>
                <p className='m-5'>Long-term residency options through various investment routes.</p>
                <Link className="p-8" to="/">Explore</Link>
            </motion.div>
                <motion.div className='bg-white w-[80%] border border-indigo-500/40 rounded-xl shadow-xl/20 hover:bg-indigo-950/80 items-center justify-between hover:text-amber-100'
                 whileHover={{ scale: 1.1 }}
                 transition={{ type: "spring", stiffness: 200, damping: 8 }}>
                <div className='bg-indigo-950 w-fit m-4 p-2 text-amber-200 rounded '>
                    <IoIosCompass></IoIosCompass>
                </div>
                <h1 className='m-5 text-2xl'>Real Estate</h1>
                <p className='m-5'>Long-term residency options through various investment routes.</p>
                <Link className="p-8" to="/">Explore</Link>
            </motion.div>

        </div>

    </section>
    
  )
}

export default Services