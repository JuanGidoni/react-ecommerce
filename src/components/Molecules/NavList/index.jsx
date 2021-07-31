import NavItem from "../../Atoms/NavItem"

const NavList = () => {
 return (
  <ul className="nav-list">
   <NavItem className="nav-item" text="Home" href="/" current={true} />
   <NavItem className="nav-item" text="Products" href="/products" />
   <NavItem className="nav-item" text="Cart" href="/cart" />
   <NavItem className="nav-item" text="Search" href="/search" />
   <NavItem className="nav-item" text="Contact" href="/contact" />
  </ul>
 )
}

export default NavList
