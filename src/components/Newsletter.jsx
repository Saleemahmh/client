import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Newsletter = () => {
  return (
    <section className="bg-indigo-900/90 grid grid-cols-1 md:grid-cols-3 ml-35 p-8 gap-10 max-w-7xl mx-auto w-[90%] my-20 md:h-[200px] rounded-xl">
      <div className="flex flex-col items-center m-3 text-amber-200 font-amarante">
        <h1 className="text-xl md:text-4xl font-bold w-[80%] text-center">
          {" "}
          Ready to make the switch?
        </h1>
      </div>
      <div className="flex flex-col items-center m-3 text-amber-200 font-amarante">
        <p className="text-sm md:text-2xl text-center">
          {" "}
          Tailored support for your success. Kick off your next chapter—book a meetup with us now.
        </p>
      </div>
      <motion.button
        className="flex justify-center h-[60px] md:w-[200px] w-[220px] m-9 cursor-pointer rounded-[50px] bg-indigo-950"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link className="text-xl text-bold font-amarante mt-4 bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent" to="/register">Schedule A Meetup!</Link>
      </motion.button>
    </section>
  
  );
};

export default Newsletter;
