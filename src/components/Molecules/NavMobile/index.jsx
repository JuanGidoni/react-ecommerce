import { FaList } from 'react-icons/fa';
import Button from '../../Atoms/Button';
const NavMobile = () => {
 return (
  <div className="navbar-mobile">
   <Button type="button" text={
    <FaList/>
   }
   className="btn"
   />
  </div>
 )
}

export default NavMobile
