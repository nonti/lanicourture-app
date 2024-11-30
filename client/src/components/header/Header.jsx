import logo from '../../assets/lcourture.png';
import { IoSearchOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import DarkMode from './DarkMode';
import { FaCaretDown } from "react-icons/fa";
const Header = () => {

  const menuLinks = [
    {
      id: 1,
      title: 'Home',
      url: '/#',
    },
    {
      id: 2,
      title: 'About',
      url: '/#about',
    },
    {
      id: 3,
      title: 'Contact',
      url: '/#contact',
    },
    {
      id: 3,
      title: 'Product',
      url: '/#product',
    },
  ];


  const dropdownLinks = [
    {
      id: 1,
      title: 'Men',
      url: '/#',
    },
    {
      id: 2,
      title: 'Women',
      url: '/#',
    },
    {
      id: 3,
      title: 'Kids',  
      url: '/#',
    },

  ]

  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      <div className='py-4'>
      <div className='container flex justify-between'>
        {/**logo section */}
        <div className='flex items-center justify-between'>
          <img src={logo} alt='I am camera shy' className='w-16' />
        </div>
          {/**menu items*/}
          <div className='hidden lg:block'>
          <ul className='flex items-center gap-4'>
            {menuLinks.map((data, index) =>(
              <li key={index}>
                <a href={data.url} className='inline-block px-4 font-semibold text-gray-600 hover:text-pink-600 dark:hover:text-white duration-200'>{data.title}</a>
              </li>
            ))}

            {/**Dropdown */}
            <li className='relative cursor-pointer group'>
              <a href='#' className='flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2'>
                Quick Links

              <span>
                <FaCaretDown className='group-hover:rotate-180 duration-300 '/>
              </span>
              </a>
              {/**Dropdown links */}
                <div className='absolute z-[9999] hidden group-hover:block w-[200px] rounded-md bg-white shadow-md dark:bg-gray-900 p-2 dark:text'>
                  <ul className='space-y-2'>
                  {
                    dropdownLinks.map((data, index) => (
                      <li key={index}>
                          <a
                          className='text-gray-500 hover:text-pink-500 dark:hover:text-white duration-200 inline-block  w-full p-2 rounded-md font-semibold hover:bg-lightGray/20'
                          href={data.url}>{data.title}</a>
                      </li>
                    )) 
                  }
                  </ul>
                </div>
            </li>
          </ul>
        </div>
      
        {/**nav right section */}
      <div className='flex justify-between items-center gap-4'>
        <div className='relative group hidden sm:block'>
          {/* Search bar */}
            <input type='text' placeholder='Search ...' className='search-bar'/>
            <IoSearchOutline className='text-xl text-pink-600 dark:text-gray-400 group-hover:text-darkGray
            absolute top-1/2 -translate-y-1/2 right-3 duration-200'/>
        </div>
        {/* place order  */}
      <button className='relative  p-3'>
        <FaCartShopping className='text-xl text-pink-600'/>
        <div className='w-4 h-4  bg-gray-500 text-white rounded-full absolute top-0 right-0  
        flex  justify-center items-center text-xs'>4</div>
      </button>
        {/* darkmode section */}
        <div>
          <DarkMode  />
        </div>
      </div>
      

        </div>
      </div>
    </div>
  )
}

export default Header