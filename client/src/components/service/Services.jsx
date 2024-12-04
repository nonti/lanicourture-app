import { FaWallet } from "react-icons/fa6";
import { FaHeadphonesAlt, FaCheckCircle, FaCarSide } from "react-icons/fa";
const ServiceData = [
  {
    id: 1,
    icon: <FaCarSide size={48} className='text-4xl md:text-5xl text-pink-500'/>,
    title: 'Free shipping',
    description: 'Free shipping on all order.',
  },
  {
    id: 2,
    icon: <FaCheckCircle size={48} className='text-4xl md:text-5xl text-pink-500'/>,
    title: 'Safe money',
    description: '30  days Money back.',
  },
  {
    id: 3,
    icon: <FaWallet size={48} className='text-4xl md:text-5xl text-pink-500'/>,
    title: 'Secure Payment',
    description: 'All payment secure.',
  },
  {
    id: 4,
    icon: <FaHeadphonesAlt size={48} className='text-4xl md:text-5xl text-pink-500'/>,
    title: 'Online support 24/7',
    description: 'Technical Support 24/7.',
  }
]

const Services = () => {
  return (
    <div >
      <div className='container my-14 md:my-20'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4' >
          { ServiceData.map((data, i) => (
            <div key={i} className='flex items-start flex-col sm:flex-row gap-4'>
              {data.icon}
              <div>
              <h1 className='lg:text-xl font-bold'>{data.title}</h1>
              <h1 className='text-gray-400 text-sm'>{data.description}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services;