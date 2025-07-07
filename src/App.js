import React from 'react';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import Career from './components/Career';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-black text-white">
      <Sidebar />
      <main id="site-main" className="md:ml-16 flex-1 overflow-y-auto p-4">
        <Home />
        <Career/>
        <Portfolio />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;