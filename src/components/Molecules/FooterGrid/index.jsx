import Heading from "../../Atoms/Heading"
import Image from "../../Atoms/Image"
import Input from "../../Atoms/Input"
import Parragraph from "../../Atoms/Parragraph"
import Form from "../Form"
import { Link } from 'react-router-dom'
import List from "../../Organisms/List"
import ListItem from "../ListItem"
import Logo from "../../Assets/images/logo.svg"

const FooterGrid = () => {
 return (
  <>
   <div>
    <Image url={Logo} />
    <Parragraph text="Lorem ipsum dolor sit amet consectetur" />
   </div>
   <div>
    <Heading type="h3" text="Email Newsletter" />
    <Parragraph text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis obcaecati repellat dignissimos velit ullam adipisci laudantium iure! Qui, sapiente!" />
    <Form>
     <Input type="email" placeholder="Enter your email" name="emailNewslatter" />
     <Input type="submit" value="Subscribe" className="btn btn-primary" />
    </Form>
   </div>
   <div>
    <Heading type="h3" text="Site Links" />
    <List className="list">
     <ListItem>
      <Link to="/">Home</Link>
     </ListItem>
     <ListItem>
      <Link to="/products">Products</Link>
     </ListItem>
     <ListItem>
      <Link to="/cart">Cart</Link>
     </ListItem>
     <ListItem>
      <Link to="/search">Search</Link>
     </ListItem>
     <ListItem>
      <Link to="/contact">Contact</Link>
     </ListItem>
    </List>
   </div>
   <div>
    <Heading type="h2" text="Follow Us"/>
    <Parragraph text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo reiciendis obcaecati repellat dignissimos velit ullam adipisci laudantium iure! Qui, sapiente!" />
   </div>
   <div>
    <Parragraph text="Copyright 2021 - React Ecommerce by Juan Ignacio Gidoni" />
   </div>
  </>
 )
}

export default FooterGrid
