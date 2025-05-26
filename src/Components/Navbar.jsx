function Navbar({ onAboutClick, onServicesClick }) {
  return (
    <>
      <header className="bg-[#00246B]">
        <div className="mx-auto max-w-screen-xl">
          <div className="flex h-16 items-center">
            <div className="flex-1 md:gap-12 flex items-center">
              <img
                src="Logo_homemaid.png"
                className="h-15 w-60"
                alt="homeMaid"
              />
            </div>

            <div className="md:flex md:items-center md:gap-12 text-gray-900 dark:text-white">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  
                  <li>
                    <a
                      className="text-white transition hover:text-white/75 hover:font-bold :text-white"
                      href="#"
                    >
                      Home
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75 hover:font-bold :text-white"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onAboutClick) onAboutClick();
                      }}
                    >
                      About
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75 hover:font-bold :text-white"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        if (onServicesClick) onServicesClick();
                      }}
                    >
                      Services
                    </a>
                  </li>

                  <li>
                    <a
                      className="text-white transition hover:text-white/75 hover:font-bold :text-white"
                      href="#"
                    >
                      Contact Us
                    </a>
                  </li>

                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
