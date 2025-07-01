import { Link } from 'react-router-dom';
import { useState } from 'react';
import { providers } from '../../services/api';
import Card from '../ui/Card';

function Providers() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProviders = providers.filter((provider) =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 header-animation">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-teal-800 font-poppins ">
            Our Providers
          </h1>
          <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mb-6">
            <div className="max-w-xl mx-auto mt-4 flex gap-2" >
              <input
                type="text"
                placeholder="Search by name or role..."
                className="w-full p-3 border border-teal-200 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all duration-200 hover:border-teal-300 font-poppins text-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                onClick={() => setSearchTerm("")}
                className="bg-teal-600 text-white px-4 py-2.5 rounded-lg hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 font-poppins text-sm sm:text-base cursor-pointer"
              >
                Clear
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
          justify-items-center">
          {filteredProviders.map((provider) => (
            <Card key={provider.id} item={provider} type="provider" />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/booking"
            className="inline-block bg-teal-600 text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 border-2 border-teal-500 hover:border-teal-300"
          >
            Book Service
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Providers;