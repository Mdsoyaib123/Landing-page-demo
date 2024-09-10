import browseImg1 from '../../assets/browseImg1.png'
import browseImg2 from '../../assets/browseImg2.png'
import browseImg3 from '../../assets/browseImg3.png'
const Browse = () => {
  return (
    <div className="border-b px-8 md:px-0 mt-64 lg:mt-0">
      <div className="text-[#333333] text-center max-w-[1145px] mx-auto py-12 ">
        <h1 className="text-[32px] font-bold">Browse The Range</h1>
        <p className="py-2 pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className=" md:flex gap-5">
          <div className=" cursor-pointer">
            <img
              className="rounded-xl"
              src={browseImg1}
              alt=""
            />
            <h1 className="py-2 text-[24px] font-semibold"> Dining</h1>
          </div>
          <div className="cursor-pointer">
            <img
              className="rounded-xl"
              src={browseImg2}
              alt=""
            />
            <h1 className="py-2 text-[24px] font-semibold">Living</h1>
          </div>
          <div className="cursor-pointer">
            <img
              className="rounded-xl"
              src={browseImg3}
              alt=""
            />
            <h1 className="py-2 text-[24px] font-semibold">Bedroom</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
