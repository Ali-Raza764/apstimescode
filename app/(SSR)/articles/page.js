import { BlogItem } from "@/components";
import React from "react";
// import {
//   getFirestore,
//   collection,
//   query,
//   orderBy,
//   getDocs,
// } from "firebase/firestore";
// import { app } from "@/config/firebase";

// const getArticleData = async () => {
//   const db = getFirestore(app);
//   const q = query(collection(db, "blogs"), orderBy("title", "asc"));
//   const querySnapshot = await getDocs(q);
//   const docs = [];
//   querySnapshot.forEach((doc) => {
//     docs.push(doc.data());
//   });
//   return docs;
// };
const page = async() => {
  const apiUrl = process.env.NODE_ENV === 'development' ? "http://localhost:3000/api/getAllBlogs" : "https://apstimesblog.netlify.app";
  const sample = await fetch(apiUrl, { next:{revalidate:100} });
  const alldata = await sample.json();
  const ArticleData = alldata.message || []; // check that the data exists and it is an array
  // const ArticleData = await getArticleData();

  return (
    <section>
      <div className="container px-5 sm:px-8 py-8 mx-auto">
        <div className="flex-props flex-wrap w-full gap-5">
        {ArticleData.map((item) => {
          return <BlogItem item={item} key={item.title} />;
        })}
        </div>
      </div>
    </section>
  );
};

export default page;
