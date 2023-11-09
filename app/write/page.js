import Link from "next/link";
import React from "react";
import { AiFillFileText } from "react-icons/ai";
import { FaPlus, FaEdit  } from "react-icons/fa";

const page = () => {
  return (
    <div className=" flex-props flex-col gap-y-8 py-8">
      <Link
        href="/createnews"
        className="w-[85%] h-36 border-2 border-gray-500 shadow-xl rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white"
      >
        <FaPlus className="w-8 h-8 mr-2" />
        <h2 className="text-gray-800 text-xl mx-3 font-semibold"> Create News</h2>
         <FaEdit  className='w-8 h-8 '/>
      </Link>

      <Link
        href="/createarticle"
        className="w-[85%] h-36 border-2 border-gray-500 shadow-xl rounded-lg flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white"
      >
        <FaPlus className="w-8 h-8 mr-2" />
        <h2 className="text-gray-800 text-xl mx-3 font-semibold">Create Articles</h2>
        <AiFillFileText  className='w-8 h-8 '/>
      </Link>
    </div>
  );
};

export default page;
