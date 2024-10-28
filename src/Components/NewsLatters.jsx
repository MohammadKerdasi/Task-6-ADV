import { useTheme } from '../ThemeContext';

const NewsLatters = () => {
    const { darkMode } = useTheme();
  return (
    <div className = {`w-full transition duration-300 mb-4
        ${darkMode ? "bg-dark" : "bg-white"} relative`}>
          <div  className = {`lg:w-[84.444%] w-[92.326%]    mx-auto transition duration-300 
        ${darkMode ? "bg-dark" : "bg-white"} relative`}>
    <p className="text-purpleText text-center"> Newsletter</p>
    <h1 className={`text-[48px] font-bold sm:text-center text-left
      ${darkMode ? "text-white" : "text-darkText"}`}>Stories and interviews</h1>
      <p className='text-lightText text-[20px] sm:text-center text-left md:w-[63%] mx-auto  mt-2' >Subscribe to learn about new product features, the latest in technology, solutions, and updates</p>
    <form className="mx-auto mt-4 text-center sm:w-[494px] w-full">
      <div className='w-full flex flex-col md:flex-row'>
      <input
        type="email"
        placeholder="Enter your email"
        className="border py-[12px] px-[16px] mr-4 rounded-lg md:w-[360px] w-[100%]"
      />
      <button className="bg-purpleTwo text-white w-[118px] md:mt-0 mt-3 py-[12px] px-[20px] rounded-lg" >Subscribe</button>
      </div>
      <p className='text-lightText text-[14px] text-left  mt-2'>We care about your data in our <span className='underline underline-offset-4'>privacy policy</span></p>
    </form>
    </div>
  </div>
  )
}

export default NewsLatters