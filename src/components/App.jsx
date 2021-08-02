import Navbar from "./Organisms/Navbar";
import Routing from "./Utils/Routing"
import { BrowserRouter as Router } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routing />
      </Router>
    </div>
  );
}

export default App;
