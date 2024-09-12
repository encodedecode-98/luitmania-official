import { Route,Routes } from "react-router-dom";
import Admin from "./routes/admin";
import Home from './routes/home'
import './app.scss'
function App() {
 
  return (
   <Routes>
    <Route path ="/" element= {<Home/>}/>
    <Route path ="/admin" element= {<Admin/>}/>
   </Routes>
  );
}

export default App;
