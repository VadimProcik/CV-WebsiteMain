import React, { useState } from 'react';
import logo from './logo.svg';
import { FaReact, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiFirebase, SiExpo, SiPython, SiUnity, SiCsharp } from 'react-icons/si';
import './App.css';

function App() {
  // ---- Modal state ----
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
  };

  const closeModal = () => {
    setModalContent(null);
  };

  return (
    <div className="App">
      {/* Header Section */}
      <header className="App-header">
        <div className="react-logo">
          <p style={{ color: 'white' }}>This portfolio is made with React</p>
          <span>
            <FaReact />
          </span>
        </div>

        {/* Social Icons */}
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/vadims-prociks-000441239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" />
          </a>
          <a
            href="https://github.com/VadimProcik"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" />
          </a>
        </div>

        <p style={{ color: 'white' }}>
          <strong>
            Contact Details:&nbsp; provadims19@gmail.com
          </strong>
        </p>
        <h1>Vadim Procik Web CV</h1>
        <p className="bio">
          <strong>Quick Summary:</strong> I am an IT Graduate at Applegreen, with prior experience as an IT Operations & Support Technician at Homeology Retrofit. I graduated with a first class honours(3.3GPA) degree in Computer Science from TU Dublin (2024).
        </p>
        <br />
      </header>

      {/* Experience Section */}
      <div className="experience">
        <h2>Experience</h2> <h5>Click the card for details</h5>
        <div className="timeline-horizontal">
          {/* Applegreen */}
          <div
            className="timeline-card"
            tabIndex={0}
            role="button"
            aria-label="View details for Applegreen IT Graduate"
            onClick={() =>
              openModal(
                <>
                  <h3 id="modal-title">IT Graduate — Applegreen</h3>
                  <div className="meta">Sep 2025 – Present · Dublin, Ireland · Hybrid</div>
                  <p>
                    <strong>Applegreen · Full-time</strong>
                  </p>
                  <p>IT Graduate Programme at Applegreen</p>
                </>
              )
            }
            onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
          >
            <div className="timeline-logo">
              <img src="ApplegreenLogo.png" alt="Applegreen" />
            </div>
            <h3>IT Graduate</h3>
            <p>Sep 2025 – Present</p>
          </div>

          {/* Homeology */}
          <div
            className="timeline-card"
            tabIndex={0}
            role="button"
            aria-label="View details for Homeology Retrofit IT Operations & Support Technician"
            onClick={() =>
              openModal(
                <>
                  <h3 id="modal-title">
                    IT Operations & Support Technician — Homeology Retrofit
                  </h3>
                  <div className="meta">
                    May 2024 – Sep 2025 · County Meath, Ireland · On-site
                  </div>
                  <p>
                    <strong>Homeology Retrofit · Full-time</strong>
                  </p>
                  <ul>
                    <li>Edit and manage company WordPress website</li>
                    <li>Procure & deploy hardware tailored to user roles</li>
                    <li>Manage password systems & access credentials</li>
                    <li>
                      Set up & administer domains & company emails (Register365,
                      Blacknight)
                    </li>
                    <li>Troubleshoot & resolve software/hardware issues</li>
                    <li>Coordinate with vendors and service providers</li>
                    <li>Maintain IT asset & license inventory</li>
                    <li>Document IT processes and onboarding guides</li>
                  </ul>
                </>
              )
            }
            onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
          >
            <div className="timeline-logo">
              <img src="HomeologyLogo.jpg" alt="Homeology Retrofit" />
            </div>
            <h3>IT Ops & Support Technician</h3>
            <p>May 2024 – Sep 2025</p>
          </div>

          {/* BeSpace */}
          <div
            className="timeline-card"
            tabIndex={0}
            role="button"
            aria-label="View details for BeSpace roles"
            onClick={() =>
              openModal(
                <>
                  <h3 id="modal-title">
                    BeSpace — Software Engineer Intern & Assembly Operator
                  </h3>
                  <div className="meta">
                    Aug 2022 – Sep 2023 · Blanchardstown, Ireland
                  </div>
                  <p>
                    <strong>Part-time · 1 yr 2 mos</strong>
                  </p>
                  <ul>
                    <li>
                      Software Engineer Intern (Jun 2023 – Sep 2023): 3D renders in
                      Cabinet Vision; CNC machine integration
                    </li>
                    <li>
                      Assembly Operator (Aug 2022 – Jun 2023): Drilling machinery,
                      precision measuring, QA
                    </li>
                  </ul>
                </>
              )
            }
            onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
          >
            <div className="timeline-logo">
              <img src="BespaceLogo.jpg" alt="BeSpace" />
            </div>
            <h3>Software Intern / Operator</h3>
            <p>Aug 2022 – Sep 2023</p>
          </div>
        </div>
      </div>

      {/* Education Section */}
      <div className="education">
        <h2>Education</h2>
        <h5>Click the card for details</h5>
        <div className="timeline-horizontal">
          {/* TU Dublin */}
          <div
            className="timeline-card"
            tabIndex={0}
            role="button"
            aria-label="View details for TU Dublin"
            onClick={() =>
              openModal(
                <>
                  <h3 id="modal-title">
                    BSc Computer Science — Technological University Dublin
                  </h3>
                  <div className="meta">
                    2020 – 2024 · First Class Honours (GPA 3.3)
                  </div>
                  <p>
                    Key modules: Algorithms, Databases, Operating Systems, Software
                    Engineering.
                  </p>
                </>
              )
            }
            onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
          >
            <div className="timeline-logo">
              <img src="TUDublinLogo.png" alt="TU Dublin" />
            </div>
            <h3>BSc Computer Science</h3>
            <p>2020 – 2024</p>
          </div>

          {/* The Open College */}
          <div
            className="timeline-card"
            tabIndex={0}
            role="button"
            aria-label="View details for The Open College"
            onClick={() =>
              openModal(
                <>
                  <h3 id="modal-title">
                    Level 6 · Personal Training — The Open College
                  </h3>
                  <div className="meta">Sep 2021 – Dec 2021</div>
                  <p>Completed Level 6 certificate in personal training.</p>
                </>
              )
            }
            onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
          >
            <div className="timeline-logo">
              <img src="OpenCollegeLogo.jpg" alt="The Open College" />
            </div>
            <h3>Level 6 · Personal Training</h3>
            <p>Sep 2021 – Dec 2021</p>
          </div>
        </div>
      </div>

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
        <h3 style={{ color: 'white' }}>
          "Strive not to be a success, but rather to be of value" - Albert Einstein
        </h3>
      </footer>

      {/* ---- Modal Rendering ---- */}
      {modalContent && (
        <div
          className="modal-overlay"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              aria-label="Close modal"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="modal-body">{modalContent}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;