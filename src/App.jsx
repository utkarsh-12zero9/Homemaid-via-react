import { useRef } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Homepage";
import Services from "./Components/Services";

function App() {
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);

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
      {/* Navbar stays on top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar onAboutClick={scrollToAbout} onServicesClick={scrollToServices} />
      </div>
      {/* All content except Navbar: white bg and black text */}
      <div className="pt-16 bg-white text-black min-h-screen">
        <HomePage />
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={servicesRef}>
          <Services />
        </div>
      </div>
    </>
  );
}

export default App;