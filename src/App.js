import "./App.css";
import { useEffect } from "react";
import Home from "./Home";
import Experience from "./Experience";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";



function App() {

  useEffect(() => {
    document.title = "Portfolio"
  }, [])
  
  return (
    <>
    <Home />
    <About />
    <Experience />
    <Projects />
    <Contact />    
    </>
  )

  ;
}

export default App;
