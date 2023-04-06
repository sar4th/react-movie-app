import React from "react";
import Navbar from "./components/navbar/Navbar";
import "./App.css"
import Banner from "./components/navbar/Banner/Banner";
import RowPost from "./components/RowPost/RowPost";
import {ORGINALS,ACTION} from "../src/urls"
function App() {
  return (
<div className="App">
  <Navbar/>
  <Banner/>
  <RowPost url={ORGINALS} title="Netflix Orginals"/>
  <RowPost url={ACTION} title="Action" isSmall/>
</div>
  );
}

export default App;
