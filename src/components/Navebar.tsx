

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Close dropdown when clicking outside
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
      
      // Close mobile menu when clicking outside
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const handleScroll = (sectionId: string) => {
    console.log("Scrolling to section:", sectionId);
    
    // Small delay to ensure DOM is ready
    setTimeout(() => {
      const section = document.getElementById(sectionId);
      if (section) {
        console.log("Section found, scrolling...");
        section.scrollIntoView({ behavior: "smooth" });
      } else {
        console.log("Section not found:", sectionId);
        // List all available IDs for debugging
        console.log("Available IDs:");
        document.querySelectorAll("[id]").forEach(el => {
          console.log(`- ${el.id}`);
        });
      }
      setDropdownOpen(false);
    }, 100);
  };
  const listVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
      },
    }),
  };
    const projectScopeItems = [
    { name: "Literature Survey", id: "literature" },
    { name: "Research Gap", id: "gap" },
    { name: "Research Problem", id: "problem" },
    { name: "Research Objectives", id: "objectives" },
    { name: "Methodology", id: "methodology" },
    { name: "Technologies", id: "teachnology" },
  ];

  const navItems = [
    { name: "Timeline", id: "time" },
    { name: "Documents", id: "doc" },
    { name: "Team", id: "team" },
    { name: "Contact", id: "contact" },
  ];  return (
    <motion.div
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex flex-wrap justify-between py-4 px-4 bg-cyan-800 shadow-md"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center w-full lg:w-auto">
        <h1 className="text-white font-bold text-xl">Multisensory Learning Tools Research</h1>
        
        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
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
      </div>      {/* Navigation items - Desktop and Mobile */}
      <div
        className={`w-full lg:flex lg:items-center lg:w-auto transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <ul className="lg:flex lg:gap-6 lg:items-center mt-4 lg:mt-0 bg-cyan-800 lg:bg-transparent p-2 lg:p-0 rounded-md">
          {/* Project Scope Dropdown */}
          <div className="relative mb-2 lg:mb-0" ref={dropdownRef}>
            <motion.li
              className="hover:text-blue-300 cursor-pointer text-white flex items-center gap-1 font-medium py-2 lg:py-0"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              custom={0}
              onClick={() => setDropdownOpen(!dropdownOpen)}
              role="button"
            >
              Project Scope
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="16" 
                height="16" 
                fill="currentColor" 
                className={`bi bi-chevron-down transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} 
                viewBox="0 0 16 16"
              >
                <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
              </svg>
            </motion.li>
            
            {dropdownOpen && (
              <motion.div 
                className={`${mobileMenuOpen ? 'relative w-full' : 'absolute z-50 left-0 top-full'} mt-1 w-56 bg-white rounded-md shadow-lg overflow-hidden`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                {projectScopeItems.map((item) => (
                  <a 
                    key={item.name} 
                    href={`#${item.id}`}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-cyan-700 hover:text-white cursor-pointer transition-colors duration-150 ease-in-out border-b border-gray-100 last:border-b-0"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      console.log(`Clicked on ${item.name}, id: ${item.id}`);
                      handleScroll(item.id);
                      setMobileMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </motion.div>
            )}
          </div>
          
          {/* Regular Nav Items */}
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              className="block py-2 lg:py-0 hover:text-blue-300 cursor-pointer text-white"
              variants={listVariants}
              initial="hidden"
              animate="visible"
              custom={index + 1}  // +1 to account for the dropdown
              onClick={() => {
                handleScroll(item.id);
                setMobileMenuOpen(false);
              }}
            >
              {item.name}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default Navbar;


