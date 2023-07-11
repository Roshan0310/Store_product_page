import React from "react";
import "../styles/home.css";

const Home = () => {
  return (
    <div id="home">
      <div className="section1">
        <div className="mainHeading">
          <h1>
            The Sale Is <br /> Live Now !
          </h1>
        </div>

        <div className="paragraphSection">
          <h3>20% Off On All Products</h3>
        </div>

        <div className="buttonSection">
          <button id="btn2">SHOP NOW</button>
          <button id="btn1">FIND MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
