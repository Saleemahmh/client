import MegaNav from "./MegaNav";
import { Link } from "react-router-dom";
import { Menus } from "../data";
import { TbBrandGravatar } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import MobNav from "./MobNav";
import { useEffect, useState } from "react";
const Navbar = () => {
  {/* Implementing change color on scroll to a particular position of the webpage */}
  const [scrolled,setScrolled] = useState(false);
  useEffect(() =>{
      const handleScroll = () =>{
        const triggerY = document.getElementById("changeColorTarget")?.offsetTop || 100;
        setScrolled(window.scrollY > triggerY - 100);
      }
      window.addEventListener("scroll",handleScroll);
      return ()=> window.removeEventListener("scroll",handleScroll);
  },[])
return(
    <>
<nav className={`bg-transparent font-amarante text-amber-200 fixed lg:w-full md:w-[750px] w-[335px] md:ml-0 ml-1 mt-5 top-0 z-50 transition-colors duration-300 ${scrolled? "text-indigo-950" : "text-amber-200"}`}>
    <div className="grid grid-cols-[auto_1fr_auto]  max-w-7xl mx-auto items-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md shadow-md border border-white/20">
    <img className="flex items-center md:size-9 md:ml-0 ml-0 size-6" src="/src/assets/Logo.png" alt="logo"/>
      <div className="hidden lg:flex justify-center gap-5 ">
      {Menus.map((menu) => (
              <MegaNav menu={menu} key={menu.name} />
            ))}
      </div>
      <div className="flex lg:gap-2 justify-end items-center">
        <Link to="/login" className="flex-center gap-1 lg:inline hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl"><TbBrandGravatar></TbBrandGravatar></Link>
        <Link to="/register" className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl"><CgProfile></CgProfile></Link>
        </div>
        <div className="lg:hidden flex items-center">
              <MobNav Menus={Menus} />
            </div>
            
    </div>
  </nav>
 </>
);
};
export default Navbar;
