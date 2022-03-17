import logo from "./images/logo.png";

const About = () =>{

    return (
        <div className="about">
            <div className="aboutme"  id='about'>
                <img src={logo} alt="Logo" className="aboutLogo" />
                <p>Hey there! I am Edber Vuçitërna a Web Developer. I started learning Web Developement back in 2018, when I was a high school freshman. Presently I am a  first year student in the bachelor degree of "Computer Science and Engineering" at <a href="https://www.ubt-uni.net/en/home/" target="_blank" className="ubt">UBT - Higher Education Institution</a> </p>
                <button className="resume-btn">DOWNLOAD RESUME</button>
            </div>
        </div>
    )
}

export default About