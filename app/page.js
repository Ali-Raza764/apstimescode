import { ArticleItem, NewsItem } from "@/components";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { app } from "@/config/firebase";
import Image from "next/image";

export const getNewsData = async () => {
  // get all the data and return it
  const db = getFirestore(app);
  const q = query(
    collection(db, "news"),
    orderBy("createdAt", "asc"),
    limit(4)
  );
  const querySnapshot = await getDocs(q, { next: { revalidate: 60 } });
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  return docs;
};
export const getArticleData = async () => {
  const db = getFirestore(app);
  const q = query(collection(db, "blogs"), orderBy("title", "asc"), limit(5));
  const querySnapshot = await getDocs(q, { next: { revalidate: 60 } });
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  return docs;
};

export default async function Home() {
  const newsData = await getNewsData();
  const ArticleData = await getArticleData();

  return (
    <main className="min-h-screen px-6 sm:px-11 py-4 sm:py-11 flex-props flex-col">
      <section className=" text-black flex flex-col items-center md:flex-row gap-x-8 md:h-[53vh] gap-y-2 mb-8">
        {/* Left Side (Image) */}
        <div className="w-full md:w-[50%]">
          <Image
            src="/image.jpg"
            alt="Technology"
            width={700}
            height={500}
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

      <div
        className="px-2 py-2 sm:p-6 mt w-[95%]
      -8"
      >
        <h2 className="text-2xl font-bold text-left w-full">News</h2>
        <div className="px-3 news w-full flex flex-row gap-x-[3rem] overflow-x-scroll py-4">
          {newsData.map((item) => {
            return <NewsItem item={item} key={item.title} />;
          })}
        </div>
      </div>

      <div className="px-2 py-4 sm:p-6 flex-props flex-wrap my-3 gap-y-5 gap-x-5">
        <h2 className="text-2xl font-bold text-left w-full">Articles</h2>
        {ArticleData.map((item) => {
          return <ArticleItem item={item} key={item.title} />;
        })}
      </div>
    </main>
  );
}
