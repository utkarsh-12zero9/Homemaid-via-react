import { services, providers } from "../../services/api.js";
import Card from "../ui/Card.jsx";
import { useState } from "react";

function Services() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    providers.some((provider) =>
      provider.role.toLowerCase().includes(searchTerm.toLowerCase()) &&
      provider.role === service.title
    )
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-teal-800 font-poppins text-center mb-2">
        Our Services
      </h2>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mb-6">
        <div className="flex items-center w-full sm:w-1/2 mx-auto gap-2">
          <input
            type="text"
            placeholder="Search for your service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-3 rounded-lg border border-teal-200 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-300 font-poppins text-sm sm:text-base"
          />
          <button
            onClick={() => setSearchTerm("")}
            className="bg-teal-600 text-white px-4 py-2.5 rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-poppins text-sm sm:text-base cursor-pointer"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredServices.map((service) => (
            <Card key={service.id} item={service} type="service" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;