import { useContext } from 'react';
import { LoginContext } from '../../App';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function History() {
  const { bookings } = useContext(LoginContext);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // Animation variants
  const headerVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } }
  };
  const listVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.10 + 0.2, duration: 0.5, ease: 'easeOut' }
    })
  };

  const pastBookings = bookings.filter((booking) => {
    const bookingDate = new Date(booking.date);
    bookingDate.setHours(0, 0, 0, 0);
    return bookingDate < today;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-blue-100 to-teal-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-3xl sm:text-4xl font-extrabold font-poppins mb-8 text-center text-[#00246B] drop-shadow-lg"
          variants={headerVariants}
          initial="hidden"
          animate="visible"
        >
          Booking History
        </motion.h1>
        <ul className="space-y-4">
          {pastBookings.length > 0 ? pastBookings.map((booking, i) => (
            <motion.li
              key={booking.id}
              className="p-4 bg-white/80 glassmorphism rounded-2xl shadow-xl hover:shadow-2xl flex flex-col sm:flex-row justify-between items-center gap-4 transition-all duration-300 border border-teal-100 backdrop-blur-md"
              custom={i}
              variants={listVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="flex flex-col sm:flex-row items-center gap-2">
                <span className="text-teal-600 font-bold font-poppins text-base sm:text-lg">
                  {booking.service}
                </span>
                <span className="text-gray-500 font-poppins text-sm">by {booking.provider}</span>
                <span className="text-gray-500 font-poppins text-sm">on {booking.date}</span>
              </div>
              <span
                className="px-3 py-1 rounded-full text-sm font-medium bg-green-200 text-green-800 hover:bg-green-300 transition-all font-poppins"
                aria-label={`Toggle ${booking.service} status to ${booking.status === "completed" ? "active" : "completed"}`}
              >
                completed
              </span>
            </motion.li>
          )) : (
            <motion.p
              className="text-gray-600 font-poppins text-center mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              No past bookings.
            </motion.p>
          )}
        </ul>
        <p className="mt-8 text-center">
          <Link to="/user-dashboard" className="inline-block bg-gradient-to-r from-teal-600 via-blue-500 to-teal-400 text-white px-6 py-2 rounded-lg font-poppins font-semibold hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg border-2 border-teal-500 hover:border-teal-300">
            Back to Dashboard
          </Link>
        </p>
      </div>
    </div>
  );
}

export default History;