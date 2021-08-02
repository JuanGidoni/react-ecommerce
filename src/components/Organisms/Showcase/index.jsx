import ShowcaseContainer from "../../Molecules/ShowcaseContainer"
import Background from '../../Assets/images/background.jpg';
const Showcase = () => {

 return (
  <div className="container showcase"
   style={{
    background: `url(${Background})`,
    backgroundPosition: "center",
    backgroundSize: "cover"
   }}
  >
   <ShowcaseContainer categoryName="videographics" />
  </div>
 )
}

export default Showcase
