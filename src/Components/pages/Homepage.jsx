import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { providers } from "../../services/api";
import Card from "../ui/Card";
import FrontMaid from "../../assets/icons/FrontMaid.jpg";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";

const testimonials = [
    {
        quote: "HomeMaid made my life so easy! The cook they sent was amazing, and booking was a breeze.",
        name: "Ravi Sharma, Homeowner",
    },
    {
        quote: "Reliable maids and great support. Highly recommend for anyone needing home help!",
        name: "Priya Patel, Working Mom",
    },
    {
        quote: "The cleaning service was top-notch, and the process was so simple. Will use again!",
        name: "Amit Verma, Busy Professional",
    },
    {
        quote: "Fantastic experience with the laundry service—quick and efficient!",
        name: "Neha Gupta, Student",
    },
    {
        quote: "The dusting team was thorough and friendly—highly satisfied!",
        name: "Sanjay Kumar, Office Worker",
    },
    {
        quote: "Booking a maid was seamless, and the service exceeded my expectations!",
        name: "Anjali Desai, Retiree",
    },
    {
        quote: "Great value for money—my home feels spotless after every visit!",
        name: "Vikram Singh, Entrepreneur",
    },
];

function Homepage() {
    const heroRef = useRef();
    const providersRef = useRef();
    const testimonialsRef = useRef();

    // Framer Motion inView hooks
    const heroInView = useInView(heroRef, { once: true, margin: "-100px" });
    const providersInView = useInView(providersRef, { once: true, margin: "-100px" });
    const testimonialsInView = useInView(testimonialsRef, { once: true, margin: "-100px" });

    useEffect(() => {
        gsap.from(heroRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            ease: "power3.out",
        });
        gsap.from(providersRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.3,
            ease: "power3.out",
        });
        gsap.from(testimonialsRef.current, {
            opacity: 0,
            y: 40,
            duration: 1,
            delay: 0.6,
            ease: "power3.out",
        });
    }, []);

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#e0e7ff] via-[#f0fdfa] to-[#d1fae5]">
            {/* Hero Section */}
            <section
                ref={heroRef}
                className="bg-gradient-to-br from-[#00246B] via-[#2541B2] to-[#10B981] min-h-[80vh] text-white py-20 px-4 sm:px-8 lg:px-16 flex items-center"
            >
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center w-full">
                    <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.8 }}
                            className="text-4xl sm:text-6xl font-extrabold font-poppins mb-6 tracking-tight drop-shadow-lg"
                        >
                            Welcome to{" "}
                            <span className="text-[#10B981]">HomeMaid</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="text-lg sm:text-2xl font-poppins text-gray-200 mb-8 max-w-xl"
                        >
                            Your trusted platform for home services – book maids, cooks, and more!
                            Enjoy reliable, vetted providers, a wide range of tasks, and hassle-free
                            booking from the comfort of home.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={heroInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 1, delay: 0.4 }}
                        >
                            <Link
                                to="/services"
                                className="inline-block bg-gradient-to-r from-[#10B981] to-[#2541B2] text-white font-bold py-3 px-8 rounded-full shadow-lg hover:from-[#2541B2] hover:to-[#10B981] hover:scale-105 transition-all text-lg"
                            >
                                Explore Services
                            </Link>
                        </motion.div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={heroInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ duration: 1, delay: 0.3 }}
                            src={FrontMaid}
                            alt="HomeMaid Services"
                            className="w-full max-w-md h-[350px] sm:h-[400px] md:h-[450px] object-contain rounded-3xl shadow-2xl border-4 border-white/30 bg-white/10 backdrop-blur-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Providers Section */}
            <section
                ref={providersRef}
                className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-[#f0fdfa] to-[#e0e7ff]"
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#00246B] font-poppins text-center mb-12 tracking-wide">
                    Meet Our Top Providers
                </h2>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 place-items-center">
                        {providers.map((provider, idx) => (
                            <motion.div
                                key={provider.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={providersInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: idx * 0.1 }}
                                className="w-full flex justify-center"
                            >
                                <Card item={provider} type="provider" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section
                ref={testimonialsRef}
                className="py-16 px-4 sm:px-8 lg:px-16 bg-gradient-to-br from-[#d1fae5] to-[#e0e7ff]"
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10B981] font-poppins text-center mb-12 tracking-wide">
                    What Our Customers Say
                </h2>
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {testimonials.map((t, idx) => (
                            <motion.div
                                key={t.name}
                                initial={{ opacity: 0, y: 30 }}
                                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.7, delay: idx * 0.1 }}
                                className="bg-white/80 backdrop-blur-lg p-8 rounded-2xl shadow-2xl border border-[#10B981]/20"
                            >
                                <p className="text-gray-700 font-poppins italic mb-4 text-lg leading-relaxed">{`"${t.quote}"`}</p>
                                <p className="font-bold text-[#00246B] font-poppins text-right">
                                    {t.name}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Homepage;
