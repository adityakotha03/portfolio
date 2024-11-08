import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Hero from './components/sections/Hero';
import Experience from './components/sections/Experience';
import Publications from './components/sections/Publications';
import Projects from './components/sections/Projects';
import Footer from './components/Footer';
import Blog from './pages/Blog';
function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-slate-900 text-gray-100">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <NavBar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
                <main>
                  <Hero />
                  <Experience />
                  <Publications />
                  <Projects />
                </main>
                <Footer />
              </>
            }
          />
          <Route path="/blog" element={<Blog />} /> {/* Blog Route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;