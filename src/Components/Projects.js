import React, { Component } from 'react'
import "./Projects.css"
class Projects extends Component {
    render() {
        return (
            <div className="project__section">
                <h1 className="proj__head"> Mine Projects </h1>
                <div className ="projects">
                <div className="project">
                <img src="./Images/lightyear.jpg" alt="proj__img"></img>
                <div className ="project__head">
                <h1>This is sample project</h1>
                <p>This is the sample data for the sample project listed here so that user get to know about it</p>
                <div className="btn__usr">
                <button className="view__proj">View</button>
                <button className="proj__repo">Repo</button>
                </div>
                </div>
                </div>
                <div className="project">
                <div className ="project__head">
                <h1>This is sample project</h1>
                <p>This is the sample data for the sample project listed here so that user get to know about it</p>
                <div className="btn__usr">
                <button className="view__proj">View</button>
                <button className="proj__repo">Repo</button>
                </div>
                </div>
                <img src="./Images/lightyear.jpg"  alt="proj__img"></img>
                </div>
                <div className="project">
                <img src="./Images/lightyear.jpg"  alt="proj__img"></img>
                <div className ="project__head">
                <h1>This is sample project</h1>
                <p>This is the sample data for the sample project listed here so that user get to know about it</p>
                <div className="btn__usr">
                <button className="view__proj">View</button>
                <button className="proj__repo">Repo</button>
                </div>
                </div>
                </div>
                <div className="project">
                <div className ="project__head">
                <h1>This is sample project</h1>
                <p>This is the sample data for the sample project listed here so that user get to know about it</p>
                <div className="btn__usr">
                <button className="view__proj">View</button>
                <button className="proj__repo">Repo</button>
                </div>
                </div>
                <img src="./Images/lightyear.jpg"  alt="proj__img"></img>
                </div>
                </div>
            </div>
        )
    }
}

export default Projects
