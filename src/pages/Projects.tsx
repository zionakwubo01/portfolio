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
              <div className="w-full h-[40px] bg-red-50"></div>
              <div className="w-full h-[40px] bg-red-50"></div>
              <div className="w-full h-[40px] bg-red-50"></div>
            </div>
            <div
              className="bg-yellow-300 row-span-1 h-[250px]  lg:h-[340px]"
              style={{ backgroundColor: "#191919" }}
            >
              1
            </div>
            <div
              className="bg-yellow-300 row-span-1  h-[250px]  lg:col-span-1 lg:h-[340px]"
              style={{ backgroundColor: "#191919" }}
            >
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
