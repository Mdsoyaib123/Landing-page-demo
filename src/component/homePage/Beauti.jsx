const Beauti = () => {
  return (
    <div className="bg-[#F2F5FF] mt-16 ">
      <div className="max-w-[1145px] h-[600px]  mx-auto flex justify-between items-center">
        <div className="space-y-5">
          <h1 className="text-[32px] font-bold text-[#333333]">Beautify Your Space</h1>
          <p className="text-[#333333] text-[20px]">
            Do eiusmod tempor incididunt ut labore et <br></br> dolore magna aliqua. Ut
            enim ad minim veniam,<br/> quis nostrud exercitation ullamco laboris.
          </p>
          <button className="bg-[#054C73] text-white rounded-full py-[25px] px-[72px] mt-4">
            Learn More
          </button>
        </div>
        <div className="">
          <div className=" p-3 m-5 bg-green-800 rounded-full h-[350px] w-[350px] flex justify-center items-center">
          <img className="w-[400px] mr-20 rounded-tl-[60px] rounded-br-[60px] rounded-tr-[10px] rounded-bl-[10px]" src="https://i.postimg.cc/pLv0MQ87/10-09-2024-02-07-44-REC-1.png" alt="" />
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default Beauti;
