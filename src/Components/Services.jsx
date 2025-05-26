// Import images from assets folder
import sweepingImg from "../assets/sweeping.jpg";
import dustingImg from "../assets/dusting.jpg";
import cookingImg from "../assets/cooking.jpg";
import dishWashingImg from "../assets/dishwashing.jpg";
import laundryImg from "../assets/laundry.jpg";
import groceryImg from "../assets/grocery.jpg";


function Services() {
  const services  = [
    "Sweeping and Mopping",
    "Dusting and Polishing",
    "Cooking",
    "Dish Washing",
    "Laundry",
    "Grocery Shopping",
  ];

// Example images for each service (replace with your own images if needed)
const serviceImages  = [
    sweepingImg,
    dustingImg,
    cookingImg,
    dishWashingImg,
    laundryImg,
    groceryImg,
  ];

return (
    <>
        <div className="mx-auto h-screen mt-20 max-w-screen-xl p-5">
            <header className="text-black">
                <div className="max-w-screen-xl mx-auto px-4 py-4">
                    <h1 className="text-3xl font-bold">Services</h1>
                    <p className="mt-2 text-gray-700">
                        Reliable and professional maid services at your doorstep.
                    </p>
                </div>
            </header>

            <section className="bg-white">
                <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16">
                    <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
                        Our Services
                    </h2>
                    <p className="mb-6 text-black">
                        We offer a wide range of services to meet your needs.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-64"
                            >
                                <div className="h-[70%] w-full">
                                    <img
                                        src={serviceImages[index]}
                                        alt={service}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="h-[30%] flex items-center justify-center bg-gray-100">
                                    <span className="text-lg font-semibold text-gray-800">{service}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    </>
);
}

export default Services;
