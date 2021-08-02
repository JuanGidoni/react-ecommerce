import Container from "../../Atoms/Container"
import FooterGrid from "../../Molecules/FooterGrid"

const Footer = () => {
 return (
  <footer className="footer py-2">
   <Container fluid={true} className="footer-container p-1">
    <FooterGrid />
   </Container>
  </footer>
 )
}

export default Footer
