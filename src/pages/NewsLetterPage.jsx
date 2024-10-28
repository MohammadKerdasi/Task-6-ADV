import { useDispatch, useSelector } from "react-redux";
import NewsLatters from "./../Components/NewsLatters";
import { useTheme } from "../ThemeContext";
import { useNavigate } from "react-router-dom";
import { selectPost } from "./../redux/slice/index";

const NewsletterPage = () => {
  const { darkMode } = useTheme();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const selectedPost = useSelector((state) => state.blog.selectedPost);
  const recommendedPosts = useSelector((state) => state.blog.recommendedPosts);

  const handlePostClick = (post) => {
    dispatch(selectPost(post));
    navigate(`/blog/${post.id}`);
  };

  if (!selectedPost) {
    return (
      <div
        className={`w-full pt-[112px] transition-colors duration-300 ${
          darkMode ? "bg-dark text-white" : "bg-white text-black"
        }`}
      >
        <NewsLatters />
        <div
          className={`lg:w-[84.444%] w-[92.326%] mx-auto transition-colors duration-300 flex justify-between lg:gap-8 md:gap-4 ${
            darkMode ? "bg-dark text-white" : "bg-white text-black"
          }`}
        >
          Post not found
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        className={`w-full transition-colors duration-300 pt-10 ${
          darkMode ? "bg-dark text-white" : "bg-white text-black"
        }`}
      >
        <NewsLatters />
        <h2 className="lg:w-[84.444%] w-[92.326%] mx-auto text-3xl font-bold mb-6">
          Recent blog posts
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-4 grid-cols-1  g:w-[84.444%] w-[92.326%] mx-auto gap-8">
          {recommendedPosts.slice(0, 3).map((post, index) => (
            <div
              key={post.id}
              className={`${
                index === 2
                  ? "lg:col-span-1 md:col-span-4"
                  : "lg:col-span-1 md:col-span-2"
              }`}
            >
              <img src={post.img} alt="" className="w-full object-cover mb-4" />
              <p className="text-purpleText mb-3">{post.date}</p>
              <h2
                  onClick={() => handlePostClick(post)}
                className="text-xl font-semibold cursor-pointer flex justify-between mb-3"
              >
                {post.title}
                {post.icon}
              </h2>
              <p className="text-lightText mb-3">{post.description}</p>
              <div className="flex justify-start gap-2 flex-wrap">
                {post.categories.map((category, index) => (
                  <div
                    key={index}
                    className={`px-4 py-2 rounded-full ${category.style}`}
                  >
                    <p>{category.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default NewsletterPage;
