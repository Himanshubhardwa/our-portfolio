import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
    useEffect(() => {
        // We will move cursor and loader logic here or in App later
    }, []);

    return (
        <>
            {/* Custom cursor moved/removed */}

            <Navbar />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;
