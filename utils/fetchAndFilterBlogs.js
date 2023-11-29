// utils/blogUtils.js

// Function to fetch and filter blogs based on parameters
export const fetchAndFilterBlogs = async (params) => {
    const { pageType, category, slug } = params;
  
    // Fetch data from the API
    const sample = await fetch("http://localhost:3000/api/getAllBlogs", { next: { revalidate: 100 } });
    const res = await sample.json()
    const alldata = res.message || [];
  
    switch (pageType) {
      case 'home':
        // Return the newest 5 blogs
        return alldata.slice(0, 5);
      case 'articles':
        // Return all blogs
        return alldata;
        case 'articles/category':
          // Debugging: Log the category and check if it matches any in the data
          console.log('Filtering by category:', category);
          const trimmedCategory = category.trim().toLowerCase();
          const categoryData = alldata.filter(blog => blog.category.trim().toLowerCase() === trimmedCategory);
          console.log('Filtered data:', categoryData);
          return categoryData;
      case 'blogDetails':
        // Return the specified blog and related blogs
        const selectedBlog = alldata.find(blog => blog.slug === slug);
        const relatedBlogs = alldata.filter(blog => blog.category.trim().toLowerCase()  === selectedBlog.category.trim().toLowerCase()).slice(0, 3);
        return { selectedBlog, relatedBlogs };
      default:
        return { blogs: [] };
    }
  };
  