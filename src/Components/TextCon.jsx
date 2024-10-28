const TextCon = ({ text, secondClass = "" }) => (
    text ? <p className={`text-lightText text-[16px] ${secondClass}`}>{text}</p> : null
  );
  
  export default TextCon;
  