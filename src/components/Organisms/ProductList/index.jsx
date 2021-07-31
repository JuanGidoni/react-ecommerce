import ProductsGrid from "../../Molecules/ProductsGrid"
import { products } from "../../Utils/Products"

const ProductList = () => {
 
 return (
  <div className="products-list">
   <ProductsGrid products={products} />
  </div>
 )
}

export default ProductList
