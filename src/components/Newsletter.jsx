import React, {useState}from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


const Newsletter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: ''
  });

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you can send `formData` to a backend service.
    toggleModal();
  };
  return (
    <section className="bg-indigo-900/90 grid grid-cols-1 md:grid-cols-3 ml-35 p-8 gap-10 max-w-7xl mx-auto w-[90%] my-20 md:h-[200px] rounded-xl">
      <div className="flex flex-col items-center m-3 text-amber-200 font-amarante">
        <h1 className="text-xl md:text-4xl font-bold w-[80%] text-center">
          {" "}
          Ready to make the switch?
        </h1>
      </div>
      <div className="flex flex-col items-center m-3 text-amber-200 font-amarante">
        <p className="text-sm md:text-2xl text-center">
          {" "}
          Tailored support for your success. Kick off your next chapter—book a meetup with us now.
        </p>
      </div>
      <motion.button
        className="flex justify-center h-[60px] md:w-[200px] w-[220px] m-9 cursor-pointer rounded-[50px] bg-indigo-950"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        onClick={toggleModal}
      >
        <Link  className="text-xl text-bold font-amarante mt-4 bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">Schedule A Meetup!</Link>
      </motion.button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-indigo-950/70 bg-opacity-50">
          <div className="bg-indigo-100/70 rounded-2xl shadow-xl w-full max-w-md sm:max-w-lg p-6 sm:p-8 md:p-10 relative">
            <h2 className="text-xl font-amarante font-semibold mb-4 text-indigo-950">Schedule a Meetup!</h2>

            {/* Close Button */}
            <button
              onClick={toggleModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
            >
              &times;
            </button>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-md font-amarante font-medium text-indigo-950">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-md font-amarante font-medium text-indigo-950">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-md font-amarante font-medium text-indigo-950">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-md font-amarante font-medium text-indigo-950">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="mt-1 w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
             
              <div className="pt-4">
              <motion.button
        className="flex justify-center h-[60px] md:w-[250px] w-[220px] mx-20 cursor-pointer rounded-[50px] bg-indigo-950"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        type="submit"
      >
        <Link  className="text-xl text-bold font-amarante mt-4 bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-300 bg-clip-text text-transparent">Confirm Appointement</Link>
      </motion.button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  
  );
};

export default Newsletter;

