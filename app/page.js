import { BlogItem } from "@/components";
import Image from "next/image";

export default async function Home() {
  const apiUrl = process.env.NODE_ENV === 'development' ? "http://localhost:3000/api/getAllBlogs" : "https://apstimesblog.netlify.app";
  const sample = await fetch(apiUrl, { cache: "no-store" });
  const alldata = await sample.json();
  const ArticleData = alldata.message || []; // check that the data exists and it is an array

  return (
    <main className="min-h-screen px-6 sm:px-11 py-4 sm:py-11 flex-props flex-col">
      <section className=" text-black flex flex-col items-center md:flex-row gap-x-8 md:h-[53vh] gap-y-2 mb-8">
        {/* Left Side (Image) */}
        <div className="w-full md:w-[50%]">
          <Image
            src="/image.webp"
            alt="Technology"
            width={700}
            height={500}
            fetchPriority="high"
            className="rounded-md hidden md:block object-cover object-center"
          />
        </div>

        {/* Right Side (Text and Heading) */}
        <div className="w-full md:w-[50%] text-left">
          <h1 className="text-4xl font-bold mb-4 animate-fade-left">
            Welcome to APS Times
          </h1>
          <p className="text-lg text-gray-800 mb-3">
            Your Source for Technology and Coding Insights
          </p>
          <p className="mb-6 text-gray-600">
            At APS Times, we're dedicated to providing you with the latest
            insights, trends, and news in the world of technology and coding.
            Our team of experts and enthusiasts work tirelessly to bring you
            high-quality articles.
          </p>
          <a
            href="/articles"
            className="px-6 py-3 bg-red-600 text-white rounded-full hover:bg-green-800 transition duration-300"
          >
            Explore Our Blogs
          </a>
        </div>
      </section>

      <div className="px-2 py-4 sm:p-6 flex-props flex-wrap my-3 gap-y-5 gap-x-5">
        <h2 className="text-2xl font-bold text-left w-full">Latest</h2>
        {ArticleData.map((item) => {
          return <BlogItem item={item} key={item.title} />;
        })}
      </div>
    </main>
  );
}
