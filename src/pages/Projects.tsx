const Projects = () => {
  return (
    <div>
      <div className="w-full min-h-[600px] bg-black flex items-center justify-center">
        <div className="w-[90%] sm:w-[60%] lg:w-[80%] md:w-[60%] min-h-[500px] bg-red-300 grid grid-rows-2">
          <div className="bg-green-200  lg:h-[340px] grid grid-rows-3 lg:grid-cols-3 md:grid-rows-3 gap-5 ">
            <div
              className="bg-yellow-300 row-span-1 
         h-[300px]  lg:h-[340px]"
            >
              1
            </div>
            <div className="bg-yellow-300 row-span-1 h-[300px]  lg:h-[340px]">
              1
            </div>
            <div className="bg-yellow-300 row-span-1  h-[300px]  lg:col-span-1 lg:h-[340px]">
              1
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
