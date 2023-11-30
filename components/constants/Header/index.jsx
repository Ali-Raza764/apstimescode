import Navbar from "./components-header/Navbar";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Mainheader from "./components-header/Mainheader";
import Link from "next/link";

const Header = () => {
  return (
    <header className="z-10 w-full flex-props-b sm:gap-x-[4rem] md:gap-x-6 text-center border-b border-gray-500 px-2 sm:px-4 sticky top-0 bg-white py-2 md:py-1">
      <Mainheader />
      <Navbar />
      <Link
        href={"/"}
        className="md:hidden flex flex-start title-font font-medium items-center text-gray-900 "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          cursor-pointer="round"
          strokeWidth="2"
          className="w-10 h-10 text-white p-2 bg-green-800 rounded-full"
          viewBox="0 0 24 24"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-1 text-xl font-bold">Aps Times</span>
      </Link>

      <div className="flex-props gap-x-2">
        <a href="https://instagram.com">
          <FaInstagram className="text-2xl" />
        </a>
        <a href="https://whatsapp.com">
          <FaWhatsapp className="text-2xl" />
        </a>
      </div>

    </header>
  );
};

export default Header;
