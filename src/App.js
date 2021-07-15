import React from "react";
import "./App.css";
import NavBar from "./component/nav/NavBar";
import Home from "./component/Home/Home";
import About from "./component/about/About";
import Contact from "./component/contact/Contact";


function App() {
  return (
    <div className="app">
      <NavBar/>
      <div className="sections">
      <Home/>
      <About/>
      <Contact/>
      </div>
    </div>
  );
}
export default App;
