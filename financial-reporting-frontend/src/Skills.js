import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="Skills">
      <h2>Skills</h2>
      <h4> Core Skills</h4>
      <ul>
        <li>
          <ul>
            <li>UI/UX design principles and best practices</li>
            <li>Front-end development with HTML, CSS, and JavaScript</li>
            <li>Object-oriented programming with C# and ASP.NET</li>
            <li>Database query languages, particularly MS SQL Server</li>
            <li>Responsive design and mobile-first concepts</li>
            <li>Version control systems like Git</li>
            <li>Continuous Integration/Continuous Delivery (CI/CD)</li>
            <li>Web accessibility standards and techniques</li>
          </ul>
        </li>
        <h4>Framework and Tools</h4>
        <li>
          <ul>
            <li>React, Angular</li>
            <li>MVC and Entity Framework</li>
            <li>SASS, Bootstrap, Material UI</li>
            <li>RESTful APIs</li>
            <li>UI testing frameworks and tools</li>
            <li>TypeScript</li>
            <li>Agile methodologies (Scrum, Kanban)</li>
            <li>Microsoft Azure, JIRA, Confluence</li>
          </ul>
          <h4> Languages </h4>
        </li>
        <li> JavaScript, C#, Python, Swift</li>
        <li>Other: Test-Driven Development (TDD), Docker</li>
      </ul>
    </div>
  );
}

export default Skills;
