const ImageCon = ({ src, alt = "", additionalClass = "" }) => (
    src ? <img className={`w-full ${additionalClass}`} src={src} alt={alt} /> : null
  );
  
  export default ImageCon;
  