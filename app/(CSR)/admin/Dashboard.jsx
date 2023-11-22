import { CreateArticle, CreateNews, ManagePosts } from "@/components";
import SideBar from "@/components/constants/SideBar";
import { useState } from "react";

const Dashboard = () => {
  const [components, setComponents] = useState("allblogs");

  const renderData = () => {
    switch (components) {
      case "allblogs":
        return <ManagePosts />;
      case "allnews":
        return <ManagePosts />;

      case "createblog":
        return <CreateArticle />;

      case "createnews":
        return <CreateNews />;

      default:
        break;
    }
  };
  return (
    <div className="flex-props-b flex-col">
      <div className="w-full flex items-start">

      <SideBar setComponents={setComponents} />
      </div>
      <div className="content w-full flex-props-c">{renderData()}</div>
    </div>
  );
};

export default Dashboard;
