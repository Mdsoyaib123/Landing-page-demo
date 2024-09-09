const Inspri = () => {
  return (
    <div className="max-w-[1145px] mx-auto">
      <h1 className="text-center text-[#333333] text-[32px] font-bold">
        Inspiration Collection
      </h1>
      <p className="text-center text-[#666666] pb-8">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="flex  gap-10 pt-14 absolute">
        <img
          className="rounded-tl-[70px]"
          src="https://i.postimg.cc/R0j4b2m4/Clipboard.jpg"
          alt=""
        />

       
          <img className="relative -top-9" src="https://i.postimg.cc/htvn4KPK/Clipboard-1.jpg" alt="" />
       
        <img
        className="rounded-br-[70px]"
          src="https://i.postimg.cc/nM8mF3qJ/CLA05-W-1-600x700-1.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Inspri;
