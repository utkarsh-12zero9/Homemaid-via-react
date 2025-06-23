import { useRef } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Homepage";
import Login from "./Components/Login";
import cooking from "./assets/cooking.jpg";
import sweeping from "./assets/sweeping.jpg";
import laundry from "./assets/laundry.jpg";
import dusting from "./assets/dusting.jpg";
import dishWashing from "./assets/dishwashing.jpg";
import grocery from "./assets/grocery.jpg";
import Services from "./Components/Services";
import SignUp from "./Components/SignUp";

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

	const scrollToLogin = () => {
		if (loginRef.current) {
		  loginRef.current.scrollIntoView({ behavior: 'smooth' }); // Smoothly scroll to the Login component
		}
	};

	return (
		<>
			<div className="fixed top-0 left-0 w-full z-50">
				<Navbar onAboutClick={scrollToAbout} onServicesClick={scrollToServices} />
			</div>
			<div className="pt-16 bg-white text-black min-h-screen">
				<HomePage scrollToLogin={scrollToLogin}/>
				<div ref={aboutRef}>
					<About />
				</div>

				<div ref={servicesRef} className="pt-20 bg-white min-h-screen">
					<Services services={services} />
				</div>
			</div>
			<div ref={loginRef}><Login/></div>
			<div><SignUp/></div>
		</>
	);
}

export default App;