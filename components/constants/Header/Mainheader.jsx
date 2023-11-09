import { navutil } from "./navutil";
import Link from "next/link";

const Mainheader = () => {
  return (
    <div className="wrappper hidden md:flex items-center  w-full">
      <div className="flex-props gap-x-[10%] p-2  w-full">
        <div>
           <Link href={'/'} className="flex title-font font-medium items-center text-gray-900 ">
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
        </div>
        

        <nav className="ml-2 flex items-center text-base justify-center">
          {navutil.map((item) => (
            <Link
              href={item.url}
              className="mr-5 cursor-pointer font-semibold hover:text-red-600"
              key={item.name}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Mainheader;
