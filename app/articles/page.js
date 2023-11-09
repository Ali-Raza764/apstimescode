import ArticleItem from "@/components/ArticleItem";
import React from "react";
import {
  getFirestore,
  collection,
  query,
  orderBy,
  limit,
  getDocs,
} from "firebase/firestore";
import { app } from "@/config/firebase";

export const getArticleData = async () => {
  const db = getFirestore(app);
  const q = query(collection(db, "blogs"), orderBy("title", "asc"));
  const querySnapshot = await getDocs(q,{next:{revalidate: 60}});
  const docs = [];
  querySnapshot.forEach((doc) => {
    docs.push(doc.data());
  });
  return docs;
};
const page = async() => {
  const ArticleData = await getArticleData();

  return (
    <section>
      <div className="container px-5 sm:px-8 py-8 mx-auto">
        <div className="flex-props flex-wrap w-full gap-5">
        {ArticleData.map((item) => {
          return <ArticleItem item={item} key={item.title} />;
        })}
        </div>
      </div>
    </section>
  );
};

export default page;
