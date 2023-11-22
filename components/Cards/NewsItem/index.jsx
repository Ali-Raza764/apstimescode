import Link from "next/link";
import React from "react";
import { FaHackerNews, FaFileAlt } from "react-icons/fa"; // Import the React Icons

const NewsItem = ({ item }) => {
  return (
    <Link href={`/newsdetails/${item.slug}`}>
      <div className="w-[14rem] h-[14rem] border-2 border-gray-100 shadow-md wrapper p-4">
        <div className="flex flex-col h-full justify-between">
          <div className="tags flex items-center justify-between pb-3">
            <div className="tag border rounded-xl p-1 font-semibold text-red-500">
              <FaHackerNews className="w-5 h-5 text-red-500" />
            </div>
            <div className="tag border rounded-xl p-1 text-gray-900">
              <FaFileAlt className="w-5 h-5 text-gray-900" />
            </div>
          </div>

          <div className="news-title font-semibold text-2xl">
            {item.title}
          </div>

          <div className="date font-light text-md pt-3">
            <span className="font-bold text-gray-900">Dated: </span>
            <span className="italic font-semibold">{item.createdAt}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewsItem;
