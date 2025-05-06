import React from 'react'
import Hero from '../components/Hero';
import Newsletter from '../components/Newsletter';
import Features from '../components/Features';
import { CiCalculator1 } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import PremiumServices from '../components/PremiumServices';
import Roadmap from '../components/Roadmap';
const Home = () => {
  return (
    <div>
   {/*    Floating Calculator */}
      <button className="fixed bottom-6 z-999 right-15 bg-gradient-to-br from-blue-600 to-indigo-950 text-amber-200 p-4 rounded-full shadow-lg hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out">
            <Link to=""><CiCalculator1 className="size-8"></CiCalculator1></Link>
      </button>
            <Hero/>
            <Services/>
            <Roadmap/>
            <Features/>
            <PremiumServices/>
          <Newsletter/>
    </div>
  )
}

export default Home