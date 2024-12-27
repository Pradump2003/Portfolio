import bgImage from "../../assets/Images/bgimage.jpeg";
import pradum from "../../assets/Images/Pradum.jpeg";
import { Element } from "react-scroll";
import Button from "../Button/Button";

export default function Home() {
  return (
    <Element name="Home">
      <div className="grid grid-cols-2 h-screen ">
        <div className="flex flex-col justify-center gap-4 m-12">
          <h3 className="text-2xl text-red-500 font-semibold">Hello..</h3>
          <h1 className="flex text-3xl text-white font-medium leading-relaxed font-castoro">
            I'm Pradum Prajapati <br />
            a passionate Full-Stack Developer <br />
            specializing in building modern and <br />
            scalable web applications.
          </h1>
          <div className="flex flex-row gap-8 mt-12">
            <a
              href="public/Pradum.pdf"
              download="Pradum.pdf"
              style={{ textDecoration: "none", color: "blue" }}
            >
              <Button text="Get My CV" styleType="primary" />
            </a>
          </div>
        </div>
        <img alt="Background Image" src={bgImage} className="h-screen w-full" />
      </div>
    </Element>
  );
}
