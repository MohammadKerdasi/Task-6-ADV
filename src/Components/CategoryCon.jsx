/* eslint-disable react/prop-types */
const CategoryCon = ({ categories }) => (
    categories && categories.length > 0 ? (
      <div className="flex justify-start gap-2 mt-6 flex-wrap">
        {categories.map((category, index) => (
          <div key={index} className={`px-4 py-2 rounded-full ${category.style}`}>
            <p>{category.name}</p>
          </div>
        ))}
      </div>
    ) : null
  );
  
  export default CategoryCon;
  