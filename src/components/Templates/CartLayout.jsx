import { CartProvider } from "../Contexts/CartContext"

const CartLayout = ({ children }) => {
 return (
  <>
  <CartProvider>
   {children}
  </CartProvider>
  </>
 )
}

export default CartLayout