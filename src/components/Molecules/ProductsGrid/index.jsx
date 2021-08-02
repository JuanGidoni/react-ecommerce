import ProductCard from "../../Atoms/ProductCard"

const ProductsGrid = ({products}) => {
 return (
  products && products.length > 0 ?
  products.map(
   (v,i) => <ProductCard key={i} product={v} />
  )
  : 'Product List not found...'
 )
}

export default ProductsGrid
