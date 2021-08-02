import { useEffect, useState } from "react"
import Logo from "../../Molecules/Logo"
import NavList from "../../Molecules/NavList"
import NavMobile from "../../Molecules/NavMobile";

const Navbar = () => {
 const [size, setSize] = useState(577);

 const getWindowSize = () => {
  return document.body.clientWidth;
 }

 useEffect(() => {
  window.addEventListener('resize', () => {
   setSize(getWindowSize());
  });
 }, [size])

 return (
  <div className="nav">
   <nav className="navbar">
    <Logo />
    {
     size >= 626 ?
      <NavList /> : <NavMobile />
    }
   </nav>
  </div>
 )
}

export default Navbar
