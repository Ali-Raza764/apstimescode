import Image from "next/image";
import Link from "next/link";
import { AiOutlineEye, AiOutlineMessage, AiOutlineArrowRight } from "react-icons/ai";

const ArticleItem = ({ item }) => {
  return (
    <div className=" w-[18rem] border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden shadow-lg flex flex-col text-left">
      <Image
        className="lg:h-48 md:h-36 w-full object-cover object-center"
        src={item.mainImageUrl}
        alt="blog"
        loading="lazy"
        height={500}
        width={500}
        priority={false}
      />
      <div className="p-6">
        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
          {item.category}
        </h2>
        <h2 className="title-font text-lg font-medium text-gray-900 mb-3">
          {item.title}
        </h2>
        <p className="leading-relaxed mb-3 line-clamp-3 overflow-ellipsis h-[5.2rem]">
          {item.excerpt}
        </p>

        <div className="flex-props-b mt-auto">
          <Link
            href={`postdetails/${item.slug}`}
            className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
          >
            Read
            <AiOutlineArrowRight className="text-lg"/>
          </Link>
          <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
            <AiOutlineEye className="text-lg" />
            1.2K
          </span>
          <span className="text-gray-400 inline-flex items-center leading-none text-sm">
            <AiOutlineMessage className="text-lg"/>6
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
