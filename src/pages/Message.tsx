const Message = () => {
  return (
    <div>
      <div className="w-full min-h-[400px]  flex items-center justify-center">
        <div className="w-[80%] min-h-[390px]  flex flex-col gap-4">
          <div style={{ color: "#5E7375" }} className="text-[14px]">
            <p> contact us --</p>
            <div className="text-[30px]" style={{ color: "#BDBDBD" }}>
              Get in touch with us
            </div>
          </div>

          <input
            className="w-full h-[100px] bg-black rounded-2xl border-b border-b-white p-4 
            placeholder:text-white outline-none "
            placeholder="enter your name"
            style={{ color: "#5E7375" }}
          />
          <input
            className="w-full h-[100px] bg-black rounded-2xl border-b border-b-white p-4 
            placeholder:text-white outline-none "
            placeholder="enter your name"
            style={{ color: "#5E7375" }}
          />
          <input
            className="w-full h-[100px] bg-black rounded-2xl border-b border-b-white p-4 
            placeholder:text-white outline-none "
            placeholder="enter your name"
            style={{ color: "#5E7375" }}
          />
          <button className="bg-white w-[150px] h-[40px] rounded-2xl">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Message;
