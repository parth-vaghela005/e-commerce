import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AuthLayout from "./components/auth/layout";
import AuthLogin from "./pages/auth/Login";
import AuthRegister from "./pages/auth/Registration";
import Navbar from "./components/Navbar.jsx";
// import Home from "./pages/Home"; // Example Home Page
// import About from "./pages/About"; // Example About Page
// import Contact from "./pages/Contact"; // Example Contact Page
import './App.css';

function App() {
  const location = useLocation();

  // Define routes where the Navbar should NOT appear
  const hideNavbarRoutes = ["/auth/login", "/auth/register"];

  return (
    <div>
      {/* Conditionally render Navbar */}
      {/* {!hideNavbarRoutes.includes(location.pathname) && <Navbar />} */}
      <Navbar />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth Routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route path="login" element={<AuthLogin />} />
          <Route path="register" element={<AuthRegister />} />
        </Route>

        {/* Fallback Route */}
        <Route path="*" element={<h1>404 - Page Not Found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
