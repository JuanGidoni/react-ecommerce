import { Link } from 'react-router-dom'

const NavItem = ({ className, text, href }) => {
 return (
  <li className={className}>
   <Link to={href} children={text} className="nav-link" />
  </li>
 )
}

export default NavItem
