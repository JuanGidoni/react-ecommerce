import NavItem from "../../Atoms/NavItem"

const NavList = () => {
 return (
  <ul className="nav-list">
   <NavItem className="nav-item" text="Home" href="/" />
   <NavItem className="nav-item" text="Products" href="/products" />
  </ul>
 )
}

export default NavList
