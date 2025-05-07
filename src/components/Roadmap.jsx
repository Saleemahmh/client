import React from "react";
import {motion} from "framer-motion"
import { FcApproval } from "react-icons/fc";
const keyBenefits=[
    {
        name:"Strategic Location",
        desc:"4-hour flight from India with conections to global markets."
    },
    {
        name:"Residency Options",
        desc:"Golden Visa program for investors and entrepreneurs."
    },
    {
        name:"Banking Infrastructure",
        desc:"World-class banking with international connectivity."
    },
    {
        name:"Quality of Life",
        desc:"Top-tier education, healthcare, and safety standards."
    }
]
const Roadmap = () => {
  return (
    <>
    <h1 className="flex justify-center py-4 bg-indigo-900 text-2xl lg:text-4xl text-amber-200">
        Why Dubai is your Next Business Destination
    </h1>
   <section className="grid grid-cols-1 lg:grid-cols-2 gap-2 px-55 py-10 font-amarante bg-indigo-900 items-start">
  
      {/*card*/}
      <motion.div className="bg-indigo-100 w-[550px] rounded-xl border border-indigo-800 shadow-xl"
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.2 }} 
   transition={{ duration: 0.8, delay: 0.2 }}  
   >
        <img
          className="w-full h-64 rounded-t-xl"
          src="/src/assets/hero2.jpg"
          alt=""
        ></img>
        <div className="p-4">
          <h2 className="text-bold font amarante text-3xl">Key Benefits for Indian Entrepreneurs</h2>
          <ul className="space-y-4">
          {keyBenefits.map((benefits,index)=>(
            <li key={index}>
            <div className="flex items-center gap-2">
          <FcApproval className="size-7"></FcApproval>
          <h1 className="text-xl font-bold text-indigo-900">{benefits.name}</h1>
          </div>
          <p className="text-xl text-indigo-900">{benefits.desc}</p>
        </li>
        ))}          
        </ul>
        </div>
      </motion.div>

  
      {/*roadmap*/}
      <motion.div className="grid md:grid-cols-2 bg-white grid-rows-4 rounded-lg mt-6 p-6 lg:w-[550px] lg:h-[550px]"
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.2 }} 
   transition={{ duration: 0.8, delay: 0.2 }}  
   >
        
        <div className="col-start-1 row-start-1 px-2 py-4 border-l-2 md:border-l-0 md:border-r-2 border-indigo-800 relative">
          <div className="bg-indigo-100 rounded-xl border border-indigo-800 shadow-xl p-4">
            <h1 className="font-bold text- text-lg">0%</h1>
            <p className="text-indigo-900">Corporate & Income Tax</p>
          </div>
          <div className="hidden md:block size-3 bg-amber-400 rounded-full top-0 right-[-6px] absolute"></div>
          <div className="block md:hidden size-3 bg-amber-400 rounded-full top-0 left-[-6px] absolute"></div>
        </div>
        <div className="md:col-start-2 row-start-2 px-4 py-4 border-l-2 md:m-[-2px] border-indigo-800 relative">
          <div className="bg-indigo-100 rounded-xl border border-indigo-800 p-4 shadow-xl ">
            <h1 className="font-bold text- text-lg">100%</h1>
            <p className="text-indigo-900">Foreign Ownership</p>
          </div>
          <div className="size-3 bg-amber-400 rounded-full top-0 left-[-6px] absolute"></div>
        </div>
        <div className="col-start-1 row-start-3 px-2 py-4 border-l-2 md:border-l-0 md:border-r-2 border-indigo-800 relative">
          <div className="bg-indigo-100 rounded-xl border border-indigo-800 p-4 shadow-xl ">
            <h1 className="font-bold text- text-lg">8.5%</h1>
            <p className="text-indigo-900">Average ROI on Property</p>
          </div>
          <div className="hidden md:block size-3 bg-amber-400 rounded-full top-0 right-[-6px] absolute"></div>
          <div className="block md:hidden size-3 bg-amber-400 rounded-full top-0 left-[-6px] absolute"></div>
        </div>

        <div className="md:col-start-2 row-start-4 px-4 py-4 border-l-2 border-indigo-800 relative">
          <div className="bg-indigo-100 rounded-xl border border-indigo-800 p-4 shadow-xl ">
            <h1 className="font-bold text- text-lg">3 Days</h1>
            <p className="text-indigo-900">Business Setup Time</p>
          </div>

          <div className="size-3 bg-amber-400 rounded-full top-0 left-[-6px] absolute"></div>
        </div>
      </motion.div>
    </section>
    </>
  );
};

export default Roadmap;
