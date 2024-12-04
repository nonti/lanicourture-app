import PropTypes from "prop-types"

const ProductsCard = ({ data }) => {
  return (
    <div className="mb-10">
     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 place-items-center">
      {/* card section  */}
      {data.map((data, i) => (
        <div key={i}>
          <div>
            <img src={data.image} alt="I'm camera shy" className="h-[180px] w-[280px] object-fit rounded-md"/>
          </div>
        </div>
      ))}
     </div>
    </div>
  )
}

ProductsCard.propTypes = {
  data: PropTypes.isRequired,
}

export default ProductsCard