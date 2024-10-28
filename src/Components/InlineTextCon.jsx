const InlineTextCon = ({ heading, description }) => {
    return (
      <div className="items-center">
        <b className="font-semibold">{heading}:</b>
        <span className="text-lightText">{description}</span>
      </div>
    );
  };
  
  export default InlineTextCon;
  