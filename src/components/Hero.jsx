import React, { useState, useEffect } from 'react';
import firstpage from "../assets/firstpage.avif";

const Hero = () => {
    const roles = [
        "Data Science",
        "Deep Learning Enthusiast",
        "Machine Learning Enthusiast",
        "Natural Language Processing Enthusiast"
    ];
    
    const [currentRole, setCurrentRole] = useState('');
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    
    useEffect(() => {
        let timer;
        const currentString = roles[roleIndex];
        
        if (isDeleting) {
            timer = setTimeout(() => {
                setCurrentRole(currentString.substring(0, currentRole.length - 1));
            }, 50);
        } else {
            timer = setTimeout(() => {
                setCurrentRole(currentString.substring(0, currentRole.length + 1));
            }, 100);
        }

        if (!isDeleting && currentRole === currentString) {
            timer = setTimeout(() => setIsDeleting(true), 1500);
        } else if (isDeleting && currentRole === '') {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
        }

        return () => clearTimeout(timer);
    }, [currentRole, isDeleting, roleIndex]);

    return (
        <section className="hero" id="home">
            <div className="hero-particles" id="particles"></div>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="badge-dot"></span>
                        " Data Science Student " 
                    </div>
                    <h1 className="hero-title">
                        <span className="title-line">Hi, I'm</span>
                        <span className="title-name">Himanshu Bhardwaj</span>
                        <span className="title-role">{currentRole}</span>
                    </h1>
                    <p className="hero-description">
                    Aspiring Data Scientist skilled in Machine Learning, Deep Learning, 
                    and Natural Language Processing, transforming complex data into actionable insights. 
                    Passionate about building intelligent, scalable solutions that solve real-world problems through data-driven innovation.
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            <span>View Projects</span>
                            <i className="fas fa-arrow-right"></i>
                        </a>
                        <a href="#contact" className="btn btn-outline">
                            <span>Touch To Me</span>
                            <i className="fas fa-paper-plane"></i>
                        </a>
                    </div>
                    <div className="hero-stats">
                        <div className="stat-item">
                            <span className="stat-number" data-count="0">3</span>
                            <span className="stat-label">Deploy Project</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number" data-count="0">10</span>
                            <span className="stat-label">Simple Projects</span>
                        </div>
                        <div className="stat-item">
                            <span className="stat-number" data-count="3">3</span>
                            <span className="stat-label">Month Experience</span>
                        </div>
                    </div>
                </div>
                <div className="hero-image">
                    <div className="image-wrapper">
                        <div className="image-border"></div>
                        <div className="image-glow"></div>
                        <img src={firstpage} alt="Himanshu" className="profile-image" />
                    </div>
                    <div className="floating-card card-1">
                        <i className="fab fa-react"></i>
                        <span>Python</span>
                    </div>
                    <div className="floating-card card-2">
                        <i className="fab fa-node-js"></i>
                        <span>SQL</span>
                    </div>
                    <div className="floating-card card-3">
                        <i className="fab fa-figma"></i>
                        <span>MLOPs</span>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>Scroll Down</span>
            </div>
        </section>
    );
};

export default Hero;
