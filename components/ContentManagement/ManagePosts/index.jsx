"use client";
import React from "react";
import ManageBlogItem from "./ManageBlogsItem";

const ManagePosts = () => {
  return (
    <div className="min-h-screen flex flex-col w-full p-4 sm:p-6 gap-y-3 sm:gap-y-6 items-start">
      <h1 className="font-bold text-4xl w-full text-center">Manage Your Content Here</h1>
      <section className="allblogs w-full">
          <h3 className="text-3xl font-semibold">Manage Blogs</h3>
        <div className="w-full flex-props py-2">
          <ManageBlogItem />
        </div>
      </section>
      {/* <section className="allnews">
      <h3>Manage news</h3>
        <div>
          <Item />
        </div>
      </section> */}
    </div>
  );
};

export default ManagePosts;
