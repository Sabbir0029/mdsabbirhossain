"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#", active: true },
    { name: "About", href: "#", active: false },
    { name: "Skills", href: "#", active: false },
    { name: "Portfolio", href: "#", active: false },
    { name: "Contact", href: "#", active: false },
  ];
  return (
   <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-cyan-900 text-white overflow-hidden">
     <nav className="relative z-50 px-6 py-6 lg:px-12">
      <div className="flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-2xl font-bold">Sabbir.</h1>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="hidden md:flex space-x-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-lg font-medium transition-colors duration-300 hover:text-cyan-400 ${
                item.active ? "text-cyan-400" : "text-white"
              }`}
            >
              {item.name}
            </a>
          ))}
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <motion.div
          className="md:hidden absolute top-full left-0 right-0 bg-slate-800/95 backdrop-blur-sm p-6 rounded-b-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block py-2 text-lg font-medium transition-colors duration-300 hover:text-cyan-400 ${
                item.active ? "text-cyan-400" : "text-white"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
   </div>
  );
};

export default Navbar;
