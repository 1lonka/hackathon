import React from 'react';

export default function Hero() {
  return (
    /* museum-container je v CSS ten hlavní obal s pozadím */
    <div className="museum-container"> 
      <nav className="navbar">
        <a href="#" className="navbar-logo">OBSCURA</a>
        <ul className="navbar-links">
          <li><a href="#timeline">Timeline</a></li>
          <li><a href="#camera-section">Try Camera</a></li>
        </ul>
      </nav>

      <div className="hero-section">
        <p className="hero-eyebrow">A Digital Museum Experience</p>
        <h1 className="hero-title">Historical Camera<br/><em>Virtual Museum</em></h1>
        <p className="hero-subtitle">
          Journey through five centuries of optical innovation.
        </p>
        <button 
          className="hero-button" 
          onClick={() => document.getElementById('camera-section').scrollIntoView({ behavior: 'smooth' })}
        >
          VSTOUPIT DO EXPOZICE
        </button>
      </div>
    </div>
  );
}