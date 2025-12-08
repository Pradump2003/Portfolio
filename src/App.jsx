import { useState } from "react";
import StarBG from "./components/StarBG";
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`relative min-h-screen w-full transition-colors duration-500 ${
        darkMode ? "text-white" : "bg-white text-black"
      }`}
    >
      <StarBG darkMode={darkMode} />
      <Navbar darkMode={darkMode} toggleDarkMode={handleDarkModeToggle} />
      <Portfolio />
      <Footer />
    </div>
  );
}
