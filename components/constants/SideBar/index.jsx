import { useState } from 'react';
import { FaBlog, FaList, FaPen, FaSignOutAlt } from 'react-icons/fa';

const SideBar = ({ setComponents }) => {
  const [isMobile, setIsMobile] = useState(false);

  const handleItemClick = (component) => {
    setComponents(component);
    setIsMobile(false);
  };

  return (
    <div className={`sidebar ${isMobile ? 'mobile' : ''} bg-white text-gray-800 text-xl w-full flex flex-row`}>
      <div className="menu-icon text-2xl p-4 cursor-pointer" onClick={() => setIsMobile(!isMobile)}>
        <FaList />
      </div>
      <div className={`menu flex  ${isMobile ? 'flex-props-c w-full flex-row' : 'hidden'}`}>
        <div className="menu-item p-4 flex-props-c flex-col cursor-pointer hover:text-red-600" onClick={() => handleItemClick('allblogs')}>
          <FaBlog className="mr-2" /> Blogs
        </div>
        <div className="menu-item p-4 flex-props-c flex-col cursor-pointer hover:text-red-600" onClick={() => handleItemClick('createblog')}>
          <FaPen className="mr-2" /> Write Article
        </div>
        <div className="menu-item p-4 flex-props-c flex-col cursor-pointer hover:text-red-600" onClick={() => handleItemClick('logout')}>
          <FaSignOutAlt className="mr-2" /> Logout
        </div>
      </div>
    </div>
  );
};

export default SideBar;
