import Slider from "react-slick";
import Image1 from  '../../assets/category/matric/m1.png';
import Image2 from  '../../assets/image2.jpg';
import Image3 from '../../assets/image3.png';
import Button from '../shared/Button';

const HeroData = [
  {
    id: 1,
    image:Image1,
    subtitle:'Subtitle',
    title:'Title',
    title2:'Title2',
  },
  {
    id: 2,
    image:Image2,
    subtitle:'Subtitle',
    title:'Title',
    title2:'Title2',
  },
  {
    id: 3,
    image:Image3,
    subtitle:'Subtitle',
    title:'Title',
    title2:'Title2',
  }
]

const Hero = () => {

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    autoplaySpeed: 4000,
    cssEase: 'ease-in-out',
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className="container">
      <div className="overflow-hidden rounded-3xl min-h-[550px] 
      flex justify-center items-center sm:min-h-[650px] hero-bg-color ">
        <div className="container pb-8 sm:pb-0">
        {/**Hreo section */}
        <Slider {...settings}>
          {
            HeroData.map((data) => (
              <div key={data.id}>
                <div className="grid grid-cols-1 sm:grid-cols-2">
                {/**text content section  */}
                <div className="flex flex-col justify-center gzp-4 sm:pl-3 pt-12 sm:pt-0  text-center sm:text-left order-2 sm:order-1 z-10 relative">
                  <h1 className="text-2xl sm:text-6xl lg:text-2xl font-bold">{data.subtitle}</h1>
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">{data.title}</h1>
                  <h1  className="text-5xl uppercase text-white dark:text-white/5 sm:text-[800px] md:text-[100px] xl:text-[150px] font-bold">{data.title2}</h1>
                  <div>
                    <Button text="Shop by category" bgColor="bg-pink-600" textColor="text-white"/>
                  </div>
                </div>
                  {/**image section */}
                  <div className="order-1 sm:order-2">
                    <div>
                      <img src={data.image} alt='I am camera shy' className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px]
                      sm:scale-105 lg:scale-110 object-contain mx-auto drop-shadow-[-8px_4px_6px_rgba(0,0,0,.4)] relative z-40"/>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero