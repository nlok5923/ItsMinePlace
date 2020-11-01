import React, { Component } from 'react'
import "./Projects.css"
class Projects extends Component {
    render() {
        return (
            <div className="project__section">
                <h1> Mine Projects </h1>
                <div className ="projects">
                <div className="project">
                    <img src="./Images/lightyear.jpg" alt="proj__img"></img>
                </div>
                <div className="project">
                <img src="./Images/lightyear.jpg"  alt="proj__img"></img>
                </div>
                <div className="project">
                <img src="./Images/lightyear.jpg"  alt="proj__img"></img>
                </div>
                <div className="project">
                <img src="./Images/lightyear.jpg"  alt="proj__img"></img>
                </div>
                </div>
            </div>
        )
    }
}

export default Projects
