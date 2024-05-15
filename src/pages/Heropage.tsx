

const Heropage = () => {
  return (
    <div>
      <div className="w-full h-[70vh] bg-black flex items-center justify-center">
        <div className="w-[90%]  lg:w-[80%] h-full flex flex-col gap-7  ">
          <div className="mt-[50px] text-[14px]" style={{ color: "#5E7375" }}>
            ABOUT ---
          </div>

          <div
            className="text-[25px] font-bold lg:text-[40px]"
            style={{ color: "#BDBDBD" }}
          >
            Hi, I’m Zion👋
          </div>
          <div className="text-[15px] " style={{ color: "#5E7375" }}>
            i am 18-year-old developer and an SSCE. Graduate guy, passionate
            about crafting beautiful web application and fully functional.
            currently exploring MERN stack and diving into data structure, i
            bring innovative mindset to every project. with my eye for design i
            work tirelessly to ensure that each application is beautiful, fully
            functional, and easy to navigate.
          </div>
          <div className="text-[15px] " style={{ color: "#5E7375" }}>
            Beyond coding, i enjoying writing articles, playing football,
            basketball and table tennis, and staying active with tech
            communities, i value collaboration, respect diverse ideas, and am
            seeking opportunity to contribute to organizational growth.
          </div>
          <div className="flex flex-col gap-[1px]">
            <p
              className="text-white font-extrabold  text-[14px] lg:text-[15px] h-[20px] w-[360px]
             hover:bg-red-50 hover:text-black  hover:transition-all duration-500 cursor-pointer"
            >
              Let's work together & build some cool stuffs!
            </p>
            <div className="h-[3px] w-[360px] bg-red-50"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Heropage;
