import React from "react";
import {
  getFirestore,
  query,
  collection,
  where,
  getDocs,
  limit,
} from "firebase/firestore";
import { app } from "@/config/firebase";
import Image from "next/image";
import { AiFillEye } from "react-icons/ai";
import { BlogItem } from "@/components";

const getArticleData = async (slug) => {
  const db = getFirestore(app);
  const q = query(collection(db, "blogs"), where("slug", "==", slug));

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return null;
    }

    const doc = querySnapshot.docs[0];
    return doc.data();
  } catch (error) {
    console.error("Error getting documents: ", error);
    return null;
  }
};
const getRealatedPosts = async(category) =>{
  const db = getFirestore(app);
  const q = query(collection(db, "blogs"), where("category", "==", category), limit(8));
  const relatedDocs = []

  try {
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.log("No matching documents.");
      return null;
    }
    querySnapshot.forEach((doc)=>{
      relatedDocs.push(doc.data())
    })
    return relatedDocs
  } catch (error) {
    console.error("Error getting documents: ", error);
    return null;
  }
}

const Page = async ({ params }) => {
  const articleData = await getArticleData(params.slug);
  const relatedPosts = await getRealatedPosts(articleData.category);
  const content = { __html: articleData.blogContent };

  return (
    <div className="mt-2 bg-gray-50 w-full px-4">
      <div className="w-full p-4 flex-props-c">
        <Image
          width={500} // Adjust the desired width
          height={700} // Adjust the desired height
          className="object-cover shadow-sm block transition duration-200 ease-out transform hover:scale-110 rounded-md"
          src={articleData.mainImageUrl}
          alt="Main Image"
          fetchPriority="high"
        />
      </div>

      <div className="flex items-center justify-start mt-4 mb-4 flex-wrap">
        <a
          href="#"
          className="px-2 py-1 font-bold bg-red-400 text-white rounded-lg hover:bg-gray-500 mr-4"
        >
          {articleData.category}
        </a>
      </div>

      <div className="mt-2">
        <h1
          href="#"
          className="sm:text-3xl md:text-3xl lg:text-3xl xl:text-4xl font-bold text-green-800  hover:underline"
        >
          {articleData.title}
        </h1>

        {/*post views*/}
        <div className="flex justify-start items-center mt-2">
          <p className="text-sm text-red-500 font-bold bg-gray-100 rounded-full py-2 px-2 hover:text-red-600">
            3000
          </p>
          <AiFillEye />
          <p className="text-sm text-gray-400 font-bold ml-5">Views</p>
        </div>

        {/*author avator*/}
        <div className="font-light text-gray-600">
          <a href="#" className="flex items-center mt-6 mb-6">
            <img
              src="https://avatars.githubusercontent.com/u/71964085?v=4"
              alt="avatar"
              className="hidden object-cover w-14 h-14 mx-4 rounded-full sm:block"
            />
            <h2 className="font-bold text-gray-700 hover:underline">
              By Ali Raza Khalid
            </h2>
          </a>
        </div>
      </div>

      {/*post content*/}
      <div className="w-full px-5  mx-auto text-lg text-gray-900 mt-4 rounded bg-gray-100">
        {/*content body*/}
        <div>
          <div dangerouslySetInnerHTML={content} />
        </div>
      </div>

      {/*Related Posts*/}
      <div className="px-2 py-4 sm:p-6 flex-props flex-wrap my-3 gap-y-5 gap-x-5">
        <h2 className="text-2xl font-bold text-left w-full">Realted</h2>
        {relatedPosts?.map((item) => {
          return <BlogItem item={item} key={item.title} />;
        })}
      </div>

    </div>
  );
};

export default Page;
