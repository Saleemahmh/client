import React from "react";
import { Link } from "react-router-dom";
import {motion} from "framer-motion"
import { BsChevronCompactLeft } from "react-icons/bs";
import { BsChevronCompactRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import businessimg from "../assets/business.png";
import visaimg from "../assets/visa1.png";
import bankimg from "../assets/bank.png";
import investmentimg from "../assets/investment.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const premiumServices = [
  {
    serviceName: "Business Setup",
    serviceIcon: businessimg,
    serviceDesc:
      "Complete incorporation service with license processing, office setup and legal documentation.",
    services: [
      "Company Registration",
      "License Procedure",
      "Legal Documentation",
      "Office Setup",
    ],
  },
  {
    serviceName: "Visa Services",
    serviceIcon: visaimg,
    serviceDesc:
      "Streamlined visa applications for entrepreneurs, employees and family members.",
    services: [
      "Business Owner Visa",
      "Family Residency",
      "Employee Sponsorship",
      "Visa Renewal Services",
    ],
  },
  {
    serviceName: "Bank Account Opening",
    serviceIcon: bankimg,
    serviceDesc:
      "Assistance with both corporate and personal banking solutions with leading UAE banks.",
    services: [
      "Corporate Accounts",
      "Personal Banking",
      "Multi-currency option",
      "Digital Banking Setup",
    ],
  },
  {
    serviceName: "Investment Packages",
    serviceIcon:investmentimg,
    serviceDesc:
      "Tailored investment opportunities in Dubai's thriving property and business sectors.",
    services: [
      "Real Estate investments",
      "Business Acquisition",
      "Joint Ventures",
      "Market Entry Strategy",
    ],
  },
  {
    serviceName: "Tax Advisory",
    serviceIcon: "/src/assets/tax.png",
    serviceDesc:
      "Expert guidance on tax structuring and compliance to cross-border operations.",
    services: [
      "Tax Planning",
      "Global Compliance",
      "Reporting systems",
      "Audit Support",
    ],
  },
];

const PremiumServices = () => {
  
  
  return (
    <section className="px-4 py-8 max-w-7xl mx-auto">
      <div className="text-center mb-12 font-amarante text-indigo-950">
        <h2 className="text-3xl font-bold  md:text-4xl mb-4">
          Our Premium Services
        </h2>
        <p className="text-xl lg:text-2xl">
          Comprehensive business solutions for tailored for Indian enterpreneurs
          expanding to Dubai.
        </p>
      </div>
      <motion.div className="w-[100%]"
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 1, y: 0 }}
       viewport={{ once: true, amount: 0.2 }} 
   transition={{ duration: 0.8, delay: 0.2 }}  >
        <Swiper
          spaceBetween={30}
          navigation={{
            nextEl: ".swiper-button-next-custom",
            prevEl: ".swiper-button-prev-custom",
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          modules={[Navigation]}
          className="min-h-[450px] w-full md:mb-12"
        >
         
          
            {premiumServices.map((premiumService, index) => (
              <SwiperSlide key={index}>
                <div className="flex items-center justify-center pt-15 w-[390px] h-[420px]">
                <div className="bg-indigo-950 text-amber-100 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 h-full flex flex-col justify-between text-center border border-gray-100 shadow-[0_4px_30px_rgba(245,158,11,0.5)] hover:scale-105">
                  <img
                    src={premiumService.serviceIcon}
                    alt={premiumService.serviceName}
                    className="w-20 h-20 object-contain mx-auto mb-4"
                  />
                  <h3 className="text-xl font-semibold text-amber-100 mb-2">
                    {premiumService.serviceName}
                  </h3>
                  <p className="text-amber-200 text-sm mb-4">
                    {premiumService.serviceDesc}
                  </p>
                  <ul className="grid grid-cols-2 gap-x-2 gap-y-1 text-sm text-amber-100 mt-2 mb-4 text-left text-sm text-amber-100 list-disc list-inside">
                    {premiumService.services.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                  <motion.button
        className="flex justify-center h-[45px] md:w-[160px] w-[220px] mx-18 cursor-pointer rounded-[50px] bg-gradient-to-r from-yellow-900 via-amber-200 to-yellow-300"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <Link className="text-xl text-bold font-amarante my-3 text-indigo-950" to="/register">Learn More</Link>
      </motion.button>
                </div>
                </div>
              </SwiperSlide>
                  ))}
        </Swiper>


{/*navigation button*/}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button className="swiper-button-prev-custom w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-indigo-950 hover:text-amber-200 transition-all duration-200 cursor-pointer" >
              <BsChevronCompactLeft className="size-6"></BsChevronCompactLeft>
            </button>
            <button className="swiper-button-next-custom w-12 h-12 border border-gray-200 rounded-xl flex items-center justify-center hover:bg-indigo-950 hover:text-amber-200 transition-all duration-200 cursor-pointer" >
              <BsChevronCompactRight className="size-6"></BsChevronCompactRight>
            </button>
          </div>
          </motion.div>
    </section>
  );
};

export default PremiumServices;
