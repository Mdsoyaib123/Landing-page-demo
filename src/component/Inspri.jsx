
import ins1 from '../assets/insPriImg1.png'
import ins2 from '../assets/inspriImg2.png'
import ins3 from '../assets/inspriImg3.jpg'
const Inspri = () => {
  return (
    <div className="max-w-[1145px] mx-auto mb-10 mt-10 md:mt-0 px-8 md:px-0">
      <h1 className="text-center text-[#333333] text-xl lg:text-[32px] font-bold pb-0 md:pb-4">
        Inspiration Collection
      </h1>
      <p className="text-center text-[#666666] pb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div>
        <div className=" md:flex  gap-6 pt-0 md:pt-12 ">
          <img
            className="rounded-tl-[70px] pb-16 md:pb-0"
            src={ins1}
            alt=""
          />

          <img
            className="relative -top-8 pb-1 md:pb-0"
            src={ins2}
            alt=""
          />

          <img
            className="rounded-br-[70px] "
            src={ins3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Inspri;
