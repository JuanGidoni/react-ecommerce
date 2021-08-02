import Button from "../../Atoms/Button";
import Heading from "../../Atoms/Heading"
import Parragraph from "../../Atoms/Parragraph";
import { useCartContext } from "../../Contexts/CartContext";
import CartCard from "../../Molecules/CartCard";

const CartList = () => {
 const {cart} = useCartContext();
 return (
  <div className="cart py-2">
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
   <Parragraph text={`Total de items: ${cart && cart.length}`}/>
   <Button type="button" className="btn btn-primary btn-center" text="Pagar ahora" />
  </div>
 )
}

export default CartList
