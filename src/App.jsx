import { useRef } from "react";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import HomePage from "./Components/Homepage";

function App() {
  const aboutRef = useRef(null);

  const scrollToAbout = () => {
    if (aboutRef.current) {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Added fixed positioning and z-50 to keep Navbar always on top */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar onAboutClick={scrollToAbout} />
      </div>
      {/* Add padding-top to prevent content from being hidden behind the fixed navbar */}
      <div className="pt-16">
        <HomePage />
        <div ref={aboutRef}>
          <About />
        </div>
      </div>
    </>
  );
}

export default App;