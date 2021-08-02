import Heading from "../../Atoms/Heading"
import ProductList from "../../Organisms/ProductList"
import ProductsLayout from "../../Templates/ProductsLayout"

const Products = () => {
 return (
  <div className="products">
  <ProductsLayout className="container">
   <Heading
    type="h2"
    className="p-1"
    text="All Products"
   />
   <ProductList />
  </ProductsLayout>
  </div>
 )
}

export default Products
