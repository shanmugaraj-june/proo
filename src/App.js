import {BrowserRouter,Routes , Route} from "react-router-dom"
import Home from "./componets/Home" 
import About from "./componets/About"; 
import Service from "./componets/Service"; 
import Project from "./componets/Project"; 
import Contact from "./componets/Contact";
const App = () => (
  <BrowserRouter>
    <Routes >
          <Route exact path = "/"  Component={ Home} />     
          <Route exact path = "/about" Component={About}  /> 
          <Route exact path = "/service" Component={Service} /> 
          <Route exact path ="/project" Component={Project} /> 
          <Route exact path = "/contact"  Component={ Contact} />
    </Routes>
  </BrowserRouter>
)


export default App ;
