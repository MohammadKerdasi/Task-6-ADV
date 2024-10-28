/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectPost } from "./../redux/slice/index";

const CardComponent = ({ post, className }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePostClick = () => {
    dispatch(selectPost(post));
    navigate(`/blog/${post.id}`);
  };

  return (
    <div className={`flex ${className}`}>
      <img src={post.img} alt={post.title} className=" object-cover" />
      <div className='gap-2'>
      <div className="text-purpleText text-[14px] mb-3">{post.date}</div>
      <h2
        onClick={handlePostClick}
        className="text-xl cursor-pointer font-semibold flex justify-between mb-2"
      >
        {post.title}
        {post.icon}
      </h2>
      <p className="text-lightText mb-4">{post.description}</p>
      <div className="flex justify-start gap-2 flex-wrap">
        {post.categories.map((category, index) => (
          <div key={index} className={`px-4 py-2 rounded-full ${category.style}`}>
            <p>{category.name}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
