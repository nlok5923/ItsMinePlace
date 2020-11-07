import React, { Component } from 'react';
import './Projects.css';
class Projects extends Component {
  render() {
    return (
      <div className="project__section">
        <h1 className="proj__head"> Mine Projects </h1>
        <div className="projects">
          <div className="project">
            <img src="./Images/proj_1.png" alt="proj__img"></img>
            <div className="project__head">
              <h1>Certificate Generator</h1>
              <p>
                This is a template based certificate Generator.Generates certificate on user inputs
              </p>
              <div className="btn__usr">
                <a href="https://certificate-generatar.netlify.com/"><button className="view__proj">View</button></a>
                <a href="https://github.com/nlok5923/Certificate-Generator"><button className="proj__repo">Repo</button></a>
              </div>
            </div>
          </div>
          <div className="project rev">
            <div className="project__head">
              <h1>Github profile comparer</h1>
              <p>
                It helps you to get a quick compare of github profile with you and your friend.
              </p>
              <div className="btn__usr">
              <a href="https://profile-comparer.netlify.app/"><button className="view__proj">View</button></a>
                <a href="https://github.com/nlok5923/GitHub-profile-comparer"><button className="proj__repo">Repo</button></a>
              </div>
            </div>
            <img src="./Images/proj_2.png" alt="proj__img"></img>
          </div>
          <div className="project">
            <img src="./Images/proj_3.png" alt="proj__img"></img>
            <div className="project__head">
              <h1>ItsMinePlace</h1>
              <p>
                This is my portfolio where you can get to know me a bit.
              </p>
              <div className="btn__usr">
              <a href="https://itsmineplace.netlify.app/"><button className="view__proj">View</button></a>
                <a href="https://github.com/nlok5923/ItsMinePlace"><button className="proj__repo">Repo</button></a>
              </div>
            </div>
          </div>
          <div className="project rev">
            <div className="project__head">
              <h1>Litmus</h1>
              <p>
                A portal to keep your personal diaries as well as share some information with your friends.
              </p>
              <div className="btn__usr">
              <a href="http://litmus-app.herokuapp.com/litmus/signup/?next=/litmus/"><button className="view__proj">View</button></a>
                <a href="https://github.com/nlok5923/Litmus_Frontend"><button className="proj__repo">Repo</button></a>
              </div>
            </div>
            <img src="./Images/proj_4.png" alt="proj__img"></img>
          </div>
          <div className="project">
            <img src="./Images/proj_5.png" alt="proj__img"></img>
            <div className="project__head">
              <h1>Club Collaboration</h1>
              <p>
                A coherent protal where all the clubs of IIITV collaborate for events.
              </p>
              <div className="btn__usr">
              <a href="https://github.com/iiitv/club-collaboration-frontend"><button className="view__proj">View</button></a>
                <a href="https://github.com/iiitv/club-collaboration-frontend"><button className="proj__repo">Repo</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
