# HomeMaid - Home Services Platform

Welcome to **HomeMaid**, a modern web application designed to simplify home services booking. Built with React, this platform connects users with vetted providers for services like cooking, cleaning, laundry, and more. Whether you're a homeowner needing help or a provider offering services, HomeMaid provides an intuitive interface with real-time booking, dashboards, and user management.

## Table of Contents
* [Overview](#overview)
* [Features](#features)
* [Tech Stack](#tech-stack)
* [Installation](#installation)
* [Usage](#usage)
* [Project Structure](#project-structure)
* [API Data](#api-data)
* [Contributing](#contributing)
* [License](#license)
* [Contact](#contact)

## Overview
HomeMaid is a user-friendly platform launched in 2025 to revolutionize home service management in India. It allows users to book services, view provider profiles, track bookings, and manage profiles, while providers can update availability and view earnings. The app emphasizes a teal-themed UI, responsive design, and smooth animations for an enhanced user experience.

## Features
* **User Authentication**: Login and signup with mock credentials.
* **Service Booking**: Book services like cooking, laundry, and cleaning with location selection via a map.
* **Provider Profiles**: Browse vetted providers with ratings and roles.
* **User & Provider Dashboards**: Manage bookings, view history, and update profiles.
* **Real-Time Notifications**: Stay updated with in-app notifications.
* **Search Functionality**: Filter services and providers by name or role.
* **Interactive Map**: Select locations within India using Leaflet integration.
* **Animations**: Smooth GSAP animations for a dynamic UI.
* **Responsive Design**: Works seamlessly on desktop and mobile devices.

## Tech Stack
* **Frontend**: React.js, React Router, Tailwind CSS
* **Libraries**: Leaflet (for maps), GSAP (for animations), React Toastify (for notifications)
* **State Management**: React Context API
* **Build Tools**: Vite
* **Assets**: Custom icons and images
* **Dependencies**: `leaflet`, `leaflet-geosearch`, `gsap`, `react-toastify`

## Installation

### Prerequisites
* Node.js (v18.x or later)
* npm or yarn
* Git (optional for cloning)

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/homemaid.git
   cd homemaid

### Steps
2. **Install Dependencies**
   ```bash
   npm install

### Steps
3. **Set Up Environment**
   - No environment variables are required for this project as it uses mock data.
   - Ensure all image assets are placed in the `src/assets/` folder (e.g., `images/`, `icons/`).

4. **Run the Application**
   ```bash
   npm run dev

**Open http://localhost:5173 in your browser.**



### Usage
**Login Credentials (Mock)**
`User: Phone: 9876543210, Password: user123` (Redirects to User Dashboard)
`Provider: Phone: 0123456789, Password: provider123` (Redirects to Provider Dashboard)


### Navigation
**Home:** View top providers and testimonials.
**About:** Learn about HomeMaid’s mission and team.
**Services:** Explore available services.
**Providers:** Find and book providers.
**Login/Signup**: Access or create an account.
**User Dashboard**: Manage bookings and profile.
**Provider Dashboard**: View bookings, earnings, and feedback.
**Booking:** Schedule a new service with location.
**History:** View past bookings.
**Contact:** (Placeholder for future implementation)


### Key Interactions
- `Search for services or providers using the search bar.`
- `Drag the map marker to select a booking location (restricted to India).`
- `Toggle booking status or cancel bookings from the User Dashboard.`
- `Upload a profile photo and save changes in dashboards.`

### Contributing
We welcome contributions to improve HomeMaid! Here's how you can help:

**1. Fork the Repository**
**2. Create a Feature Branch**
        ```bash
        git checkout -b feature/your-feature
**3. Commit Changes**
        ```bash
        git commit -m "Add your feature"
**4. Push to the Branch**
        ```bash
        git push origin feature/your-feature
**5. Open a Pull Request** with a clear description of your changes.


### Guidelines
- `Follow the existing code style (Tailwind CSS, Poppins font).`
- `Add comments for complex logic.`
- `Test changes thoroughly before submitting.`
- `Ensure no breaking changes to existing functionality.`


### License
This project is licensed under the MIT License. Feel free to use, modify, and distribute it as per the license terms.


### Contact
For questions or support, reach out to:

`Email: utkarshkumarsingh120903@gmail.com`