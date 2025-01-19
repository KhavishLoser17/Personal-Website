import { useState } from "react";
import logo1 from "../assets/logo1.png";
import { NAVIGATION_LINKS } from "../constants";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85; 
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Desktop Menu */}
      <div className="mx-auto hidden max-w-5xl items-center justify-between px-6 py-4 rounded-lg border border-stone-50/30 bg-black/20 backdrop-blur-lg lg:flex">
        <a href="#">
          <img src={logo1} width={120} alt="Logo" />
        </a>
        <ul className="flex items-center gap-8">
          {NAVIGATION_LINKS.map((item, index) => (
            <li key={index}>
              <a
                className="text-sm font-medium text-white hover:text-yellow-400 transition-colors"
                href={item.href}
                onClick={(e) => handleLinkClick(e, item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div className="flex items-center justify-between px-4 py-4 bg-black/20 backdrop-blur-md lg:hidden">
        <a href="#">
          <img src={logo1} width={90} alt="Logo" />
        </a>
        <button
          className="text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
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

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-black/90 text-white rounded-b-lg py-4 lg:hidden">
          <ul className="flex flex-col items-center gap-4">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="text-sm font-medium hover:text-yellow-400 transition-colors"
                  href={item.href}
                  onClick={(e) => handleLinkClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
