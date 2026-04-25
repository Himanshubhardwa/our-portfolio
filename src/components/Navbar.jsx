import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true); // Default dark mode
    const [active, setActive] = useState("home");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Apply theme on component mount
    useEffect(() => {
        applyTheme(darkMode);
    }, []);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const applyTheme = (isDark) => {
        if (isDark) {
            // Dark mode - Premium Dark Theme
            document.documentElement.style.setProperty('--bg-primary', '#0a0a1a');
            document.documentElement.style.setProperty('--bg-secondary', '#12121f');
            document.documentElement.style.setProperty('--bg-tertiary', '#1a1a2e');
            document.documentElement.style.setProperty('--text-primary', '#ffffff');
            document.documentElement.style.setProperty('--text-secondary', 'rgba(255, 255, 255, 0.8)');
            document.documentElement.style.setProperty('--text-muted', 'rgba(255, 255, 255, 0.6)');
            document.documentElement.style.setProperty('--accent-primary', '#667eea');
            document.documentElement.style.setProperty('--accent-secondary', '#764ba2');
            document.documentElement.style.setProperty('--border-color', 'rgba(102, 126, 234, 0.2)');
            document.documentElement.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.3)');
            document.documentElement.style.setProperty('--navbar-bg', 'rgba(10, 10, 26, 0.95)');
            document.documentElement.style.setProperty('--card-bg', 'rgba(18, 18, 31, 0.8)');
        } else {
            // Light mode - Clean & Modern Light Theme
            document.documentElement.style.setProperty('--bg-primary', '#f8f9ff');
            document.documentElement.style.setProperty('--bg-secondary', '#ffffff');
            document.documentElement.style.setProperty('--bg-tertiary', '#f0f2ff');
            document.documentElement.style.setProperty('--text-primary', '#1a1a2e');
            document.documentElement.style.setProperty('--text-secondary', 'rgba(26, 26, 46, 0.85)');
            document.documentElement.style.setProperty('--text-muted', 'rgba(26, 26, 46, 0.6)');
            document.documentElement.style.setProperty('--accent-primary', '#5568d3');
            document.documentElement.style.setProperty('--accent-secondary', '#6b4ba1');
            document.documentElement.style.setProperty('--border-color', 'rgba(85, 104, 211, 0.15)');
            document.documentElement.style.setProperty('--shadow-color', 'rgba(102, 126, 234, 0.15)');
            document.documentElement.style.setProperty('--navbar-bg', 'rgba(255, 255, 255, 0.95)');
            document.documentElement.style.setProperty('--card-bg', 'rgba(255, 255, 255, 0.9)');
        }

        document.body.style.backgroundColor = isDark ? '#0a0a1a' : '#f8f9ff';
        document.body.style.color = isDark ? '#ffffff' : '#1a1a2e';
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
    };

    const toggleTheme = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        applyTheme(newMode);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleLinkClick = (section) => {
        setActive(section);
        setIsMenuOpen(false);
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} id="navbar">
            <div className="nav-container">
                <Link to="/#home" 
                    className="nav-logo"
                    onClick={() => {
                        setActive("home");
                        setIsMenuOpen(false);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                    }}>
                Traxx World
                </Link>

                <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`} id="navLinks">
                    <li>
                        <a 
                            href="#home" 
                            className={`nav-link ${active === "home" ? "active" : ""}`}
                            onClick={() => handleLinkClick("home")}
                        >
                            Home
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#about" 
                            className={`nav-link ${active === "about" ? "active" : ""}`}
                            onClick={() => handleLinkClick("about")}
                        >
                            About
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#skills" 
                            className={`nav-link ${active === "skills" ? "active" : ""}`}
                            onClick={() => handleLinkClick("skills")}
                        >
                            Skills
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#projects" 
                            className={`nav-link ${active === "projects" ? "active" : ""}`}
                            onClick={() => handleLinkClick("projects")}
                        >
                            Projects
                        </a>
                    </li>

                    <li>
                        <a 
                            href="#contact" 
                            className={`nav-link ${active === "contact" ? "active" : ""}`}
                            onClick={() => handleLinkClick("contact")}
                        >
                            Contact
                        </a>
                    </li>

                </ul>

                <div className="nav-actions">
                    <button 
                        className="theme-toggle" 
                        id="themeToggle"
                        onClick={toggleTheme}
                        title={darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
                    >
                        {darkMode ? (
                            <i className="fas fa-sun"></i>
                        ) : (
                            <i className="fas fa-moon"></i>
                        )}
                    </button>

                    <div 
                        className={`hamburger ${isMenuOpen ? 'active' : ''}`} 
                        id="hamburger"
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;