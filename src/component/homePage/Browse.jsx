const Browse = () => {
  return (
    <div className="border-b">
      <div className="text-[#333333] text-center max-w-[1145px] mx-auto py-12 ">
        <h1 className="text-[32px] font-bold">Browse The Range</h1>
        <p className="py-2 pb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex gap-5">
          <div className=" cursor-pointer">
            <img
              className="rounded-xl"
              src="https://i.postimg.cc/tCkryZ54/10-09-2024-16-43-53-REC-1.png"
              alt=""
            />
            <h1 className="py-2 text-[24px] font-semibold"> Dining</h1>
          </div>
          <div className="cursor-pointer">
            <img
              className="rounded-xl"
              src="https://i.postimg.cc/nLrVTDdj/10-09-2024-16-52-24-REC-1.png"
              alt=""
            />
            <h1 className="py-2 text-[24px] font-semibold">Living</h1>
          </div>
          <div className="cursor-pointer">
            <img
              className="rounded-xl"
              src="https://i.postimg.cc/XYT1DMLf/10-09-2024-16-54-08-REC-1.png"
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
