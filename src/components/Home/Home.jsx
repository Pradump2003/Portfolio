import bgImage from "../../assets/Images/bgimage.jpeg";
import pradum from "../../assets/Images/Pradum.jpeg";
import { Element } from "react-scroll";
import Button from "../Button/Button";

export default function Home() {
  return (
    <Element name="Home">
      <div className="py-20 sm:py-16 ">
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen">
          {/* Left Section */}
          <div className="flex flex-col justify-center items-center sm:items-start gap-4 p-6 sm:p-12">
            <h3 className="text-xl sm:text-2xl text-red-500 font-semibold text-center sm:text-start leading-relaxed font-castoro">
              Hello..
            </h3>
            <h1 className="text-lg sm:text-2xl md:text-3xl text-white text-center sm:text-start font-medium leading-relaxed font-castoro">
              I'm Pradum Prajapati <br />
              a passionate Full-Stack Developer <br />
              specializing in building modern and <br />
              scalable web applications.
            </h1>
            <div className="flex flex-row gap-4 sm:gap-8 mt-6 sm:mt-12">
              <a
                href="/Pradum.pdf"
                download="Pradum.pdf"
                className="text-blue-500 no-underline"
              >
                <Button text="Get My CV" styleType="primary" />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="mt-8 sm:mt-0">
            <img
              alt="Background"
              src={bgImage}
              className="h-72 sm:h-full w-full object-fill"
            />
          </div>
        </div>
      </div>
    </Element>
  );
}
