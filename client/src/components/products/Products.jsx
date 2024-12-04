import Heading from "../shared/Heading"
import ProductsCard from "./ProductsCard"

import image1 from '../../assets/category/products/p1.png';
import image2 from '../../assets/category/products/p2.png';
import image3 from  '../../assets/category/products/p3.png';
import image4 from  '../../assets/category/products/p4.png';

const ProductsData =[
  {
    id: 1,
    image: image1,
    title: "Matric dance dress",
    price: "R1800",
    aosDelay: "0"
  },
  {
    id: 2,
    image: image2,
    title: "Groomsmen dress",
    price: "R1000",
    aosDelay: "200"
  },
  {
    id: 3,
    image: image3,
    title: "Graduation gown",
    price: "R2500",
    aosDelay: "500"
  },
  {
    id: 4,
    image: image4,
    title: "Dress",
    price: "R400",
    aosDelay: "500"
  },
]

const Products = () => {
  return (
    <div className="container">
      {/* header section */}
      <Heading title="Our Products" subtitle={"Explore our Products"}/>
      {/* body section  */}
      <ProductsCard data={ProductsData}/>
    </div>
  )
}

export default Products