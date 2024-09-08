const Navbar = () => {
  const navList = ["Home", "Services", "Doctors", "Products", "Gallery"];
  return (
    <div className="flex items-center max-w-[1145px]  mx-auto py-4 ">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[#054C73]">Furniture</h1>
      </div>
      <div className="flex flex-1 justify-between text-[#333333] font-semibold">
        {navList.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
