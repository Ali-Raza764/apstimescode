import { BlogItem } from "@/components";
import { fetchAndFilterBlogs } from "@/utils/fetchAndFilterBlogs";

const page = async ({ params }) => {
  const BlogData = await fetchAndFilterBlogs({
    pageType: "articles/category",
    category: `${params.category}`,
  });
  console.log(BlogData);
  return (
    <div className="w-full flex-props-c flex-col">
      <h1 className="text-3xl font-bold uppercase mt-6">{params.category}</h1>
      <div className="px-2 py-4 sm:p-6 flex-props flex-wrap my-3 gap-y-5 gap-x-5">
        {BlogData.map((item) => {
          return <BlogItem item={item} key={item.title} />;
        })}
      </div>
    </div>
  );
};

export default page;
