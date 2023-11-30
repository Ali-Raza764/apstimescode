import Link from "next/link";
import { BiSolidCategory } from "react-icons/bi";

const Dropdown = () => {
  return (
    <div className="relative dropdown mt-[-1rem] md:mt-0 mb-2 md:mb-0 text-left">
      <button className="flex items-center p-2 bg-whiterounded-md">
        <span className="mr-4 flex-props-c md:gap-x-[4rem] gap-x-[2.6rem] text-2xl md:text-lg font-bold md:font-semibold"><BiSolidCategory className="md:hidden text-red-500"/> Categories</span>
      </button>
      <div className="absolute hidden right-0 left-0 py-2 mt-0 bg-white rounded-md shadow-xl w-44 font-semibold">
        <Link
          href="/articles/programming"
          className="block px-4 py-2 text-lg text-gray-900 hover:bg-gray-400 hover:text-white font-semibold"
        >
          Programming
        </Link>
        <Link
          href="/articles/exams"
          className="block px-4 py-2 text-lg  text-gray-900 hover:bg-gray-400 hover:text-white font-semibold"
        >
          Exams
        </Link>
      </div>
    </div>
  );
};

export default Dropdown;
