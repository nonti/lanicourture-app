import  { useState, useEffect } from 'react';
import LightModeBtn  from '../../assets/lightmode.png';
import DarkModeBtn from '../../assets/darkmode.png';
const DarkMode = () => {
  const [theme, setTheme] =  useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') :'light');

    const element = document.documentElement;
    console.log(element);

    useEffect(() => {
      localStorage.setItem('theme', theme);
      if(theme === 'dark'){
        element.classList.add('dark');
        element.classList.add('dark');

      }else {
        element.classList.remove('light');
        element.classList.remove('dark');
      }
    })

      return (
    <div className='relative'>
      <img 
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      src={LightModeBtn} alt='light mode'  className={`w-12 cursor-pointer absolute right-0 z-10
        ${theme === 'dark' ? 'opacity-0': 'opacity-100'} transition-all duration-300 ` }/>

        <img src={DarkModeBtn} alt='light mode'  
         onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={`w-12 cursor-pointer 
        ` }/>
    </div>
  )
}

export default DarkMode