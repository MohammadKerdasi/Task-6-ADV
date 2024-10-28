import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useTheme } from "../ThemeContext";
import { nextPage, prevPage, setPage } from "./../redux/slice/PagenationIndex";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoMdArrowForward } from "react-icons/io";
import CardComponent from './../Components/CardComponent';

const HomePage = () => {
  const { darkMode } = useTheme();
  const posts = useSelector((state) => state.blog.posts);
  const dispatch = useDispatch();

  const { currentPage, postsPerPage } = useSelector((state) => state.pagination);
  const totalPages = Math.ceil(posts.length / postsPerPage);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const handleNextPage = () => {
    if (currentPage < totalPages) dispatch(nextPage());
  };

  const handlePrevPage = () => {
    if (currentPage > 1) dispatch(prevPage());
  };

  const handleSetPage = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className={`w-full transition-colors duration-300 ${darkMode ? "bg-dark text-white" : "bg-white text-black"}`}>
      <h1 className={`lg:w-[84.444%] w-[92.326%] lg:text-[17.176vw] text-[18.7vw] font-bold block mx-auto mb-[30px] border-t border-b ${darkMode ? "border-white" : "border-gray-300"}`}>
        THE BLOG
      </h1>

      <section className="lg:w-[84.444%] w-[92.326%] mx-auto mb-12">
        <h2 className="text-3xl font-bold mb-6">Recent blog posts</h2>
        <div className="grid xl:grid-cols-6 gap-8">
          <div className="xl:col-span-3 flex flex-col">
            <CardComponent className='flex-col gap-4 ' post={posts[16]} />
          </div>

          <div className="flex flex-col justify-between xl:col-span-3 gap-8">
            {posts.slice(17, 19).map((post) => (
              <CardComponent className='lg:flex-row flex-col gap-4 ' key={post.id} post={post} />
            ))}
          </div>

          <div className="xl:col-span-6 flex xl:flex-row flex-col gap-x-8">
            <CardComponent className='lg:flex-row flex-col gap-8 ' post={posts[19]} />
          </div>
        </div>
      </section>

      <section className="lg:w-[84.444%] w-[92.326%] mx-auto">
        <h2 className="text-3xl font-bold mb-6">All Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12">
          {currentPosts.map((post) => (
            <CardComponent className='flex-col gap-3 ' key={post.id} post={post} />
          ))}
        </div>

        <div className="flex justify-between md:flex-row flex-col mt-8 border-t py-6">
          <button onClick={handlePrevPage} disabled={currentPage === 1} className={`mx-2 py-2 rounded flex justify-center items-baseline gap-1 text-[14px] ${currentPage === 1 && darkMode ? "text-white cursor-not-allowed opacity-50" : ""}`}>
            <IoArrowBackOutline style={{ fontSize: "12px" }} />
            Previous
          </button>

          <div className="text-center md:my-0 my-[20px]">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button key={page} onClick={() => handleSetPage(page)} className={`mx-2 px-4 py-2 rounded ${darkMode ? currentPage === page ? "bg-white text-black" : "bg-dark text-white" : currentPage === page ? "bg-Purple text-purpleText" : "bg-white text-gray-700"}`}>
                {page}
              </button>
            ))}
          </div>

          <button onClick={handleNextPage} disabled={currentPage === totalPages} className={`mx-2 py-2 rounded flex justify-center items-baseline gap-1 text-[14px] ${currentPage === totalPages && darkMode ? "text-white cursor-not-allowed opacity-50" : ""}`}>
            Next
            <IoMdArrowForward style={{ fontSize: "12px" }} />
          </button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
