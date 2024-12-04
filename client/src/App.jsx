import Header from './components/header/Header';
import Hero  from './components/hero/Hero';
import Category from './components/category/Category';
import Category2 from './components/category/Category2';
import Services from './components/service/Services';
import Banner from './components/banner/Banner';
import Products from './components/products/Products';


const App = () => {
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-hidden'> 
      <Header/>
      <Hero/>
      <Category/>
      <Category2/>
      <Services/>
      <Banner/>
      <Products/>
    </div>
  )
}

export default App