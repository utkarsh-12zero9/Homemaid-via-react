import { useContext } from 'react';
import { LoginContext } from '../../App';
import { Link } from 'react-router-dom';

function History() {
  const { bookings } = useContext(LoginContext);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-extrabold text-teal-800 mb-6 animate-pulse">Booking History</h1>
        <ul className="space-y-4">
          {bookings
            .filter((booking) => {
              const bookingDate = new Date(booking.date);
              bookingDate.setHours(0, 0, 0, 0);
              return bookingDate < today;
            })
            .map((booking) => (
              <li key={booking.id} className="p-4 bg-white rounded-2xl shadow-xl hover:shadow-2xl flex justify-between items-center min-gap-4 transition-all duration-300 border border-teal-100">
                <p className="text-gray-700 font-poppins">{booking.service} by {booking.provider} on {booking.date}</p>
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium mr-2 bg-green-200 text-green-800 hover:bg-green-300 transition-all"
                  aria-label={`Toggle ${booking.service} status to ${booking.status === "completed" ? "active" : "completed"}`}
                >
                  completed
                </span>
              </li>
            ))}
          {bookings.filter((booking) => {
            const bookingDate = new Date(booking.date);
            bookingDate.setHours(0, 0, 0, 0);
            return bookingDate < today;
          }).length === 0 && <p className="text-gray-600 font-poppins text-center">No past bookings.</p>}
        </ul>
        <p className="mt-4 text-center">
          <Link to="/user-dashboard" className="text-teal-600 font-medium hover:text-teal-800 underline transition-colors">Back to Dashboard</Link>
        </p>
      </div>
    </div>
  );
}

export default History;