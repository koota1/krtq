import {Route, Routes} from "react-router-dom";
import Landing from "./components/Pages/Landing.jsx";
import Authentication from "./components/Authentication.jsx";
import HomeContent from "./components/Pages/HomeContent.jsx";
import NotFound from "./components/Pages/NotFound.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div>
        <Navbar/>
        <Routes>
            <Route index element={<Landing/>}/>
            <Route path="/auth" element={<Authentication/>}/>
            <Route path="/home" element={<HomeContent/>}/>
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    </div>
  )
}


export default App;
