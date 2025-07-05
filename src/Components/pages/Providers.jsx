import { Link } from 'react-router-dom';
import { useState, useRef } from 'react';
import { providers } from '../../services/api';
import Card from '../ui/Card';
import { motion, useInView } from 'framer-motion';

function Providers() {
    const [searchTerm, setSearchTerm] = useState('');
    const sectionRef = useRef();
    const inView = useInView(sectionRef, { once: true, margin: '-100px' });

    const filteredProviders = providers.filter((provider) =>
        provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        provider.role.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#d1fae5] py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    ref={sectionRef}
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-[#00246B] font-poppins mb-6 tracking-tight drop-shadow-lg">
                        Our Providers
                    </h1>
                    <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto mb-6">
                        <div className="max-w-xl mx-auto mt-4 flex gap-2">
                            <input
                                type="text"
                                placeholder="Search by name or role..."
                                className="w-full p-3 border border-[#10B981]/30 rounded-lg focus:ring-2 focus:ring-[#10B981] focus:border-[#10B981] transition-all duration-200 hover:border-[#10B981] font-poppins text-base bg-white/80 backdrop-blur-lg"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                            <motion.button
                                whileHover={{ scale: 1.07 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setSearchTerm("")}
                                className="bg-gradient-to-r from-[#10B981] to-[#2541B2] text-white px-4 py-2.5 rounded-lg hover:from-[#2541B2] hover:to-[#10B981] transition-all duration-300 shadow-md hover:shadow-lg font-poppins text-base cursor-pointer"
                            >
                                Clear
                            </motion.button>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
          justify-items-center"
                >
                    {filteredProviders.map((provider, idx) => (
                            <Card key={provider.id} item={provider} type="provider" />
                            
                    ))}
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-center mt-12"
                >
                    <Link
                        to="/booking"
                        className="inline-block bg-gradient-to-r from-[#10B981] to-[#2541B2] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-[#2541B2] hover:to-[#10B981] hover:scale-105 transition-all text-lg border-2 border-[#10B981]/30"
                    >
                        Book Service
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

export default Providers;