import Button from '../shared/Button';
import Image1 from '../../assets/category/gown/g1.png';
import Image2 from '../../assets/category/matric/m2.png';
import Image3 from '../../assets/category/bridesmaid/t2.png';
const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* first col  */}
          <div className='col-span-2 py-10 pl-5 bg-gradient-to-br gap-20 from-gray-400/90 to-gray-100 text-white rounded-3xl relative h-[320px] flex  items-end'>
            <div>
              <div className='mb-4'>
                <p className='text-gray-400'>Enjoy </p>
                <p className='text-2xl font-semibold'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>favorite</p>
                <Button 
                  text="Browse"
                  bgColor="bg-pink-600"
                  textColor="text-white"
                />
              </div>
            </div>
            <img src={Image3} alt="I'm camera shy"  className='w-[150px] -right-4 top-1 '/>
          </div>
          {/* second col */}

          <div className='py-10 pl-5 bg-gradient-to-br from-pink-600/90 to-pink-400/70 text-white rounded-3xl relative h-[320px] flex  items-start'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Enjoy </p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>favorite</p>
                <Button 
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-pink-600"
                />
              </div>
            </div>
            <img src={Image1} alt="I'm camera shy"  className='w-[120px] relative bottom-5 '/>
          </div>
           {/* third col  */}
          <div className='py-10 pl-5 bg-gradient-to-br from-green-700/70 to-green-500/90 text-white rounded-3xl relative h-[320px] flex  items-start'>
            <div>
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400'>Enjoy </p>
                <p className='text-2xl font-semibold mb-[2px]'>With</p>
                <p className='text-4xl xl:text-5xl font-bold opacity-20 mb-2'>favorite</p>
                <Button 
                  text="Browse"
                  bgColor="bg-white"
                  textColor="text-green-600"
                />
              </div>
            </div>
            <img src={Image2} alt="I'm camera shy"  className='w-[220px] right-8 lg:top-[0px] relative'/>
          </div>
         
         
        </div>
      </div>
    </div>
  )
}

export default Category