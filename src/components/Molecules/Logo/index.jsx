import Image from "../../Atoms/Image"
import LogoImage from '../../Assets/images/logo.svg'
import { Link } from "react-router-dom"

const Logo = () => {
 return (
  <div className="logo">
   <Link to="/">
     <Image
      info="Welcome to 123"
      url={LogoImage}
      className="logo"
     />
    </Link>
  </div>
 )
}

export default Logo
