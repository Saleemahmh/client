import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const Hero = () => {
    const [isDesktop, setDesktop]= useState(window.innerWidth >=1024);

    useEffect(() =>{
        const handleResize = () =>{
            setDesktop(window.innerWidth >= 1024);
        }
        window.addEventListener("resize",handleResize);
        return()=>window.removeEventListener("resize",handleResize);
    },[]);
    
  return (
    <div className="bg-[url('/src/assets/hero2.jpg')] bg-cover bg-center h-screen lg:h-[80%] md:w-full">
      <div className="bg-gradient-to-r from-black/70 to-transparent h-screen lg:h-[80%] md:w-full">
        <div className="bg-gradient-to-l from-black/50 to-transparent h-screen lg:h-[80%] md:w-full">
          <div className="bg-opacity-50 h-full md:w-full flex items-center md:items-start px-8">
            <motion.div
              className="flex flex-col-reverse lg:flex-row justify-start md:ml-40 md:mb-80 md:mt-15 mt-0 font-amarante"
              animate={isDesktop? {y: 100} : {y:0} }
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div>
                <h1 className="md:text-5xl text-center text-4xl font-bold max-w-xl bg-gradient-to-r from-yellow-900 via-amber-200 to-yellow-300 bg-clip-text text-transparent">
                  Switch To Dubai
                </h1>
                <p className="text-lg mt-4 text-center max-w-md bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">
                 Build your legacy in Dubai- where ambition is rewarded with full control, global reach, and an ecosystem built to propel business leaders towards success.
                </p>
                <motion.button
                  className="h-[60px] w-[200px] text-amber-200 mt-4 cursor-pointer ml-9 rounded-[50px] bg-indigo-950"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link className="text-xl font-bold bg-gradient-to-r from-yellow-900 via-amber-200 to-yellow-300 bg-clip-text text-transparent" to="/register">Start your Journey!</Link>
                  
                </motion.button>
                <motion.button
                  className="h-[60px] w-[230px] mt-4 text-amber-200 cursor-pointer ml-9 rounded-[50px] bg-indigo-950"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                   <Link className="text-xl font-bold bg-gradient-to-r from-yellow-900 via-amber-200 to-yellow-300 bg-clip-text text-transparent" to="/register">Book a Consultation.</Link>
                  
                </motion.button>
              </div>
             
            </motion.div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
