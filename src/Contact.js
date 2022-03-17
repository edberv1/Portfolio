import logo from "./images/logo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";



const Contact = () =>{

return (
        <div className="contact"   id='contact'>

            <div className="contact-container">

                <div className="info">
                    <h5 className="contacti">CONTACT</h5>
                    <p>Do you want to work with me? <br/>Then contact me so we can <br/> get in touch and  I will try  <br/> my best to help you.</p> 
                    <br /><br />
                    <a href="mailto:edberv1@gmail.com">edberv1@gmail.com</a>
                    <p>Tel: +383 49 107 955</p>
                </div>   

                <div className="form-container">
                    <form>
                        <div className="nameEmail">
                        <input type="text" placeholder="Name" className="emri"/>
                        <input type="text" placeholder="Email" className="emaili"/>
                        </div>
        
                        <input type="text" placeholder="Phone" className="nr"/>
                        <input type="text" placeholder="Message" className="mesazh" />
                        <button className="sendbtn">SEND</button>
                    </form>
                </div>
                <div className="social">
                    <a href="https://github.com/edberv1" className="github" target="_blank"> <FaGithub /> </a>
                    <a href="https://twitter.com/edberv1" className="twitter" target="_blank"> <FaTwitter /> </a>
                    <a href="https://www.linkedin.com/in/edber-vu%C3%A7it%C3%ABrna-aa205b22b/" className="linkedin" target="_blank"> <FaLinkedin /> </a> 
                    <a href="https://www.google.com/maps/place/Rahovec/@42.3977229,20.6330539,14z/data=!3m1!4b1!4m5!3m4!1s0x1353a3ba2f86a9a3:0x3a75ac91014b3bdd!8m2!3d42.3998273!4d20.6528002" className="map" target="_blank"> <FaMapMarkerAlt /> </a>
                </div>
            </div>

            




            

            <footer className="footer">
                <img src={logo} alt="logo" className="footerlogo"/>
                <p>© 2022 by Edber Vuçitërna.</p>

                    <div className="backTop"><a href="#home"  className="top"><FaArrowUp /></a></div>
                    
            </footer>

        </div>
    )
}

export default Contact