import Card from "./Component/Card";
import ProductPage from "./Component/ProductPage";
import Testimonial from "./Component/Testimonial";

import './app.css'
import { Route, Routes } from "react-router";
function App() {
  return (
    <div className="app-container">
      <Routes>

        <Route exact path="/"  exact element={<Card/>}/>
        
        
        <Route path="/challenge/first" element={<ProductPage/>}></Route>
        <Route path="/challenge/second" element={<Testimonial/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
