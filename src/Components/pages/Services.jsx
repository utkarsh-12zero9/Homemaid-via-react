import { services, providers } from "../../services/api.js";
import ServiceCard from "../ui/ServiceCard.jsx";
import { useState } from "react";

// Services component: Display services with search bar to filter by name
function Services() {
  const [searchTerm, setSearchTerm] = useState("");

  // Filter services based on title or provider role
  const filteredServices = services.filter((service) =>
    service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    providers.some((provider) =>
      provider.role.toLowerCase().includes(searchTerm.toLowerCase()) &&
      provider.role === service.title
    )
  );

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-[#00246B] font-poppins text-center mb-10">
        Our Services
      </h2>
      {/* Search Bar */}
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mb-6">
        <div className="flex items-center w-full sm:w-1/2 mx-auto gap-1">
          <input
            type="text"
            placeholder="Search for your service..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 ring-[#10B981] font-poppins text-sm sm:text-base"
          />
          <button
            onClick={() => setSearchTerm("")}
            className="bg-[#10B981] text-white px-4 py-2.5 rounded-md hover:bg-emerald-500 transition-colors font-poppins text-sm sm:text-base"
          >
            Clear
          </button>
        </div>
      </div>
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;