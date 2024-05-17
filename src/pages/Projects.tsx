import { FaGithub } from "react-icons/fa";
import { GiFastArrow } from "react-icons/gi";

const Projects = () => {
  return (
    <div>
      <div className="w-full min-h-[600px] bg-black flex items-center justify-center">
        <div className="w-[90%] sm:w-[60%] lg:w-[80%] md:w-[60%] min-h-[500px]  grid grid-rows-2">
          <div className="lg:h-[340px] grid grid-rows-3 lg:grid-cols-3 md:grid-rows-3 gap-5 ">
            <div
              className=" row-span-1 
         h-[250px]  lg:h-[340px] flex gap-8 items-center  justify-center flex-col "
              style={{ backgroundColor: "#191919" }}
            >
              <div className="w-[250px] h-[40px]  flex items-center gap-3 justify-end">
                <div>
                  <a href="https://github.com/zionakwubo01/image_library.git">
                    <FaGithub color="white" size={18} />
                  </a>
                </div>
                <GiFastArrow color="white" size={25} />
              </div>
              <div className="w-full h-[40px]  text-white text-[20px] flex items-center justify-center">
                Photo Gallary{" "}
              </div>
              <div className="w-full h-[40px]  flex items-center justify-center gap-5">
                <div
                  className="min-w-[20px] px-2 text-white text-[11px] rounded-2xl"
                  style={{ backgroundColor: "#585858" }}
                >
                  React ts
                </div>
                <div
                  className="min-w-[20px] px-2 py-0.5 text-[11px] text-white rounded-2xl"
                  style={{ backgroundColor: "#585858" }}
                >
                  Node js& express
                </div>
                <div
                  className="min-w-[20px] px-2 text-[11px] text-white rounded-2xl
                  "
                  style={{ backgroundColor: "#585858" }}
                >
                  multer & cloudinary
                </div>
              </div>
            </div>
            <div
              className=" row-span-1 
         h-[250px]  lg:h-[340px] flex gap-8 items-center  justify-center flex-col "
              style={{ backgroundColor: "#191919" }}
            >
              <div className="min-w-[250px] h-[40px]  flex items-center gap-3 justify-end">
                <div>
                  <a href="https://github.com/zionakwubo01/school.git">
                    <FaGithub color="white" size={18} />
                  </a>
                </div>
                <GiFastArrow color="white" size={25} />
              </div>
              <div className="w-full h-[40px]  text-white text-[20px] flex items-center justify-center">
                school management system{" "}
              </div>
              <div className="w-full h-[40px]  flex items-center justify-center gap-5">
                <div
                  className="min-w-[20px] px-2 text-white text-[11px] rounded-2xl"
                  style={{ backgroundColor: "#585858" }}
                >
                  React Ts
                </div>
                <div
                  className="min-w-[20px] px-2 py-0.5 text-[11px] text-white rounded-2xl"
                  style={{ backgroundColor: "#585858" }}
                >
                  Node js & express
                </div>
                <div
                  className="min-w-[20px] px-2 text-[11px] text-white rounded-2xl
                  "
                  style={{ backgroundColor: "#585858" }}
                >
                  MongoDB
                </div>
              </div>
            </div>
            <div
              className=" row-span-1 
         h-[250px]  lg:h-[340px] flex gap-8 items-center  justify-center flex-col "
              style={{ backgroundColor: "#191919" }}
            >
              <div className="min-w-[250px] h-[40px]  flex items-center gap-3 justify-end">
                <div>
                  <a href="https://github.com/zionakwubo01/school.git">
                    <FaGithub color="white" size={18} />
                  </a>
                </div>
                <GiFastArrow color="white" size={25} />
              </div>
              <div className="w-full h-[40px]  text-white text-[20px] flex items-center justify-center">
                E.commerce Website{" "}
              </div>
              <div className="w-full h-[40px]  flex items-center justify-center gap-5">
                <div
                  className="min-w-[20px] px-2 text-white text-[11px] rounded-2xl"
                  style={{ backgroundColor: "#585858" }}
                >
                  React Ts & paystack
                </div>
                <div
                  className="min-w-[20px] px-2 py-0.5 text-[11px] text-white rounded-2xl"
                  style={{ backgroundColor: "#585858" }}
                >
                  Node js & express
                </div>
                <div
                  className="min-w-[20px] px-2 text-[11px] text-white rounded-2xl
                  "
                  style={{ backgroundColor: "#585858" }}
                >
                  MongoDB
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
