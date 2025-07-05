import { services, providers } from "../../services/api.js";
import Card from "../ui/Card.jsx";
import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
  const [searchTerm, setSearchTerm] = useState("");
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    providers.some((provider) =>
      provider.role.toLowerCase().includes(searchTerm.toLowerCase()) &&
      provider.role === service.title
    )
  );

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
  };
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.12 + 0.2, duration: 0.6, ease: "easeOut" }
    })
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-teal-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.h2
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={headerVariants}
        className="text-3xl sm:text-4xl font-extrabold font-poppins text-center mb-2 text-[#00246B] drop-shadow-lg"
      >
        Our Services
      </motion.h2>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mb-6">
        <div className="flex items-center w-full sm:w-1/2 mx-auto gap-2 glassmorphism p-2 rounded-xl shadow-lg">
          <input
            type="text"
            placeholder="Search for your service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-300 font-poppins text-sm sm:text-base bg-white/70 backdrop-blur-md placeholder:text-teal-400"
          />
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => setSearchTerm("")}
            className="bg-teal-600 text-white px-4 py-2.5 rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg font-poppins text-sm sm:text-base cursor-pointer border-2 border-teal-500 hover:border-teal-300"
          >
            Clear
          </motion.button>
        </div>
      </div>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          initial="hidden"
          animate={controls}
        >
          {filteredServices.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-full text-teal-700 text-lg font-semibold bg-white/70 rounded-xl p-6 shadow-md glassmorphism"
            >
              No services found.
            </motion.div>
          ) : (
            filteredServices.map((service, i) => (
              <motion.div
                key={service.id}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate={controls}
                className="w-full flex justify-center"
              >
                <Card item={service} type="service" />
              </motion.div>
            ))
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Services;