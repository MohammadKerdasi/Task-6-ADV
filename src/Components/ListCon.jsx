/* eslint-disable react/prop-types */
const ListCon = ({ items }) => (
    items && items.length > 0 ? (
      <ul className="list-disc list-inside text-lightText">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    ) : null
  );
  
  export default ListCon;
  