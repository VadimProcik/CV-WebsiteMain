import React from 'react';
import logo from './logo.svg';
import { FaReact, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiFirebase, SiExpo, SiPython,SiUnity, SiCsharp } from 'react-icons/si';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        {/* React Logo in Top Right */}
        <div className="react-logo">
          <p style={{ color: 'white' }}>This website is made with React</p>
          <span>
            <FaReact />
          </span>
        </div>

        {/* Social Icons */}
        <div className="social-links">
          <a href="https://www.linkedin.com/in/vadims-prociks-000441239/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="icon" />
          </a>
          <a href="https://github.com/VadimProcik" target="_blank" rel="noopener noreferrer">
            <FaGithub className="icon" />
          </a>
        </div>

        <p style={{ color: 'white' }}><strong>Contact Details:&nbsp; provadims19@gmail.com,  &nbsp;&nbsp;&nbsp;&nbsp; 0897075667</strong></p>
        <h1>Vadim Procik Web CV</h1>
        <p className="bio">
          <strong>Quick Summary:</strong> I graduated with a first-class honours degree (3.3 GPA) from my Bachelor's in Computer Science at TU Dublin - Blanchardstown in Summer 2024. In the summer of 2022, I worked as a software engineer intern at BeSpace in Blanchardstown where they taught me how to use their software called Cabinet Vision where I would make 3D renders of customers' orders and send cut-out sheets to CNC machines. If anything went wrong with the machines, I and the senior engineer would examine and fix them. Since graduation, I have been reaching out to local small businesses offering to build websites for them to further develop my experience and portfolio.
        </p><br></br>
        
      </header>

      {/* Projects Section */}
      <div className="projects">
        {/* Project 1 */}
        <div className="project">
          <h2>
            Project 1: DevNest - Mobile Application
            <span className="icons">
              <FaReact /> <SiExpo /> <SiFirebase />
            </span>
          </h2>
          <h3>Application: React Native, EXPO, Firebase <br></br>Website: React </h3>
          <p>DevNest is a Programming Learning Hybrid Application & Website designed to assist users in reaching their programming goals. Choose your course and start learning. A short ad of the application is available at <a href="https://www.youtube.com/watch?v=3fDNKw592cw">https://www.youtube.com/watch?v=3fDNKw592cw</a></p>
          <p>Create your account and begin progressing through a course of your choice gaining knowledge along the way. If you run into a problem, you can text friends and other app users for help through the in-app chat feature. To ensure users are learning, they will not be able to move on to the next level of their chosen course until they gain enough XP, which is earned by performing well in levels. All user progression is saved in a Firebase database. If the user encounters issues with the application, they can contact the dev team via a form on the website.</p>
          <img src="DevNestcover.png" className="project-image" alt="DevNest cover" />
          <p><strong>Github Link: <a href="https://github.com/VadimProcik/DevNest">CLICK ME</a></strong></p>
        </div>

        {/* Project 2 */}
        <div className="project">
          <h2>
            Project 2: Classification System - Pass or Fail
            <span className="icons">
              <SiPython />
            </span>
          </h2>
          <h3>Program: Python</h3>
          <p>
            This project showcases a Python-based classification system designed to analyze images of O-rings and determine their status as either "Pass" or "Fail" based on whether the O-ring in the image is full, snapped, or has a chunk taken out of it. The system uses image processing techniques such as Otsu's thresholding, custom dilation and erosion, and connected component labeling to detect and evaluate the O-rings.
          </p>
          <p>
            Key features include the use of OpenCV for image manipulation, NumPy for efficient array handling, and the `skimage` library for component analysis. The project processes each image through multiple stages of binary morphology to enhance the structure of the O-rings before checking to see their circular properties. The final classification is based on the circularity metric, with perfectly circular O-rings classified as "Pass" and others as "Fail."
          </p>
          <br></br>
          <img src='OtsusThresholding.png' className="project-image" alt="Project 2" />
          <p><strong>Github Link: <a href="https://github.com/VadimProcik/PythonPassorFail">CLICK ME</a></strong></p>
        </div>

        {/* Project 3 */}
        <div className="project">
          <h2>
            Project 3: A Unity Game is COMING
            <span className="icons">
              <SiUnity /> <SiCsharp/>
            </span>  
          </h2>
          <h3>Unity Game: C#</h3>
          <p>This is a work in progress project. For this personal project I would like to take on the challenge of creating my first fully functional unity game with good game loop using C#.</p>
          <img src='UnityQuestGame.png' className="project-image" alt="Project 3" />
          <p><strong>Github Link: <a href="https://github.com/VadimProcik/2DFunGame">CLICK ME</a></strong></p>
        </div>

        {/* Project 4 */}
        <div className="project">
          <h2>Project 4: React Portfolio</h2>
          <p>This project showcases a personal portfolio built using React and modern web development techniques.</p>
          <img src={logo} className="project-image" alt="Project 4" />
        </div>
      </div>

      <footer className="App-footer">
        <h3 style={{ color: 'white' }}>Hello please hire me...lol</h3>
      </footer>
    </div>
  );
}

export default App;
