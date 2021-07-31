import Heading from "../../Atoms/Heading"
import { useCartContext } from "../../Contexts/CartContext"
import CartCard from "../../Molecules/CartCard"

const CartList = () => {
 const {cart} = useCartContext();
 return (
  <div className="cart">
   <Heading
    type="h1"
    text={cart && cart.length > 0 ? "Your cart" : "Your cart is empty"}
   />
   <div className="cart-list">
    {
     cart && cart.length > 0 && cart.map(
      (v, i) =>
       <CartCard className="cart-card" item={v} key={i} i={i} />
     )
    }
   </div>
  </div>
 )
}

export default CartList
