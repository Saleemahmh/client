import { useState } from "react";
import { BsChevronCompactDown } from "react-icons/bs";
import {motion} from "framer-motion";
import { Link } from "react-router-dom";

const MegaNav = ({ menu }) => {
    const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
    const hasSubMenu = menu?.subMenu?.length;


  return (
    <motion.li
    className="group/link list-none "
    onHoverStart={() => {
      toggleHoverMenu();
    }}
    onHoverEnd={toggleHoverMenu}
    key={menu.name}
  >
    <span className="flex-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
      <Link to={menu.link}>{menu.name}</Link>
      {hasSubMenu && (
        <BsChevronCompactDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
      )}
    </span>
    {hasSubMenu && (
      <motion.div
        className="sub-menu bg-indigo-950/90 "
        initial="exit"
        animate={isHover ? "enter" : "exit"}
        variants={subMenuAnimate}
      >
        <div
          className={`grid gap-7 ${
            menu.gridCols === 3
              ? "grid-cols-3"
              : menu.gridCols === 2
              ? "grid-cols-2"
              : "grid-cols-1"
          }`}
        >
          {hasSubMenu &&
            menu.subMenu.map((submenu, i) => (
              <div className="relative" key={i}>
                {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                  <p className="text-sm mb-4 text-amber-500">
                    {menu?.subMenuHeading?.[i]}
                  </p>
                )}
                <div className="flex-center gap-x-4 group/menubox cursor-pointer ">
                  <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-amber-100 group-hover/menubox:text-indigo-800 duration-300">
                    {submenu.icon && <submenu.icon />}
                  </div>
                  <div>
                   <Link to={submenu.link} ><h6 className="font-semibold bg-gradient-to-r from-yellow-700 via-amber-200 to-yellow-300 bg-clip-text text-transparent">{submenu.name}</h6></Link>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </motion.div>
    )}
  </motion.li>
  );
};

export default MegaNav;
