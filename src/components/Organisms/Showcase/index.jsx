import ShowcaseContainer from "../../Molecules/ShowcaseContainer"
import Background from '../../Assets/images/background.jpg';
const Showcase = () => {

 return (
  <div className="showcase"
   style={{
    background: `url(${Background})`,
   }}
  >
   <ShowcaseContainer categoryName="videographics" />
  </div>
 )
}

export default Showcase
