import Card from "./Component/Card";
import ProductPage from "./Component/ProductPage";
import Testimonial from "./Component/Testimonial";

import './app.css'
import { Route, Routes } from "react-router";
import Room from "./Component/Room";
import Brief from "./Component/Brief/brief";
import Price from "./Component/Price";
import Social from "./Component/Social";
import Stat from "./Component/Stat";
import Time from "./Component/Time";
function App() {
  return (
    <div className="app-container">
      <Routes>
        <Route exact path="/"  exact element={<Card/>}/>
        <Route path="/challenge/first" element={<ProductPage/>}></Route>
        <Route path="/challenge/second" element={<Testimonial/>}></Route>
        <Route path="/challenge/third" element= {<Room/>}></Route>
        <Route path="/challenge/four" element={<Brief/>}></Route>
        <Route  path="/challenge/five" element={<Price/>}></Route>
        <Route  path="/challenge/six" element={<Social/>}></Route>
        <Route  path="/challenge/seven" element={<Stat/>}></Route>
        <Route  path="/challenge/eight" element={<Time/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
