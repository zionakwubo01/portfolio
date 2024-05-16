import { FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { TiHtml5 } from "react-icons/ti";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { useState, useEffect } from "react";
const Skills = () => {
  const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      if (window.screenY > 400) {
        setisVisible(true);
      } else {
        setisVisible(false);
      }
    };
    window.addEventListener("scroll", handlescroll);
  }, []);

  return (
    <div>
      <div className="w-full min-h-[300px] bg-black flex items-center justify-center">
        <div
          className={`w-[90%] lg:w-[80%] min-h-[300px]  grid grid-rows-3 gap-5 mt-[30px] lg:mt-[5px]  
          transition-all duration-500 ease-in-out`}
        >
          <div className="col-span-1 grid grid-cols-2  gap-[60px] lg:grid-cols-4 ">
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[70px] "
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <IoLogoJavascript color={"white"} size={20} />
              </div>
              <p className="text-white font-bold">Javascript</p>
            </div>
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[70px]"
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <FaReact color={"white"} size={20} />
              </div>
              <p className="text-white font-bold">ReactTS</p>
            </div>
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[70px]"
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <RiTailwindCssFill color={"white"} size={20} />
              </div>
              <p className="text-white font-bold">TailwindCSS</p>
            </div>
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[70px]"
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <IoLogoCss3 color={"white"} size={20} />
              </div>
              <p className="text-white font-bold">CSS</p>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-2  gap-[60px] lg:grid-cols-4 ">
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[70px] "
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <TiHtml5 color={"white"} size={20} />
              </div>
              <p className="text-white font-bold">HTML</p>
            </div>
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[70px]"
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <FaGitAlt color={"white"} size={20} />
              </div>
              <p className="text-white font-bold">Git</p>
            </div>
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[70px]"
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <FaGithub color={"white"} size={20} />
              </div>
              <p className="text-white font-bold">Github</p>
            </div>
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[70px]"
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <FaNode color={"white"} size={20} />
              </div>
              <p className="text-white font-bold">NodeJS</p>
            </div>
          </div>
          <div className="col-span-1 grid grid-cols-2  gap-[60px] lg:grid-cols-4 ">
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[70px] "
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <DiMongodb color={"white"} size={20} />
              </div>
              <p className="text-white font-bold">MongoDB</p>
            </div>
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[70px]"
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <SiExpress color={"white"} size={20} />
              </div>
              <p className="text-white font-bold">Express</p>
            </div>
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[70px]"
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <SiPostman color={"white"} size={20} />
              </div>

              <p className="text-white font-bold">Postman</p>
            </div>
            <div
              className="row-col-1 flex items-center justify-center gap-5 h-[]"
              style={{ backgroundColor: "#191919" }}
            >
              <div>
                <SiTypescript color={"white"} size={20} />
              </div>
              <p className="text-white font-bold">Typescript</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
