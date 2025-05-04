
import { useState } from "react";
import {Link} from "react-router-dom"
import { motion } from "framer-motion";
import { BsChevronCompactDown } from "react-icons/bs";
import { IoMenu ,IoClose} from "react-icons/io5";

export default function MobNav({ Menus }) {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      opacity: 1,
      overflow: "hidden",
    },
    exit: {
      height: 0,
      opacity: 0,
      overflow: "hidden",
    },
  };

  return (
    <div>
      <button className="lg:hidden z-50 mt-2 ml-2 relative" onClick={toggleDrawer}>
        {isOpen ? <IoClose /> : <IoMenu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 bottom-0 top-16 overflow-y-auto bg-amber-950/90 h-screen backdrop-blur text-amber-200 p-6 pb-20"
        initial={{ x: "-120%" }}
        animate={{ x: isOpen ? "0%" : "-120%" }}
        transition={{ type: "tween", duration: 0.3 }}
      >
        <ul className="flex flex-col gap-1">
          {Menus.map(({ name, subMenu,link }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className="">
                <span
                  className="flex-center-between p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => setClicked(isClicked ? null : i)}
                >
                  <Link to={link}>{name}</Link>
                  {hasSubMenu && (
                    <BsChevronCompactDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </span>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon ,link }) => (
                      <li
                        key={name}
                        className="p-2 flex-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                      >
                        <Icon size={17} />
                        <Link to={link}>{name}</Link>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
}