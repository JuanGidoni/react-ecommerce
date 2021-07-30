import Button from "../Button"
import Heading from "../Heading"
import Image from "../Image"
import Parragraph from "../Parragraph"
import Price from "../Price"

const ProductCard = ({product}) => {
 return (
  <article className="card">
   <Image url={product.image} />
   <Heading 
   type="h3"
   text={product.title}
   className="cart-title"
   />
   <Parragraph 
   text={product.description}
   />
   <Price price={product.price} />
   <Button className="btn" text="Buy now" />
  </article>
 )
}

export default ProductCard
