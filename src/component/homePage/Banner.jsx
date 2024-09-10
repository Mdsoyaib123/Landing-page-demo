import { FaCaravan } from "react-icons/fa";
import { TbHours24 } from "react-icons/tb";
import { MdVerifiedUser } from "react-icons/md";

const Banner = () => {
  return (
    <div className="">
      <div className="h-screen relative">
        <img
          className="w-full h-full absolute object-cover"
          src="https://i.postimg.cc/vDFxThh6/scandinavian-interior-mockup-wall-decal-background-1961-259.jpg"
          alt=""
        />
        <div className="relative hi lg:flex justify-end top-16 md:top-20 lg:-left-20 p-4">
          <div className="p-6 w-full md:w-[643px] border bg-[#DFE9F4] rounded-xl">
            <p className="text-[#111111] font-semibold text-sm md:text-base">New Arrival</p>
            <h1 className=" md:text-[52px] font-bold text-[#054C73] pt-2">
              Discover Our New Collection
            </h1>
            <p className="py-4 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <button className="bg-[#054C73] text-white rounded-full py-2 md:py-[25px] px-8 md:px-[72px] mt-4 text-sm md:text-base">
              BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* Feature Section */}
      <div className="bg-[#F2F5FF] py-5 relative md:-top-12">
        <div className="text-[#333333] flex flex-col md:flex-row justify-around items-center gap-6 md:gap-0 max-w-[1145px] mx-auto px-4 md:px-0">
          <div className="flex gap-3 items-center text-center md:text-left">
            <FaCaravan className="text-black" size={50} />
            <div>
              <h4 className="text-lg md:text-xl font-semibold">Free Delivery</h4>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center text-center md:text-left">
            <TbHours24 className="text-black" size={50} />
            <div>
              <h4 className="text-lg md:text-xl font-semibold">Support 24/7</h4>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
          <div className="flex gap-3 items-center text-center md:text-left">
            <MdVerifiedUser className="text-black" size={50} />
            <div>
              <h4 className="text-lg md:text-xl font-semibold">100% Authentic</h4>
              <p className="text-sm">Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;