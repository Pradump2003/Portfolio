import { useEffect, useState } from "react";
import StarBG from "./components/StarBG";
import Navbar from "./pages/Navbar";
import Portfolio from "./pages/Portfolio";
import Footer from "./pages/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className="
        relative min-h-screen w-full
        bg-gray-200 dark:bg-black
        text-black dark:text-white
        transition-colors duration-500
      "
    >
      {/* ⭐ Stars only visible in dark mode */}
      <StarBG darkMode={darkMode} />

      {/* Navbar */}
      <Navbar darkMode={darkMode} toggleDarkMode={setDarkMode} />

      {/* Main Content */}
      <main className="relative z-10">
        <Portfolio />
      </main>

      <Footer />
    </div>
  );
}
