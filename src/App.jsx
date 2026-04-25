import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Admin from './pages/Admin';

function App() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 15}px`;
        cursorRef.current.style.top = `${e.clientY - 15}px`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <div className="cursor-follower" ref={cursorRef}></div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
