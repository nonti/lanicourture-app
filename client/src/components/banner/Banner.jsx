
import dress from '../../assets/category/bridesmaid/t4.png';

const data = {
  discount:"30% OFF",
  title:"fine style",
  date: "20 July to 28 August",
  image: dress,
  title2: "Matric dance dresses",
  title3: "Matric dance sale",
  title4: 'lorem ipsum',
  bgColor: '#f42c37'
  };
const Banner = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12">
      <div style={{backgroundColor: data.bgColor}}
      className="container rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-white rounded-3xl">
          {/**first col */}
          <div className='p-6 sm:p-8'>
            <p className='text-sm'>{data.discount}</p>
            <h1 className='uppercase text-4xl lg:text-7xl font-bold'>{data.title}</h1>
            <p className='text-sm'>{data.date}</p>
          </div>
          {/**second col */}
          <div className='h-full flex items-center'>
            <img src={data.image} alt="I'm camera shy" className='scale-155 w-[250px] h-[350px] mx-auto drop-shadow-2xl object-cover '/>
          </div>
          {/**third col */}
          <div className='flex flex-col justify-center gap-4 p-6 sm:p-8'>
            <p className='font-bold text-xl'>{data.title2}</p>
            <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
            <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
            <div>
              <button style={{color: data.bgColor}} className='bg-white py-2 px-4 rounded-full text-red-600'>Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner