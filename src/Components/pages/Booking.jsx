import { useContext, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../App';
import { MapContainer, TileLayer, Marker, useMap, Popup } from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import { GeoSearchControl, OpenStreetMapProvider } from 'leaflet-geosearch';
import L from 'leaflet';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function Booking() {
  const { isLoggedIn, user, bookings, setBookings } = useContext(LoginContext);
  const navigate = useNavigate();
  const [booking, setBooking] = useState({
    name: "",
    phone: "",
    service: "",
    date: "",
    location: [20.5937, 78.9629], // India center
    provider: "",
    status: "pending",
  });
  const [message, setMessage] = useState("");
  const services = ["Cooking", "Laundry", "Cleaning", "Gardening"];
  const providers = ["Amit Sharma", "Priya Patel", "Ravi Kumar", "Sneha Gupta"];
  const mapRef = useRef();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      setBooking({
        name: user?.name || "Shreya Jain",
        phone: user?.phone || "9876543210",
        service: "",
        date: "",
        location: [20.5937, 78.9629],
        provider: "",
        status: "pending",
      });
    }
  }, [isLoggedIn, navigate, user]);

  function AddGeoSearch() {
    const map = useMap();
    useEffect(() => {
      const provider = new OpenStreetMapProvider({
        params: { countrycodes: 'in' },
      });
      const searchControl = new GeoSearchControl({
        provider,
        style: 'bar',
        showMarker: true,
        autoClose: true,
        searchLabel: 'Enter Indian location',
        keepResult: true,
      });

      map.addControl(searchControl);
      return () => map.removeControl(searchControl);
    }, [map]);

    return null;
  }

  const handleLocationChange = (e) => {
    const { lat, lng } = e.target.getLatLng();
    const indiaBounds = L.latLngBounds(
      L.latLng(6.4627, 68.1097),
      L.latLng(35.6741, 97.3956)
    );
    if (indiaBounds.contains([lat, lng])) {
      setBooking((prev) => ({ ...prev, location: [lat, lng] }));
    } else {
      toast.error("Please select a location within India.", {
        position: "top-right",
        autoClose: 3000,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!booking.service || !booking.date || !booking.location || !booking.provider) {
      setMessage("Please fill all fields.");
      return;
    }
    const newBooking = { ...booking, id: Date.now(), status: "pending" }; // Explicitly set pending
    setBookings((prev) => {
      const updatedBookings = [...prev, newBooking];
      return updatedBookings;
    });
    toast.success(`Booking confirmed for ${booking.service} on ${booking.date} at [${booking.location}] with ${booking.provider}!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    setMessage("");
    setBooking({ ...booking, service: "", date: "", provider: "" });
  };

  return (
    <div className="min-h-screen g-gradient-to-br from-teal-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8" role="main" aria-label="Booking Page">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#00246B] font-poppins mb-4">
            Book a Service
          </h1>
          {message && <p className="text-lg font-poppins text-red-600 mb-4">{message}</p>}
        </div>

        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-poppins text-gray-700 mb-2">Name</label>
              <input
                type="text"
                value={booking.name}
                onChange={(e) => setBooking({ ...booking, name: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg font-poppins focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all bg-gray-100"
                placeholder="Name"
                aria-label="Name"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-poppins text-gray-700 mb-2">Phone</label>
              <input
                type="tel"
                value={booking.phone}
                onChange={(e) => setBooking({ ...booking, phone: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg font-poppins focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all bg-gray-100"
                placeholder="Phone"
                aria-label="Phone"
                readOnly
              />
            </div>
            <div>
              <label className="block text-sm font-poppins text-gray-700 mb-2">Service</label>
              <select
                value={booking.service}
                onChange={(e) => setBooking({ ...booking, service: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg font-poppins focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all"
                aria-label="Service"
                required
              >
                <option value="">Select a service</option>
                {services.map((service) => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-poppins text-gray-700 mb-2">Date</label>
              <input
                type="date"
                value={booking.date}
                onChange={(e) => setBooking({ ...booking, date: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg font-poppins focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all"
                aria-label="Date"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-poppins text-gray-700 mb-2">Select Provider</label>
              <select
                value={booking.provider}
                onChange={(e) => setBooking({ ...booking, provider: e.target.value })}
                className="w-full p-3 border border-gray-300 rounded-lg font-poppins focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all"
                aria-label="Provider"
                required
              >
                <option value="">Select a provider</option>
                {providers.map((provider) => (
                  <option key={provider} value={provider}>{provider}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-poppins text-gray-700 mb-2">Location</label>
              <MapContainer
                center={booking.location}
                zoom={5}
                style={{ height: "300px", width: "100%" }}
                maxBounds={L.latLngBounds(
                  L.latLng(6.4627, 68.1097),
                  L.latLng(35.6741, 97.3956)
                )}
                maxBoundsViscosity={1.0}
                ref={mapRef}
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={booking.location} draggable={true} eventHandlers={{ dragend: handleLocationChange }}>
                  <Popup>You are here</Popup>
                </Marker>
                <AddGeoSearch />
              </MapContainer>
              <input
                type="text"
                value={booking.location.join(", ")}
                readOnly
                className="w-full p-3 border border-gray-300 rounded-lg font-poppins bg-gray-100 mt-2"
                aria-label="Selected Location"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-[#1f3e7b] text-white p-3 rounded-lg font-poppins text-lg font-semibold hover:bg-[#00246B] transition-all shadow-md hover:shadow-lg cursor-pointer"
              aria-label="Submit booking"
            >
              Book Now
            </button>
            <button
              onClick={() => window.history.back()}
              className="w-full bg-gray-500 text-white p-3 rounded-lg font-poppins text-lg font-semibold hover:bg-gray-600 transition-all shadow-md hover:shadow-lg cursor-pointer mt-4"
              aria-label="Go back to previous page"
            >
              Go Back
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Booking;