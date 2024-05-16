import Heropage from "./Heropage";
import Know from "./Know";
import Skills from "./Skills";
import Projects from "./Projects";
const Homescreen = () => {
  return (
    <div className="flex flex-col gap-5 ">
      <Heropage />
      <Know />
      <Skills />

      <Projects />
    </div>
  );
};

export default Homescreen;
