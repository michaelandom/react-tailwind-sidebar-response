import { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Sidebar } from "../components";
import { useParams } from "react-router-dom";

const Home = () => {
  const  {categoryId} = useParams();
  const [categoryData, setCategoryData] = useState("Home");
  useEffect(() => {
    setCategoryData(categoryId);
  }, [categoryId]);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const scrollRef = useRef(null);
  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <div className='flex bg-gray-50  flex-col md:flex-row h-screen transition-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <Sidebar />
      </div>
      <div className='flex md:hidden flex-row'>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
          {" "}
          <HiMenu
            fontSize={40}
            className='cursor-pointer '
            onClick={() => setToggleSidebar(true)}
          />
            <span className="w-28 text-2xl font-serif">Logo</span>

         
          <img
            src='https://th.bing.com/th/id/R.0cfe3cb86925753834d56c792931315c?rik=GA0RqPxgQyA0KA&pid=ImgRaw&r=0'
            alt='logo'
            className='w-9 h-9 rounded-full'
          />
        </div>

        {toggleSidebar && (
          <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
            <div className='absolute  w-full flex justify-end items-center p-2'>
              <AiFillCloseCircle
                fontSize={30}
                className='cursor-pointer'
                onClick={() => setToggleSidebar(false)}
              />
            </div>
            <Sidebar closeToggle={setToggleSidebar} />
          </div>
        )}
      </div>
      <div className='pb-2 flex-1 h-screen overflow-y-scroll' ref={scrollRef}>
   
        <div>body of {categoryData ? categoryData :"home"}</div>
      </div>
    </div>
  );
};

export default Home;
