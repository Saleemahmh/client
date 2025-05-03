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
    <div className="bg-[url('/src/assets/hero.jpg')] mask-b-from-60% mask-b-to-120% bg-cover bg-center h-screen md:w-full">
      <div className="bg-gradient-to-r from-black/50 to-transparent h-screen md:w-full">
        <div className="bg-gradient-to-l from-black/30 to-transparent h-screen md:w-full">
          <div className="bg-opacity-50 h-full md:w-full flex items-center md:items-start px-8">
            <motion.div
              className="flex flex-col-reverse lg:flex-row justify-start text-amber-50 md:ml-40 md:mb-80 md:mt-15 mt-0 font-amarante"
              animate={isDesktop? {y: 100} : {y:0} }
              transition={{ type: "spring", stiffness: 100 }}
            >
              <div>
                <h1 className="md:text-5xl text-center text-4xl font-bold max-w-xl">
                  Move to Dubai. Build Without Limits.
                </h1>
                <p className="text-lg mt-4 text-center max-w-md">
                  Home to entrepreneurs, visionaries, and dreamers — start your
                  next chapter in a city designed for success.
                </p>
                <motion.button
                  className="h-[60px] w-[200px] mt-4 cursor-pointer ml-9 rounded-[50px] bg-amber-700"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link to="/register">Register Now!</Link>
                </motion.button>
              </div>
              <motion.div
                className="w-full md:w-1/2 md:ml-50 mt-10 md:mt-0 flex justify-center md:justify-end"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <img
                  src="/assets/Hero_2.png"
                  alt="travel"
                  className="w-80 md:w-96 h-auto drop-shadow-xl"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
