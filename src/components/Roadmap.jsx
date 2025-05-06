import React from "react";

const Roadmap = () => {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 p-20 font-amarante bg-indigo-900 ">
        <h1 className="text-2xl lg:text-4xl text-amber-200">Why Dubai is your Next Business Destination</h1>
      {/*roadmap*/}
      <div className="grid md:grid-cols-2 bg-white grid-rows-4 rounded-lg p-10">
        <div className="col-start-1 row-start-1 px-10 py-4 border-l-2 md:border-l-0 md:border-r-2 border-indigo-950 relative">
        <h1 className="font-bold text- text-lg">0%</h1>
        <p className="text-indigo-900">Corporate & Income Tax</p>
        <div className="size-3 bg-amber-400 rounded-full top-0 right-[-9px] absolute"></div>
        </div>
        <div className="md:col-start-2 row-start-2 px-10 py-4 border-l-2 md:m-[-2px] border-indigo-950 relative">
        <h1 className="font-bold text- text-lg">0%</h1>
        <p className="text-indigo-900">Corporate & Income Tax</p>
        <div className="size-3 bg-amber-400 rounded-full top-0 left-[-9px] absolute"></div>
        </div>
        <div className="col-start-1 row-start-3 px-10 py-4 border-l-2 md:border-l-0 md:border-r-2 border-indigo-950 relative">
        <h1 className="font-bold text- text-lg">8.5%</h1>
        <p className="text-indigo-900">Corporate & Income Tax</p>
        <div className="size-3 bg-amber-400 rounded-full top-0 right-[-9px] absolute"></div>
        </div>
        <div className="md:col-start-2 row-start-4 px-10 py-4 border-l-2 border-indigo-950 relative">
        <h1 className="font-bold text- text-lg">3 Days</h1>
        <p className="text-indigo-900">Corporate & Income Tax</p>
        <div className="size-3 bg-amber-400 rounded-full top-0 left-[-9px] absolute"></div>
        </div>
      </div>
     
      {/*card*/}
      <div></div>
    </section>
  );
};

export default Roadmap;
