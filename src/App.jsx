import { useRef } from "react";

import { Routes, Route } from "react-router-dom";
import About from "./Components/pages/About";
import Navbar from "./Components/layout/Navbar";
import HomePage from "./Components/pages/Homepage";
import cooking from "./assets/images/cooking.jpg";
import sweeping from "./assets/images/sweeping.jpg";
import laundry from "./assets/images/laundry.jpg";
import dusting from "./assets/images/dusting.jpg";
import dishWashing from "./assets/images/dishwashing.jpg";
import grocery from "./assets/images/grocery.jpg";
import Services from "./Components/pages/Services";
import Login from "./Components/pages/Login";
import SignUp from "./Components/pages/SignUp";


function App() {
	const aboutRef = useRef(null);
	const servicesRef = useRef(null);
	const loginRef = useRef(null);

	const services = [
		{ id: 1, title: "Cooking", image: cooking },
		{ id: 2, title: "Sweeping and Mopping", image: sweeping },
		{ id: 3, title: "Laundry", image: laundry },
		{ id: 4, title: "Grocery Shopping", image: grocery },
		{ id: 5, title: "Dusting", image: dusting },
		{ id: 6, title: "Dish Washing", image: dishWashing }
	]

	const scrollToAbout = () => {
		if (aboutRef.current) {
			aboutRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	const scrollToServices = () => {
		if (servicesRef.current) {
			servicesRef.current.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<>
			<div className="fixed top-0 left-0 w-full z-50">
				<Navbar onAboutClick={scrollToAbout} onServicesClick={scrollToServices} />
			</div>
			<div className="pt-16 bg-white text-black min-h-screen">

				<Routes>
					<Route path="/" element={
						<>
							<HomePage />
							<div ref={aboutRef}>
								<About />
							</div>
							<div ref={servicesRef} className="pt-20 bg-white min-h-screen">
								<Services services={services} />
							</div>
						</>
					} />
					<Route path="/login" element={<Login />} />
					<Route path="/signup" element={<SignUp />} />
				</Routes>

			</div>
		</>
	);
}

export default App;