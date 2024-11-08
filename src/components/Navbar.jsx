"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { title: "Home", href: "#" },
    { title: "About Us", href: "#" },
    { title: "Services/Work", href: "#" },
    { title: "Career", href: "#" },
    { title: "School", href: "#" },
    { title: "Contact", href: "#" },
    { title: "Blog", href: "#" },
  ];

  return (
    <>
      {/* Hamburger Menu Icon */}
      <div className="fixed top-[40px] right-[100px] text-[40px] cursor-pointer z-50">
        {isOpen ? (
          <IoMdClose onClick={handleOpen} className="text-white" />
        ) : (
          <GiHamburgerMenu onClick={handleOpen} />
        )}
      </div>

      {/* Main Menu */}
      <div
        className={`fixed bg-[#002626]/95 text-white flex justify-center items-center text-[20px] tracking-[1px] transition-all duration-500 ease-in-out ${
          isOpen ? "w-full" : "w-0"
        } h-[100vh] overflow-hidden`}
      >
        <ul className="flex flex-col gap-8">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`duration-500 hover:translate-y-[-5px] overflow-hidden ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-[-50px] opacity-0"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <a
                href={item.href}
                onClick={handleOpen}
                className="relative group"
              >
                {item.title}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Heading and Some Text */}
      <div className="flex items-center h-screen m-auto max-w-[70ch] px-6">
        <div>
          <h1 className="text-[45px] mb-[20px] tracking-[1px] font-bold">
            Hamburger Menu
          </h1>
          <span className="font-semibold">
            <p className="mb-[15px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde numquam
              odit fuga nulla dicta quasi!
            </p>
            <p className="mb-[15px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde numquam
              odit fuga nulla dicta quasi!
            </p>
            <p className="mb-[15px]">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde numquam
              odit fuga nulla dicta quasi!
            </p>
          </span>
        </div>
      </div>
    </>
  );
};

export default Navbar;