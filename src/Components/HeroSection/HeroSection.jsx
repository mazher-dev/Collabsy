
import "./HeroSection.css";
import Titlesection from "../titlesection/titlesection";
import background from "../../assets/bg-image-block.svg";

const HeroSection = () => {
  return (
    <div className="Hero">
      <Titlesection text="Home" backgroundColor="#fff" textColor="#5e2bff" />
      <div className="text">
        <h1>
          Transform Your <br />
          Team Collaborationly
        </h1>
        <p className="font.light text-white ">
          Collabsy streamlines team tasks, communication, and progress <br />
          tracking—all in one place. Achieve more with less effort!
        </p>
      </div>
      <div className="buttons">
        <a
          href="https://admiinsdashboard.netlify.app/"
          className="first-button"
        >
          Get started
        </a>
        <a
          href="https://admiinsdashboard.netlify.app/"
          className="second-button"
        >
          Try Demo
        </a>
      </div>
      <img src={background} alt="" />
    </div>
  );
};

export default HeroSection;
