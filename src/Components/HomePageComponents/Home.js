import React from "react"
import Navbar from "./navbar/Navbar";
import About from "../About";
import Project from "../Projects"

const Home =()=>
{
    return(<div>
      <About />
        <Navbar />
        <Project />
      
        </div>);

}
export default Home;