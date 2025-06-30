import femaleHelper from "../assets/images/femaleHelper.jpg";
import maleHelper from "../assets/images/maleHelper.jpg";
import cookingImage from "../assets/images/cooking.jpg";
import sweepingImage from "../assets/images/sweeping.jpg";
import laundryImage from "../assets/images/laundry.jpg";
import groceryImage from "../assets/images/grocery.jpg";  
import dustingImage from "../assets/images/dusting.jpg";
import dishwashingImage from "../assets/images/dishwashing.jpg";

// Service data for the homepage
export const services = [
  {
    id: 1,
    title: "Cooking",
    image: cookingImage,
    description: "Daily meal prep or special cuisines.",
    price: "₹800",
  },
  {
    id: 2,
    title: "Sweeping and Mopping",
    image: sweepingImage,
    description: "Deep floor cleaning and scrubbing.",
    price: "₹500",
  },
  {
    id: 3,
    title: "Laundry",
    image: laundryImage,
    description: "Washing, ironing, and folding.",
    price: "₹400",
  },
  {
    id: 4,
    title: "Grocery Shopping",
    image: groceryImage,
    description: "Shop for your daily essentials.",
    price: "₹300",
  },
  {
    id: 5,
    title: "Dusting",
    image: dustingImage,
    description: "Keep your home dust-free.",
    price: "₹350",
  },
  {
    id: 6,
    title: "Dish Washing",
    image: dishwashingImage,
    description: "Clean and organize your kitchen.",
    price: "₹300",
  },
];

// Provider data for the homepage
export const providers = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Cooking",
    image: femaleHelper,
    rating: 4.8,
    gender: "female",
    stars: Math.round(3.8), // Sync with rating (4.8 → 5 stars)
  },
  {
    id: 2,
    name: "Anil Kumar",
    role: "Sweeping and Mopping",
    image: maleHelper,
    rating: 4.5,
    gender: "male",
    stars: Math.round(3.5), // Sync with rating (4.5 → 5 stars)
  },
  {
    id: 3,
    name: "Rita Devi",
    role: "Laundry",
    image: femaleHelper,
    rating: 4.7,
    gender: "female",
    stars: Math.round(0.7), // Sync with rating (0.7 → 1 stars)
  },
  {
    id: 4,
    name: "Vikram Singh",
    role: "Grocery Shopping",
    image: maleHelper,
    rating: 4.3,
    gender: "male",
    stars: Math.round(4.8), // Sync with rating (4.3 → 4 stars)
  },
  {
    id: 5,
    name: "Sunita Yadav",
    role: "Dusting",
    image: femaleHelper,
    rating: 4.6,
    gender: "female",
    stars: Math.round(2.6), // Sync with rating (2.6 → 3 stars)
  },
  {
    id: 6,
    name: "Mohan Lal",
    role: "Dish Washing",
    image: maleHelper,
    rating: 4.4,
    gender: "male",
    stars: Math.round(4.4), // Sync with rating (4.4 → 4 stars)
  },
];