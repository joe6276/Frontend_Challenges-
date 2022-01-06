import Card from "./Component/Card";
import ProductPage from "./Component/ProductPage";

import './app.css'
import { Route, Routes } from "react-router";
function App() {
  return (
    <div className="app-container">
      <Routes>

        <Route path="/"  exact element={<Card/>}/>
        
        
        <Route path="/challenge/first" element={<ProductPage/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
