import React from "react"
import "./About.css"


const About =()=>{
    return(
        <div className="compo">
            {/* <h1>Hey !!</h1> */}
             <h1>Hey <span class="wave">&#128075;</span></h1> 
            <img className="proImage" src="Images/demo.jpg" alt=""></img>
            <h1 className="proName">Nitanshu Lokhande</h1>
            <p>&emsp;&emsp;&emsp;&emsp;Student at IIIT Vadodara</p>
<br /><br />
<a href="https://www.facebook.com/nitanshu.lokhande.9/" class="fa fa-facebook">&emsp;</a>
<a href="https://www.instagram.com/nit_lok/" class="fa fa-instagram">&emsp;</a>
<a href="https://github.com/nlok5923" class="fa fa-github">&emsp;</a>
<a href="https://www.linkedin.com/in/nitanshu-lokhande-5b60691a0/" class="fa fa-linkedin">&emsp;</a>
        </div>
    );
  
    

}
export default About;