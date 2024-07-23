import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="Projects">
      <h2>Projects</h2>
      
      <div className="Project">
        <h3>Financial Reporting Dashboard</h3>
        <p>The Financial Reporting Dashboard is a full-stack web application that makes financial data visualization and reporting easy and efficient. The backend, built with .NET Core and Entity Framework Core, provides reliable API endpoints to manage and retrieve financial reports from a SQL Server database. The frontend, developed with React, offers a responsive and user-friendly interface, allowing users to easily fetch and display various financial summaries, analyses, and forecasts. This project highlights my ability to create well-organized, scalable, and maintainable web applications, making it a great addition to my portfolio.</p>
        <a href="https://github.com/soulunknown/financialreportingdashboard" target="_blank" rel="noopener noreferrer">View Repository</a>
      </div>
    
      <div className="Project">
        <h3>Car Wizard</h3>
        <p>For this project, I led a team of my classmates from Fullstack Academy to develop a full-stack web application called "Car Wizard," designed to allow users to create, read, update, and delete car reviews. The front end is built with React, providing a smooth and responsive user interface. On the backend, we used Express.js to handle API requests and PostgreSQL for managing the database of reviews. The application features an image upload capability, using Multer and AWS S3 for secure storage. Users can filter reviews by car model, year, and brand, and search functionality is included for ease of access. CORS is configured to ensure secure cross-origin requests, while logging and error handling mechanisms are in place to ensure reliability and maintainability. This project demonstrates my ability to lead a team and build robust, scalable, and user-friendly web applications from scratch.</p>
        <a href="https://carreviewweb.onrender.com/" target="_blank" rel="noopener noreferrer">Open site</a>
      </div>

      <div className="Project">
        <h3>Benteler Steel Inventory System</h3>
        <p>The Steel Billet Inventory System is a C# project I developed using the .NET Framework, aimed at simplifying the management of steel billets in industrial settings. This console application enables users to add, remove, and view billets efficiently, with each item uniquely identified by an auto-generated ID. It features robust error handling and input validation to ensure accuracy and reliability. Designed with a focus on user-friendly interactions and streamlined operations, this project not only highlights my skills with C# and .NET but also enhances my understanding of practical software applications in a professional context.</p>
        <a href="https://github.com/soulunknown/benteler" target="_blank" rel="noopener noreferrer">View Repository</a>
      </div>
    </div>
  );
}

export default Projects;
