import img1 from "../../assets/1.png";
import img2 from '../../assets/2.png'
import img3 from '../../assets/3 (1).png'
const HowItWork = () => {
  return (
    <div className="text-center py-12 mb-10 max-w-[1145px] mx-auto">
      <h1 className="text-[32px] font-bold ">How It Works</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className=" md:flex gap-6 pt-12 px-10 md:px-0">
        <div>
          <img className="rounded-xl pb-4" src={img1} alt="" />
          <h1 className="text-[#333333] py-2 font-bold text-[24px]">Purchase Securely</h1>
          <p className="text-[#666666]">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
        </div>
        <div>
          <img  className="rounded-xl pb-4" src={img2} alt="" />
          <h1 className="text-[#333333] py-2 font-bold text-[24px]">Ships From Warehouse</h1>
          <p className="text-[#666666]">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
        </div>
        <div>
          <img  className="rounded-xl pb-4" src={img3} alt="" />
          <h1 className="text-[24px] font-bold text-[#333333] py-2">Style Your Room</h1>
          <p className="text-[#666666]">Lorem ipsum dolor sit amet, consectetur <br/> adipiscing elit.</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
