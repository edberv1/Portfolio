import logo from "./images/logo.png";


const Home = () => {
  return (
    <div className="home" id="home">
      <nav className="navbar">
        <div className="nav-center">
          <img src={logo} alt="Logo" className="logo" />
          <a href="Home" className="a-home">
            Home
          </a>
          <a href="#about" className="a">
            About
          </a>
          <a href="#experience" className="a">
            Experience
          </a>
          <a href="#projects" className="a">
            Projects
          </a>
          <a href="#contact" className="a">
            Contact
          </a>
        </div>
      </nav>

      <h1 className="p1">
        I<span className="different">'</span>M 
        <br/> EDBER VUÇITËRNA
        <span className="different">.</span>
      </h1>
      <p className="p2">WEB DEVELOPER</p>

      
    </div>
  );
};
export default Home;