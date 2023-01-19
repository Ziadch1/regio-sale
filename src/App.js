import Card from "./Components/card";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Layout from "./Components/layouat";
import Layout from "./Components/layouat";
import Dakhla from "./Components/Dakhla";
import Rabat from "./Components/Rabat";
import Tanger from "./Components/Tanger";
import Marrakech from "./Components/Marrakech";
// import Layout from "./layouat";
function App() {
 return(
    <div>
      
     {/* <Card/> */}
     
        
          <BrowserRouter>
            
            <Routes>
              <Route path="/" element={<Card />}/>
                <Route path="/1" element={<Rabat />} />
                <Route path="/2" element={<Tanger />} />
                <Route path="/3" element={<Marrakech />} />
                <Route path="/4" element={<Dakhla />} />
               
            </Routes>
            {/* <Layout/> */}
          </BrowserRouter>
       
      
    </div>
 )
 
}

export default App;
