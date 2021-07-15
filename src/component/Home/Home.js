import React from "react";
import "../Home/home.css"
import jorge from "../../img/jorge.png"


function Welcoming() {
  return <div className="welcoming" id="home">
    <div className="left">
      <div className="img-container">
       <img src={jorge} alt="Image if myself" className="jorge-photo"/>
      </div>
    </div>
    <div className="right">
      <div className="intro-container">
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
    </div>
  </div>;
}

export default Welcoming;
