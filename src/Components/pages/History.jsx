import { useContext } from 'react';
import { LoginContext } from '../../App';
import { Link } from 'react-router-dom';

function History() {
  const { bookings } = useContext(LoginContext);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Booking History</h1>
        <ul className="space-y-4">
          {bookings
            .filter((booking) => {
              const bookingDate = new Date(booking.date);
              bookingDate.setHours(0, 0, 0, 0);
              return bookingDate < today;
            })
            .map((booking) => (
              <li key={booking.id} className="p-4 bg-white rounded-lg shadow flex justify-between min-gap-4">
                <p>{booking.service} by {booking.provider} on {booking.date}</p>
                <span
                  className="px-3 py-1 rounded-full text-sm font-medium mr-2 bg-green-200 text-green-800 hover:bg-green-300"
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
          }).length === 0 && <p>No past bookings.</p>}
        </ul>
        <p className="mt-4">
          <Link to="/user-dashboard" className="text-blue-500 hover:underline">Back to Dashboard</Link>
        </p>
      </div>
    </div>
  );
}

export default History;