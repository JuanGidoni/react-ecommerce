import { CartProvider } from "../Contexts/CartContext"

const CartLayout = ({ children, className }) => {
 return (
  <div className={className}>
   <CartProvider>
    {children}
   </CartProvider>
  </div>
 )
}

export default CartLayout
