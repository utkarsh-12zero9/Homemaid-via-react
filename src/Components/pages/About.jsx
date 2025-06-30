import { Link } from 'react-router-dom';
import maidsGroup from '../../assets/images/Maids_Group.png';

function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-blue-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 header-animation">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-teal-800 font-poppins mb-6">
            About HomeMaid
          </h1>
          <img
            src={maidsGroup}
            alt="HomeMaid Team"
            className="h-96 object-cover mx-auto rounded-lg mb-8 border-2 border-teal-200"
          />
          <p className="text-lg sm:text-xl font-poppins text-gray-700">
            HomeMaid is your go-to platform for reliable home services, connecting you with vetted maids, cooks, and more. Founded in 2025, we simplify life with trusted professionals across India. Offering daily support, culinary expertise, and transportation, our user-friendly platform ensures convenience and quality. Embrace a stress-free home with HomeMaid’s dependable services!
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl mb-12 transition-all duration-300 border border-teal-100">
          <h2 className="text-2xl font-bold text-teal-800 font-poppins mb-4">
            Our Mission
          </h2>
          <p className="text-gray-800 font-poppins mb-4">
            At HomeMaid, we’re committed to delivering exceptional home services with a focus on quality, affordability, and customer satisfaction. Our journey includes:
          </p>
          <ul className="list-disc list-inside text-gray-800 font-poppins space-y-2">
            <li>2025: Launched with 50 vetted providers in Ghaziabad.</li>
            <li>2026: Expand to 5 cities with 200+ professionals.</li>
            <li>2027: Aiming for nationwide coverage and 500+ providers.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold text-teal-800 font-poppins text-center mb-6">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-teal-100">
              <img
                src="https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg?w=360"
                alt="Shreya Jain"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-teal-200"
              />
              <h3 className="text-lg font-bold text-teal-800 font-poppins mb-2">
                Shreya Jain
              </h3>
              <p className="text-gray-600 font-poppins">Co-founder</p>
              <p className="text-gray-500 font-poppins text-sm">10+ years in service industry</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-teal-100">
              <img
                src="https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg?w=360"
                alt="Utkarsh Kumar Singh"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-teal-200"
              />
              <h3 className="text-lg font-bold text-teal-800 font-poppins mb-2">
                Utkarsh Kumar Singh
              </h3>
              <p className="text-gray-600 font-poppins">Co-founder & CEO</p>
              <p className="text-gray-500 font-poppins text-sm">10+ years in logistics</p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 text-center border border-teal-100">
              <img
                src="https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg?w=360"
                alt="Ujjawal Tyagi"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-teal-200"
              />
              <h3 className="text-lg font-bold text-teal-800 font-poppins mb-2">
                Ujjawal Tyagi
              </h3>
              <p className="text-gray-600 font-poppins">Customer Support Lead</p>
              <p className="text-gray-500 font-poppins text-sm">5 years in customer care</p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-block bg-teal-600 text-white p-3 rounded-lg font-poppins text-sm sm:text-base hover:bg-teal-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            Explore Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;