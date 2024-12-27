import About from "../About/About";
import Contact from "../Contact/Contact";
import Education from "../Education/Education";
import Home from "../Home/Home";
import Project from "../Project/Project";
import Skills from "../Skills/Skills";

export default function Portfolio() {
    return(
       <>
        <Home />
        <About />
        <Skills />
        <Project />
        <Education />
        <Contact />
        
       </> 
    )
}