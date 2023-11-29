import { BlogItem } from "@/components";
import { fetchAndFilterBlogs } from "@/utils/fetchAndFilterBlogs";

const page = async() => {
  const allBlogDataArticles = await fetchAndFilterBlogs({ pageType: "articles" });
  console.log("Articles page data \n", BlogData);

  return (
    <section>
      <div className="container px-5 sm:px-8 py-8 mx-auto">
        <div className="flex-props flex-wrap w-full gap-5">
        {BlogData.map((item) => {
          return <BlogItem item={item} key={item.title} />;
        })}
        </div>
      </div>
    </section>
  );
};

export default page;
