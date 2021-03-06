import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { categories } from "../utils/data";

const isNotActiveStyle =
  "flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize";
const isActiveStyle =
  "flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize";

const Sidebar = ({ closeToggle }) => {
  const handelCloseSidebar = () => {
    if (closeToggle) {
      closeToggle(false);
    }
  };

  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
      <div className='flex flex-col'>
        <div
          className='flex px-5 gap-2 my-6 w-190 items-center'
          onClick={() => handelCloseSidebar}>
            <span className="w-full text-2xl font-serif">Logo</span>
        </div>
        <div className='flex flex-col gap-5'>
          <NavLink
            to='/'
            onClick={handelCloseSidebar}
            className={({ isActive }) =>
              isActive ? isActiveStyle : isNotActiveStyle
            }>
            <RiHomeFill />
            Home
          </NavLink>
          <h3 className='mt-2 px-5 text-base 2xl:text:xl'>
            Discover categories
          </h3>
          {categories.slice(0, categories.length - 1).map((category) => (
            <NavLink
              key={category.name}
              to={`/category/${category.name.replaceAll(" ", "_")}`}
              onClick={handelCloseSidebar}
              className={({ isActive }) =>
                isActive ? isActiveStyle : isNotActiveStyle
              }>
              <img
                src={category.image}
                alt='category image'
                className=' w-10 h-10 rounded-full shadow-sm object-cover'
              />
              {category.name}
            </NavLink>
          ))}
        </div>
      </div>

      <Link
        to={`/`}
        onClick={handelCloseSidebar}
        className='flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3'>
        <img
          src='https://th.bing.com/th/id/R.0cfe3cb86925753834d56c792931315c?rik=GA0RqPxgQyA0KA&pid=ImgRaw&r=0'
          alt='user'
          className='w-10 h-10 rounded-full'
        />
        <p>userName</p>
      </Link>
    </div>
  );
};

export default Sidebar;
