import { useState } from "react";
import { logo, close, menu } from "../assets/index";
import { navLinks } from "../constants/index";

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="flex justify-between py-6 items-center navbar">
      <img src={logo} alt="Logo" className="h-8 w-[124px]" />
      <ul className="list-none hidden sm:flex gap-6 items-center ">
        {navLinks.map((link, index) => (
          <li
            key={link.id}
            className="font-poppins text-white cursor-pointer text-base"
          >
            <a href={`#${link.id}`}>{link.title}</a>
          </li>
        ))}
      </ul>
      <div className="block sm:hidden">
        <img
          src={toggle ? close : menu}
          alt="Mobile Nav Menu"
          onClick={() => setToggle((prev) => !prev)}
          className="w-7 h-7 "
        />

        <div
          className={`${
            toggle ? "block" : "hidden"
          }  p-8 bg-black-gradient absolute top-20 right-0 mx-4 my-2 max-w-[250px] w-full rounded-xl sidebar`}
        >
          <ul className="list-none flex flex-col gap-6 items-center ">
            {navLinks.map((link, index) => (
              <li
                key={link.id}
                className="font-poppins font-medium text-white cursor-pointer text-lg"
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
