"use client";
import { upload, app } from "@/config/firebase";
import { useState } from "react";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useAuth } from "@/utils/useAuth";
import { toast } from "react-toastify";

const CreateArticle = () => {
  const authUser = useAuth();
  const [loading, setLoading] = useState(false);
  const db = getFirestore(app);
  const router = useRouter();

  function generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, "") // Remove any non-alphanumeric or non-hyphen characters
      .replace(/-{2,}/g, "-") // Replace consecutive hyphens with a single hyphen
      .trim(); // Trim any leading or trailing hyphens
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const blogRef = doc(db, "blogs", e.target.title.value);
      const mainImageUrl = upload(e.target.mainImage.files[0]);
      const title = e.target.title.value;
      const category = e.target.category.value;
      const excerpt = e.target.excerpt.value;
      const slug = generateSlug(title);
      const blogContent = e.target.blogContent.value;

      await setDoc(blogRef, {
        title,
        category,
        excerpt,
        mainImageUrl: await upload(e.target.mainImage.files[0]),
        blogContent,
        slug,
        createdAt: new Date(),
      });
      toast.success("Created new Post", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });

      router.push("/");
    } catch (error) {
      toast.error("An error occured while creating post", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
    setLoading(false);
  };

  if (!authUser) {
    return <div>please login first</div>;
  }
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-[90%] sm:w-[85%]">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">
          Write a New Blog
        </h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title" className="text-gray-600">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border rounded-md"
              placeholder="Enter the article title"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="category" className="text-gray-600">
              Selection
            </label>
            <select
              id="category"
              name="category"
              className="w-full p-2 border rounded-md"
              required
              disabled={loading}
            >
              <option value="Exams">Exams</option>
              <option value="E-sports">E-sports</option>
              <option value="Programming">Programming</option>
              <option value="Sports">Sports</option>
            </select>
          </div>
          <div>
            <label htmlFor="excerpt" className="text-gray-600">
              Excerpt Here
            </label>
            <textarea
              type="text"
              id="excerpt"
              name="excerpt"
              className="w-full p-2 border rounded-md"
              placeholder="Enter excerpt here"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="mainImage" className="text-gray-600">
              Main Image
            </label>
            <input
              type="file"
              id="mainImage"
              name="mainImage"
              className="w-full p-2 border rounded-md"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="blogText" className="text-gray-600">
              Blog
            </label>
            <textarea name="blogContent" id="blogContent" cols="30" rows="10" className="border-2 border-gray-600"></textarea>
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white p-3 rounded-md hover:bg-red-600"
            >
              Publish Article
            </button>
          </div>
        </form>
        <div>
        </div>
      </div>
    </div>
  );
};

export default CreateArticle;
