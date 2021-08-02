import { Link } from 'react-router-dom'

const NavItem = ({ className, text, href, current }) => {
 return (
  <li className={className}>
   <Link to={href} children={text} className={`${current ? 'nav-link current' : 'nav-link'}`} />
  </li>
 )
}

export default NavItem
