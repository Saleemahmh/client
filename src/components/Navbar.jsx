import MegaNav from "./MegaNav";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png";
import { Menus } from "../Menudata";
import { TbBrandGravatar } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import MobNav from "./MobNav";
const Navbar = () => {
return(
    <>
<nav className="bg-transparent font-amarante text-amber-200 fixed md:w-full w-[335px] md:ml-0 ml-1 mt-5 top-0 z-50">
    <div className="grid grid-cols-[auto_1fr_auto]  max-w-7xl mx-auto items-center px-6 py-3 rounded-xl bg-white/10 backdrop-blur-md shadow-md border border-white/20">
    <img className="flex items-center md:size-8 md:ml-0 ml-0 size-6" src={Logo} alt="logo"/>
      <div className="hidden lg:flex justify-center gap-5 ">
      {Menus.map((menu) => (
              <MegaNav menu={menu} key={menu.name} />
            ))}
      </div>
      <div className="flex md:gap-2 justify-end items-center">
        <Link to="/login" className="flex-center gap-1 md:inline hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl"><TbBrandGravatar></TbBrandGravatar></Link>
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
