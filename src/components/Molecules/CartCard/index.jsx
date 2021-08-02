import { useState } from "react";
import Input from "../../Atoms/Input"
import Label from "../../Atoms/Label"

const CartCard = ({ className, item, i }) => {

 const [quantity, setQuantity] = useState(item.quantity);

 return (
  <div className={className}>
   <div className="cart-box">
    <Label idFor={`quantity${i}`} text={item.title} />
    <Input
     id={`quantity${i}`}
     type="number"
     min="1"
     max="100"
     onChange={(e) => setQuantity(e.target.value)}
     onBlur={(e) => setQuantity(e.target.value)}
     value={quantity}
    />
   </div>
  </div>
 )
}

export default CartCard
