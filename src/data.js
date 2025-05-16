import { MdOutlineKeyboardCommandKey } from "react-icons/md";
import { FiBook } from "react-icons/fi";
import { GiMoneyStack } from "react-icons/gi";
import { TbChartBarPopular } from "react-icons/tb";
import { AiOutlineBuild } from "react-icons/ai";
import { FaWpforms } from "react-icons/fa6";
import { BiChalkboard } from "react-icons/bi";
import { PiDatabaseDuotone } from "react-icons/pi";
import { TfiShoppingCartFull } from "react-icons/tfi";
import { RiMapPinUserFill } from "react-icons/ri";
import { LuBellDot } from "react-icons/lu";
import { RiVipCrown2Line } from "react-icons/ri";
import { LuCircleHelp } from "react-icons/lu";
import { TbMessageCircleDollar } from "react-icons/tb";
import { LuTriangleAlert } from "react-icons/lu";
import { GiCommercialAirplane } from "react-icons/gi";
import { LiaIndustrySolid } from "react-icons/lia";
import { CgWebsite } from "react-icons/cg";
import { FaCreativeCommonsShare } from "react-icons/fa";
import { RiMentalHealthLine } from "react-icons/ri";
import { IoDocumentAttachOutline } from "react-icons/io5";
import { BsFiletypeDoc } from "react-icons/bs";
import { IoIosTimer } from "react-icons/io";
import { TbCalendarTime } from "react-icons/tb";
import { FaWhatsapp } from "react-icons/fa";
import { LiaBookReaderSolid } from "react-icons/lia";
export const Menus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Business Setup",
    subMenuHeading: ["Mainland", "Free Zone", "Offshore"],
    subMenu: [
      {
        name: "Overview",
        link: "/pagenotfound",
        icon: MdOutlineKeyboardCommandKey,
      },
      {
        name: "Requirement",
        link: "/pagenotfound",
        icon: FiBook,
      },
      {
        name: "Cost Estimate",
        link: "/pagenotfound",
        icon: GiMoneyStack,
      },
      {
        name: "Popular Zones",
        link: "/pagenotfound",
        icon: TbChartBarPopular,
      },
      {
        name: "Benefits",
        link: "/pagenotfound",
        icon: AiOutlineBuild,
      },
      {
        name: "Application Process",
        link: "/pagenotfound",
        icon: FaWpforms,
      },

      {
        name: "Use Cases",
        link: "/pagenotfound",
        icon: BiChalkboard,
      },
      {
        name: "Setup Steps",
        link: "/pagenotfound",
        icon: PiDatabaseDuotone,
      },
    ],
    gridCols: 3,
  },
  {
    name: "Visa Options",
    subMenu: [
      {
        name: "Investor Visa",
        link: "/investorvisa",
        icon: TfiShoppingCartFull,
      },
      {
        name: " Partner Visa",
        link: "/partnervisa",
        icon: RiMapPinUserFill,
      },
      {
        name: "Freelancer Visa",
        link: "/freelancervisa",
        icon: LuBellDot,
      },
      {
        name: "Golden Visa",
        link: "/goldenvisa",
        icon: RiVipCrown2Line,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Pricing",
    subMenu: [
      {
        name: "Cost Calculator",
        link: "/calculatorhub",
        icon: LuCircleHelp,
      },
      {
        name: "Package Comparison",
        link: "/pagenotfound",
        icon: TbMessageCircleDollar,
      },
      {
        name: "Custom Quote Form",
        link: "/pagenotfound",
        icon: LuTriangleAlert,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Activities",
    subMenu: [
      {
        name: "Commercial",
        link: "/pagenotfound",
        icon: GiCommercialAirplane,
      },
      {
        name: "Professional",
        link: "/pagenotfound",
        icon: RiVipCrown2Line,
      },
      {
        name: "Industrial",
        link: "/pagenotfound",
        icon: LiaIndustrySolid,
      },
      {
        name: "E-commerce",
        link: "/pagenotfound",
        icon: CgWebsite,
      },
      {
        name: "Media & Creative",
        link: "/pagenotfound",
        icon: FaCreativeCommonsShare,
      },
      {
        name: "Health & Wellness",
        link: "/pagenotfound",
        icon: RiMentalHealthLine,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Contact Us",
    subMenu: [
      {
        name: "Quick Inquiry Form",
        link: "/pagenotfound",
        icon: FiBook,
      },
      {
        name: "WhatsApp Chat",
        link: "/pagenotfound",
        icon: FaWhatsapp,
      },
      {
        name: "Book a Free Consultation",
        link: "/pagenotfound",
        icon: LiaBookReaderSolid,
      },
    ],
    gridCols: 1,
  },
  {
    name: "FAQ",
    subMenu: [
      {
        name: "Ownership Rules",
        link: "/pagenotfound",
        icon: IoDocumentAttachOutline,
      },
      {
        name: " Office Requirements",
        link: "/pagenotfound",
        icon: BsFiletypeDoc,
      },
      {
        name: "Timeline",
        link: "/pagenotfound",
        icon: IoIosTimer,
      },
      {
        name: "Tax & Compliance",
        link: "/pagenotfound",
        icon: TbCalendarTime,
      },
    ],
    gridCols: 1,
  },
];
