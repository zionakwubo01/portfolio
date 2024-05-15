import img from "../assets/react.svg";
const Header = () => {
  return (
    <div>
      <div className="w-full h-[80px] bg-black flex items-center justify-center ">
        <div className=" w-[90%] lg:w-[80%] md:w-[90%] h-full flex flex-row gap-3 items-center">
          <div
            className="w-[60px] h-[60px] lg:w-[70px] lg:h-[70px] bg-yellow-600 rounded-full 
         flex items-center justify-center   "
          >
            <img src={img} />
          </div>
          <div>
            <p className="text-white lg:text-[27px] text-[16px]">Zion Akwubo</p>
            <p className="text-white lg:text-[15px]  text-[13px]">
              full stack developer/node js & React 👩‍💻
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
