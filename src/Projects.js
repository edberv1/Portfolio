import home from "./images/home.png"
import about from "./images/about.png"
import give from "./images/give.png"
import poster from "./images/poster.jpg"
import { FaArrowDown } from "react-icons/fa";

const Projects = () =>{
    return (
        <div className="projects">
            <h1 className="h1prj" id='projects'>PROJECTS</h1>
            <h3 className="h3prj">These are some of my projects! <br /> For more contact me. <a href='#contact' style={{color: "grey"}}> <FaArrowDown /></a> </h3>

            <div className="myproj">

            <div className="flip-box">
                        <div class="flip-box-inner">
                        <div class="flip-box-front">
                        <img src={home} alt="Home" className="photo" />
                </div>

                    <div class="flip-box-back">
                    <h2>GiveHelp</h2>
                    <p>This is a website made by me using HTML, CSS, JavaScript, and NodeJs. The main purpose of this website is to help and save nature!</p>
                    <div className="img-container">
                    <img src={about} alt="About" className="about-img"/>
                    <img src={give} alt="Give" className="give-img"/>
                    </div>
                    </div>
                </div>
            </div>

            <div className="flip-box-i">
                <div class="flip-box-inner-i">
                    <div class="flip-box-front-i">
                    <img src={poster} alt="Poster" className="photo-i" />
            </div>

            <div class="flip-box-back-i">
                <h2>Our world is Imperiling!</h2>
                <p style={{fontSize:"16px"}}>This is a poster I made with Adobe Illustrator. It raises awareness against air and water  pollution, also a reminder that misuse of technology can be to our detriment.</p>
                <div className="img-container-i">
                </div>
                </div>
            </div>
            

            </div>

            </div>


        </div>   
    )



    
}

export default Projects

