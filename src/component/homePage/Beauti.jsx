import beuti from "../../assets/beutiImg1.png";

const Beauti = () => {
  return (
    <div className="bg-[#F2F5FF] lg:mt-16 mb-10 lg:mb-0 px-10 md:px-0">
      <div className="max-w-[1145px] h-[600px]  mx-auto lg:flex justify-between items-center">
        <div className="space-y-5">
          <h1 className="text-[32px] font-bold text-[#333333]">
            Beautify Your Space
          </h1>
          <p className="text-[#333333] text-[20px]">
            Do eiusmod tempor incididunt ut labore et <br></br> dolore magna
            aliqua. Ut enim ad minim veniam,
            <br /> quis nostrud exercitation ullamco laboris.
          </p>
          <button className="bg-[#054C73] text-white rounded-full py-[25px] px-[72px] mt-4">
            Learn More
          </button>
        </div>
        <div className="pt-24 md:pt-0">
          <div className=" p-3 m-5 bg-green-800 rounded-full h-[350px] w-[350px] flex justify-center items-center">
            <img
              className="w-[400px] mr-20 rounded-tl-[60px] rounded-br-[60px] rounded-tr-[10px] rounded-bl-[10px]"
              src={beuti}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Beauti;
