import Heropage from "./Heropage";
import Know from "./Know";
import Skills from "./Skills";
import Projects from "./Projects";
import Stuffs from "./Stuffs";
import Message from "./Message";

const Homescreen = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <Heropage />
      <Know />
      <Skills />
      <Stuffs />
      <Projects />
      <Message />
    </div>
  );
};

export default Homescreen;
