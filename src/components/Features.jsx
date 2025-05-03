import React from "react";
import {motion} from "framer-motion"

const Features = () => {
  const features = [
    {
      icon: "🔍",
      title: "Find out what you need",
      description: "We present you a proposal and discuss nitty-gritty like",
    },
    {
      icon: "⚙️",
      title: "Work out the details",
      description: "Communication protocols apart from engagement models",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "Protocols apart from engage models, pricing billing",
    },
  ];
  return (
    <section className="max-w-10xl mx-auto px-4 py-16 bg-linear-65/40 from-amber-950 to-amber-800/90">
      <div className="text-center mb-12">
        <h2 className="text-3xl text-bold font-amarante text-amber-900 mb-4">
          How can we help you?
        </h2>
        <p className="text-amber-700">How can we help you?</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 mr-4 gap-8 rounded-xl bg-amber-100/10 backdrop-blur-md shadow-md border border-amber-800/20">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center font-amarante p-6"
          >
            <div
              className="w-24 h-24 rounded-full mb-6 flex items-center justify-center"
              style={{
                backgroundColor:
                  index === 0 ? "#F1EFFD" : index === 1 ? "#FFE7E7" : "#FFF3E4",
              }}
            >
              <div className="text-3xl">{feature.icon}</div>
            </div>
            <h3 className="text-2xl font-amarante font-medium mb-3">
              {feature.title}
            </h3>
            <p className="text-amber-500 font-amarante text-center">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <motion.button
          className="bg-amber-600 text-amber-200 font-amarante cursor-pointer px-8 py-3 rounded-[50px] font-medium hover:bg-amber-700 transition-colors relative"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          Become a Partner
          <div className="absolute -z-10 w-full h-full rounded-full bg-amber-600/30 blur-xl top-0 left-0"></div>
        </motion.button>
      </div>
    </section>
  );
};

export default Features;
