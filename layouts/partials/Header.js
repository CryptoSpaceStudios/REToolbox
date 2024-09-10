import Logo from "@components/Logo";
import config from "@config/config.json";
import menu from "@config/menu.json";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // Router
  const router = useRouter();

  // Destructuring the main menu from menu object
  const { main } = menu;

  // States declaration
  const [navOpen, setNavOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Logo source
  const { logo } = config.site;

  // Toggle dark mode
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    }
  }, []);

  return (
    <header className="header bg-theme-light dark:bg-theme-dark" alt='Navigation Menu' aria-label='Navigation Menu' aria-description='Navigation Menu'>
      <nav className="navbar container" alt='Navigation Menu' aria-label='Navigation Menu'>
        {/* Logo */}
        <div className="order-0" alt='Logo Image' aria-label='Logo Image' aria-description='Logo Image'>
          <Logo src={logo} />
        </div>

        {/* Navbar toggler */}
        <button
          id="show-button"
          alt="Mobile Navigation Menu"
          aria-label="Mobile Navigation Menu"
          title="Mobile Navigation Menu"
          className="order-2 flex cursor-pointer items-center md:hidden md:order-1"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Open</title>
              <polygon
                points="11 9 22 9 22 11 11 11 11 22 9 22 9 11 -2 11 -2 9 9 9 9 -2 11 -2"
                transform="rotate(45 10 10)"
              />
            </svg>
          ) : (
            <svg className="h-6 fill-current" viewBox="0 0 20 20">
              <title>Menu Close</title>
              <path d="M0 3h20v2H0V3z m0 6h20v2H0V9z m0 6h20v2H0V0z" />
            </svg>
          )}
        </button>

        {/* Menu */}
        <div
          id="nav-menu"
          alt="Navigation Menu"
          aria-label="Navigation Menu"
          aria-description="Navigation Menu"
          className={`order-3 md:order-1 ${navOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
        >
          <ul className="navbar-nav block w-full md:flex md:w-auto lg:space-x-2" alt="Navigation Menu" aria-label="Navigation Menu">
            {main.map((menu, i) => (
              <React.Fragment key={`menu-${i}`}>
                <li className="nav-item" key={`menu-${i}`}>
                  <Link
                    href={menu.url}
                    alt={menu.name}
                    aria-label={menu.name}
                    aria-description={menu.name}
                    title={menu.name}
                    onClick={() => setNavOpen(false)}
                    className={`nav-link block ${router.asPath === menu.url ? 'nav-link-active' : ''}`}
                  >
                    {menu.name}
                  </Link>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="order-1 ml-auto hidden min-w-[200px] items-center justify-end md:ml-0 md:flex md:order-2"
          aria-label="Toggle Dark Mode"
        >
          <FontAwesomeIcon icon={isDarkMode ? faSun : faMoon} />
        </button>
      </nav>
    </header>
  );
};

export default Header;