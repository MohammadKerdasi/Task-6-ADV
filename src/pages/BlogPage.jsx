import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "../ThemeContext";

import TextCon from "./../Components/TextCon";
import BoldText from "./../Components/BoldText";
import ImageCon from "./../Components/ImageCon";
import ListCon from "./../Components/ListCon";
import CategoryCon from "./../Components/CategoryCon";
import InlineTextCon from "./../Components/InlineTextCon";
import { selectPost } from "./../redux/slice/index";

import { getContent } from "./../Content";
import NewsLatters from "../Components/NewsLatters";

const BlogPage = () => {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();

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
              <div
                key={post.id}
                className="cursor-pointer p-2"
                onClick={() => dispatch(selectPost(post))}
              >
                <img src={post.img} alt="" className="w-full object-cover mb-4" />
                <p className=" text-purpleText mb-3">{post.date}</p>
                <h2 className="text-xl font-semibold flex justify-between mb-3">{post.title}{post.icon}</h2>
                <p className="text-lightText mb-3">{post.description}</p>
                <div className="flex justify-start gap-2 flex-wrap">
                {post.categories.map((category, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 rounded-full  ${category.style}`}
                  >
                    <p>{category.name}</p>
                  </div>
                ))}
              </div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:w-[67%] w-full flex justify-between flex-col gap-5">
          {content.map((item, index) => {
            switch (item.type) {
              case "text":
                return <TextCon key={index} text={item.value} additionalClass={item.additionalClass} />;
              case "title":
                return <h1 key={index} className="text-[36px] font-bold">{item.value}</h1>;
              case "subtitle":
                return <h2 key={index} className="text-left text-lightText font-semibold">{item.value}</h2>;
              case "boldText":
                return <BoldText key={index} text={item.value} />;
              case "image":
                return <ImageCon key={index} src={item.src} alt={item.alt} additionalClass={item.additionalClass} />;
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
      <div  className={`w-[84.444%] mx-auto transition-colors duration-300 mt-8  justify-end lg:hidden flex ${darkMode ? "bg-dark text-white" : "bg-white text-black"}`}>
          <NewsLatters/>
      </div>
    </div>
  );
};

export default BlogPage;
