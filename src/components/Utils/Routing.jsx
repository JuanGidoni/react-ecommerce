import { Route, Switch } from 'react-router-dom'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Notfound from '../Pages/Notfound'
import Products from '../Pages/Products'
import Search from '../Pages/Search'

const Routing = () => {
 return (
  <div className="container-fluid">
   <Switch>
    <Route exact path="/" component={() => <Home />} />
    <Route exact path="/products" component={() => <Products />} />
    <Route exact path="/products/:id" component={() => <Products />} />
    <Route exact path="/search/:id" component={() => <Search />} />
    <Route exact path="/contact" component={() => <Contact />} />
    <Route exact path="*" component={() => <Notfound />} />
   </Switch>
  </div>
 )
}

export default Routing
