"use client"
import { useState } from 'react';
import { doc, getFirestore, setDoc } from 'firebase/firestore';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/utils/useAuth';
import { toast } from 'react-toastify';
import { upload, app } from '@/config/firebase';
import { QuillEditor } from '@/components'; 

const CreateNews = ({params}) => {
  const authUser = useAuth();
  const [newsContent, setNewsContent] = useState('');
  const [imgProgress, setImgProgress] = useState(0);
  const [loading, setLoading] = useState(false);
  const db = getFirestore(app);
  const router = useRouter();

  function generateSlug(title) {
    return title
      .toLowerCase()
      .replace(/\s+/g, '-') // Replace spaces with hyphens
      .replace(/[^a-z0-9-]/g, '') // Remove any non-alphanumeric or non-hyphen characters
      .replace(/-{2,}/g, '-') // Replace consecutive hyphens with a single hyphen
      .trim(); // Trim any leading or trailing hyphens
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true)
    const title = e.target.title.value;
    const category = e.target.category.value;
    const excerpt = e.target.excerpt.value;
    const mainImage = e.target.mainImage.files[0];
    const createdAt = new Date().toISOString() // Current date and time

    const slug = generateSlug(title);

    try {
      // Upload the main image
      const mainImageUrl = await upload(mainImage);

      // Save the news data to the Firestore database
      const newsRef = doc(db, 'news', slug);
      await setDoc(newsRef, {
        title,
        category,
        excerpt,
        mainImageUrl,
        newsContent,
        createdAt, // Format date and time
      });

      toast.success('Created a new News Post', {
        position: 'bottom-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });

      router.push('/');
    } catch (error) {
      console.error(error);
      toast.error('Error creating the News Post', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setLoading(false)
    }
  };

  if (!authUser) {
    return <div>Please log in to create a news post.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-lg p-6 w-[90%] sm:w-[85%]">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Create a New News Post</h2>
        <form className="space-y-4" onSubmit={handleSubmit} >
          <div>
            <label htmlFor="title" className="text-gray-600">
              News Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full p-2 border rounded-md"
              placeholder="Enter the news title"
              required
              disabled={loading}
            />
          </div>
          <div>
            <label htmlFor="category" className="text-gray-600">
              Category
            </label>
            <select id="category" name="category" className="w-full p-2 border rounded-md" required disabled={loading}>
              <option value="General">General</option>
              <option value="Sports">Sports</option>
              <option value="Technology">Technology</option>
              <option value="Entertainment">Entertainment</option>
            </select>
          </div>
          <div>
            <label htmlFor="excerpt" className="text-gray-600">
              Excerpt
            </label>
            <textarea
              type="text"
              id="excerpt"
              name="excerpt"
              className="w-full p-2 border rounded-md"
              placeholder="Enter the news excerpt"
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
            <progress value={imgProgress} max={100}></progress>
          </div>
          <div>
            <label htmlFor="newsContent" className="text-gray-600">
              News Body
            </label>
            <QuillEditor value={newsContent} setValue={setNewsContent} />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-green-800 text-white p-3 rounded-md hover:bg-red-600"
            >
              Publish News
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateNews;