import Showcase from "../../Organisms/Showcase"
import MainLayout from "../../Templates/MainLayout"
import ProductsLayout from "../../Templates/ProductsLayout"
import Products from "../Products"

const Home = () => {
  return (
    <MainLayout>
      <Showcase />
      <ProductsLayout className="container">
        <Products />
      </ProductsLayout>
    </MainLayout>
  )
}

export default Home
