import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <h2>Projects</h2>
      
      <div className="Project">
        <h3>Financial Reporting Dashboard</h3>
        <p>A comprehensive financial reporting tool built with React and ASP.NET Core.</p>
        <a href="https://github.com/soulunknown/financialreportingdashboard" target="_blank" rel="noopener noreferrer">View Repository</a>
      </div>
    
      <div className="Project">
        <h3>Car Wizard</h3>
        <p>A site for car enthusiasts to share pictures of cars and create profiles. Built with React and Node.js.</p>
        <a href="https://carreviewweb.onrender.com/" target="_blank" rel="noopener noreferrer">Open site</a>
      </div>

      <div className="Project">
        <h3>Benteler Steel Inventory System</h3>
        <p>An inventory management system for steel billets, developed using C# and ASP.NET.</p>
        <a href="https://github.com/soulunknown/benteler" target="_blank" rel="noopener noreferrer">View Repository</a>
      </div>
    </div>
  );
}

export default Projects;
