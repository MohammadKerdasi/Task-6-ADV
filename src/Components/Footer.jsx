import React from 'react';
import { useTheme } from '../ThemeContext';

const array = [
  {
    social : <div>&copy; 2023</div> 
  },
  {
    social : 'Twitter' 
  },
  {
    social : 'LinkedIn' 
  },
  {
    social : 'Email' 
  },
  {
    social : 'RSS feed' 
  },
  {
    social : 'Add to Feddly' 
  },
]

const Footer = () => {
  const { darkMode } = useTheme(); 

  return (
    <footer className={`p-4 transition-colors duration-300 
      ${darkMode ? 'bg-dark text-white' : 'bg-white text-black'}`}>
      <div className="w-[84.444%] flex mx-auto py-[30px] md:text-left text-center md:justify-start md:flex-row flex-col ">
        {array.map((item,index) => (
          <div key={index}>
            <p className='mr-2 text-[20px]'>
            {item.social}
            </p>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;