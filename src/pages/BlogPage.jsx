import {  useSelector } from "react-redux";
import { useTheme } from "../ThemeContext";

import TextCon from "./../Components/TextCon";
import BoldText from "./../Components/BoldText";
import ImageCon from "./../Components/ImageCon";
import ListCon from "./../Components/ListCon";
import CategoryCon from "./../Components/CategoryCon";
import InlineTextCon from "./../Components/InlineTextCon";

import { getContent } from "./../Content";
import NewsLatters from "../Components/NewsLatters";
import CardComponent from "../Components/CardComponent";

const BlogPage = () => {
  const { darkMode } = useTheme();


  const selectedPost = useSelector((state) => state.blog.selectedPost);
  const recommendedPosts = useSelector((state) => state.blog.recommendedPosts);

  if (!selectedPost) {
    return <div  className={`w-full transition-colors duration-300 ${
      darkMode ? "bg-dark text-white" : "bg-white text-black"
    }`}>
     <div className={`w-[84.444%] mx-auto transition-colors duration-300 flex justify-between lg:gap-8 md:gap-4 ${
      darkMode ? "bg-dark text-white" : "bg-white text-black"
    }`}>Post not found</div>
    </div>

  }

  const content = getContent(selectedPost);

  return (
    <div
      className={`w-full transition-colors duration-300 ${darkMode ? "bg-dark text-white" : "bg-white text-black"}`}
    >
      <div
        className={`w-[84.444%] mx-auto transition-colors duration-300 flex justify-between md:flex-row flex-col-reverse  lg:gap-8 md:gap-4 ${darkMode ? "bg-dark text-white" : "bg-white text-black"}`}
      >
        <div className="md:w-[29.6%] w-full">
          <h3 className="text-2xl font-semibold mb-4 mt-8">Recent blog posts</h3>
          <div className="flex flex-col gap-4">
            {recommendedPosts.map((post) => (
         <CardComponent className='flex-col gap-3 ' key={post.id} post={post} />
            ))}
          </div>
        </div>
        <div className="md:w-[67%] w-full flex justify-between flex-col gap-5">
          {content.map((item, index) => {
            switch (item.type) {
              case "text":
                return <TextCon key={index} text={item.value} secondClass={item.secondClass} />;
              case "title":
                return <h1 key={index} className="text-[36px] font-bold">{item.value}</h1>;
              case "subtitle":
                return <h2 key={index} className="text-left text-lightText font-semibold">{item.value}</h2>;
              case "boldText":
                return <BoldText key={index} text={item.value} />;
              case "image":
                return <ImageCon key={index} src={item.src} alt={item.alt} secondClass={item.secondClass} />;
              case "list":
                return <ListCon
                items={selectedPost.ul.flatMap(item => [item.li, item.li_2, item.li_3]).filter(Boolean)} 
              />
              case "inlineText":
                return <InlineTextCon key={index} heading={item.heading} description={item.description} />;
              default:
                return null;
            }
          })}
          <CategoryCon categories={selectedPost.categories} />
          <div  className={`w-[84.444%] mx-auto transition-colors duration-300 mt-8  lg:flex hidden ${darkMode ? "bg-dark text-white" : "bg-white text-black"}`}>
          <NewsLatters/>
          </div>
        </div>
      </div>
      <div  className={`lg:w-[84.444%] w-[92.326%]  mx-auto transition-colors duration-300 mt-8  justify-end lg:hidden flex ${darkMode ? "bg-dark text-white" : "bg-white text-black"}`}>
          <NewsLatters/>
      </div>
    </div>
  );
};

export default BlogPage;
