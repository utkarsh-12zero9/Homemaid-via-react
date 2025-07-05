import { Link } from 'react-router-dom';
import maidsGroup from '../../assets/images/Maids_Group.png';
import { motion } from 'framer-motion';

function About() {
  const team = [
    { name: "Shreya Jain", role: "Co-founder", experience: "10+ years in service industry", image: "https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg?w=360" },
    { name: "Utkarsh Kumar Singh", role: "Co-founder & CEO", experience: "10+ years in logistics", image: "https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg?w=360" },
    { name: "Ujjawal Tyagi", role: "Customer Support Lead", experience: "5 years in customer care", image: "https://img.freepik.com/premium-vector/user-icon-icon_1076610-59410.jpg?w=360" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#d1fae5] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00246B] font-poppins mb-6 tracking-tight drop-shadow-lg">About HomeMaid</h1>
          <img src={maidsGroup} alt="Team HomeMaid" className="h-72 sm:h-96 object-cover mx-auto rounded-2xl mb-8 border-4 border-[#10B981]/30 shadow-xl bg-white/30 backdrop-blur-lg" />
          <p className="text-lg sm:text-2xl font-poppins text-gray-700 max-w-3xl mx-auto">
            HomeMaid is your go-to platform for reliable home services, connecting you with vetted maids, cooks, and more. Founded in 2025, we simplify life with trusted professionals across India. Offering daily support, culinary expertise, and transportation, our user-friendly platform ensures convenience and quality. Embrace a stress-free home with HomeMaid’s dependable services!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl hover:shadow-2xl mb-12 transition-all border border-[#10B981]/20"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#10B981] font-poppins mb-4">Our Mission</h2>
          <p className="text-gray-800 font-poppins mb-4 text-base sm:text-lg">At HomeMaid, we’re committed to delivering exceptional home services with a focus on quality, affordability, and customer satisfaction. Our journey includes:</p>
          <ul className="list-disc list-inside text-gray-800 font-poppins space-y-2 text-base sm:text-lg">
            <li>2025: Launched with 50 vetted providers in Ghaziabad.</li>
            <li>2026: Expand to 5 cities with 200+ professionals.</li>
            <li>2027: Aiming for nationwide coverage and 500+ providers.</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#00246B] font-poppins text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all text-center border border-[#10B981]/10"
              >
                <img src={member.image} alt={member.name} className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-[#10B981]/30 object-cover bg-white/40" />
                <h3 className="text-xl font-semibold text-[#10B981] font-poppins mb-2">{member.name}</h3>
                <p className="text-gray-600 font-poppins mb-1 text-base">{member.role}</p>
                <p className="text-gray-500 font-poppins text-sm">{member.experience}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Link to="/services" className="inline-block bg-gradient-to-r from-[#10B981] to-[#2541B2] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-[#2541B2] hover:to-[#10B981] hover:scale-105 transition-all text-lg">
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default About;