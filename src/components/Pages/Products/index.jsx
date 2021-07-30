import Heading from "../../Atoms/Heading"
import ProductList from "../../Organisms/ProductList"

const Products = () => {
 return (
  <div className="products">
   <Heading
    type="h2"
    className=""
    text="All Products"
   />
   <ProductList />
  </div>
 )
}

export default Products
