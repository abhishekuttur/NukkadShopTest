import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Buynow from "./Buynow";
import Home from "./Home";
function App() {
  return (
    <div className="App">


      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buynow />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
