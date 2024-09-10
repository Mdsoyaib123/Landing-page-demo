import footerImg1 from "../../assets/footerImg1.png";
import footerImg2 from "../../assets/footerImg2.png";
import footerImg3 from "../../assets/footerIMg3.png";
import footerImg4 from "../../assets/footerImg4.png";
const Footer = () => {
  return (
    <div className="bg-[#03344F] py-10">
      <div className="max-w-[1145px] mx-auto flex  gap-10">
        <div className="space-y-5">
          <h1 className="text-[24px] font-bold pb-4 text-white">Beauty Care</h1>
          <p className="text-[#FFFFFF] leading-9">
            Do eiusmod tempor incididunt ut labore et <br /> dolore magna
            aliqua. Ut enim ad minim veniam,
            <br /> quis nostrud exercitation ullamco laboris.
          </p>
          <p className="text-white text-[24px] font-bold">Follow Us</p>
        </div>
        <div>
          <h1 className="text-[24px] font-bold pb-4 text-white" >Instagram Shop</h1>
          <div className="flex  gap-5">
            <div>
              <img src={footerImg1} alt="" />
            </div>
            <div>
              <img src={footerImg2} alt="" />
            </div>
            <div>
              <img src={footerImg3} alt="" />
            </div>
            <div>
              <img src={footerImg4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
