import React from "react"
import "./About.css"


const About =()=>{
    return(
        <div className="compo">
            
            <h1>Hey <span class="wave">👋</span></h1>
            <img className="proImage" src="Images/demo.jpg" alt="earth Image"></img>
            <h1 className="proName">Nitanshu Lokhande</h1>
            <p>&emsp;&emsp;&emsp;&emsp;Student at IIIT Vadodara</p>
<br /><br />
<a href="https://www.facebook.com/nitanshu.lokhande.9/" class="fa fa-facebook"></a>
<a href="https://www.instagram.com/nit_lok/" class="fa fa-instagram"></a>
<a href="https://github.com/nlok5923" class="fa fa-github"></a>
<a href="https://www.linkedin.com/in/nitanshu-lokhande-5b60691a0/" class="fa fa-linkedin"></a>
        </div>
    );
  
    

}
export default About;