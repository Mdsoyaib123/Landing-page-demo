import { useState } from "react";

const Navbar = () => {
  const navList = ["Home", "Services", "Doctors", "Products", "Gallery"];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center max-w-[1145px] mx-auto py-6">
      <div className="flex-1">
        <h1 className="text-3xl font-bold text-[#054C73]">Furniture</h1>
      </div>
      
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <div className="hidden md:flex flex-1 justify-between text-[#333333] font-semibold">
        {navList.map((item, index) => (
          <p className="hover:underline cursor-pointer" key={index}>
            {item}
          </p>
        ))}
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-[70px] right-0 bg-white shadow-md w-full text-center">
          {navList.map((item, index) => (
            <p
              className="hover:bg-gray-100 py-2 border-b cursor-pointer text-[#333333] font-semibold"
              key={index}
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
