const TextCon = ({ text, additionalClass = "" }) => (
    text ? <p className={`text-lightText text-[16px] ${additionalClass}`}>{text}</p> : null
  );
  
  export default TextCon;
  