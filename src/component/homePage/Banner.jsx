import { FaCaravan } from "react-icons/fa";
import { TbHours24 } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";

const Banner = () => {
  return (
    <div className="">
      <div className=" h-screen  ">
        <img
          className=" w-full h-full absolute "
          src="https://i.postimg.cc/vDFxThh6/scandinavian-interior-mockup-wall-decal-background-1961-259.jpg"
          alt=""
        />
        <div className="relative flex justify-end  top-14 -left-20 ">
          <div className="p-6 w-[643px]  border bg-[#DFE9F4] rounded-xl    ">
            <p className="text-[#111111] font-semibold">New Arrival</p>
            <h1 className="text-[52px] font-bold text-[#054C73] pt-2 ">
              Discover Our New Collection
            </h1>
            <p className="py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-[#054C73] text-white rounded-full py-[25px] px-[72px] mt-4">
              BUY NOW
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-[#F2F5FF] py-5   relative -top-12">
        <div className="text-[#333333]  flex justify-between max-w-[1145px] mx-auto">
          <div className="flex gap-3 items-center">
            <FaCaravan className="text-black" size={70}></FaCaravan>
            <div>
              <h4 className="text-xl font-semibold">Free Delivery</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <TbHours24 className="text-black" size={70}></TbHours24>
            <div>
              <h4 className="text-xl font-semibold">Support 24/7</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <MdVerifiedUser className="text-black" size={70}></MdVerifiedUser>
            <div>
              <h4 className="text-xl font-semibold">100% Authentic</h4>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
