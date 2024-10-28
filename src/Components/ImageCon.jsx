const ImageCon = ({ src, alt = "", secondClass = "" }) => (
    src ? <img className={`w-full ${secondClass}`} src={src} alt={alt} /> : null
  );
  
  export default ImageCon;
  