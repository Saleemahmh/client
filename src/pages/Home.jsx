import Hero from "../components/Hero";
import Newsletter from "../components/Newsletter";
import Features from "../components/Features";
import { CiCalculator1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import Services from "../components/Services";
import PremiumServices from "../components/PremiumServices";
import Roadmap from "../components/Roadmap";
const Home = () => {
  return (
    <div>
      {/*    Floating Calculator */}
      <button className="fixed bottom-6 z-999 right-15 bg-gradient-to-br from-blue-600 to-indigo-950 text-amber-200 p-4 rounded-full shadow-lg hover:scale-110 hover:rotate-12 transition-transform duration-300 ease-in-out">
        <Link to="">
          <CiCalculator1 className="size-8"></CiCalculator1>
        </Link>
      </button>
      <div
        className="
        fixed bottom-8 left-1/2 transform -translate-x-1/2 
        bg-transparent font-amarante text-indigo-900 
        w-[335px] md:w-[750px] lg:w-[50%] 
        z-50 transition-all duration-700 ease-out 
        "
      >
        <div className="flex flex-col md:flex-rows items-center justify-between text-center md:text-left px-6 py-5 rounded-xl bg-indigo-500/10 backdrop-blur-md shadow-md border border-indigo/20 gap-y-4 md:gap-x-6">
          <h1 className="text-sm md:block hidden sm:text-base md:text-lg lg:text-xl">
            Get Experts Advice to Setup Your Business in Dubai
          </h1>
          <button className="bg-indigo-950 rounded text-white w-28 sm:w-32 py-2 hover:bg-indigo-900 transition">
            Enquire Now!
          </button>
        </div>
      </div>
      <Hero />
      <Services />
      <Roadmap />
      <PremiumServices />
      <Newsletter />
    </div>
  );
};

export default Home;
