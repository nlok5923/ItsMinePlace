import React from "react"
import "./navbar.css"


const Navbar =()=>{
    return(
        <div className="container">
        <div className="box1">
        <button className="btn extra1"> About</button>

        </div>
        <div className="box2">
        <button className="btn"> Know Me </button>

        </div>
        <div className="box3">

    <button className="btn extra2"> Projects </button>
        </div>
        </div>
    );



}
export default Navbar;