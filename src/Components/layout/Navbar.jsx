import { useState } from "react";

function Navbar({ onAboutClick, onServicesClick }) {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<>
			<header className="bg-[#00246B]">
				<div className="mx-auto max-w-screen-xl pr-4">
					<div className="flex h-16 items-center justify-between">
						<div className="flex-1 md:gap-12 flex items-center">
							<img
								src="../src/assets/icons/Logo_Homemaid.png"
								className="h-15 w-60"
								alt="homeMaid"
							/>
						</div>

						{/* Hamburger menu for mobile */}
						<div className="md:hidden flex items-center">
							<button
								onClick={() => setMenuOpen(!menuOpen)}
								className="text-white focus:outline-none"
								aria-label="Toggle menu"
							>
								<svg
									className="w-8 h-8"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									xmlns="http://www.w3.org/2000/svg"
								>
									{menuOpen ? (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									) : (
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									)}
								</svg>
							</button>
						</div>

						<div className="md:flex md:items-center md:gap-12 text-gray-900 dark:text-white">
							<nav aria-label="Global" className="hidden md:block">
								<ul className="flex items-center gap-6 text-sm">
									<li>
										<a
											className="text-white transition hover:text-white/75 hover:font-bold"
											href="#"
										>
											Home
										</a>
									</li>

									<li>
										<a
											className="text-white transition hover:text-white/75 hover:font-bold"
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
											className="text-white transition hover:text-white/75 hover:font-bold"
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
											className="text-white transition hover:text-white/75 hover:font-bold"
											href="#"
										>
											Contact Us
										</a>
									</li>
									<li>
										
									</li>
								</ul>
							</nav>
						</div>
					</div>

					{/* Mobile menu */}
					{menuOpen && (
						<nav className="md:hidden bg-[#00246B]">
							<ul className="flex flex-col items-start gap-4 p-4 text-white text-base">
								<li>
									<a
										className="block w-full transition hover:text-white/75 hover:font-bold"
										href="#"
										onClick={() => setMenuOpen(false)}
									>
										Home
									</a>
								</li>

								<li>
									<a
										className="block w-full transition hover:text-white/75 hover:font-bold"
										href="#"
										onClick={(e) => {
											e.preventDefault();
											setMenuOpen(false);
											if (onAboutClick) onAboutClick();
										}}
									>
										About
									</a>
								</li>

								<li>
									<a
										className="block w-full transition hover:text-white/75 hover:font-bold"
										href="#"
										onClick={(e) => {
											e.preventDefault();
											setMenuOpen(false);
											if (onServicesClick) onServicesClick();
										}}
									>
										Services
									</a>
								</li>

								<li>
									<a
										className="block w-full transition hover:text-white/75 hover:font-bold"
										href="#"
										onClick={() => setMenuOpen(false)}
									>
										Contact Us
									</a>
								</li>
							</ul>
						</nav>
					)}
				</div>
			</header>
		</>
	);
}

export default Navbar;