import React from "react";
import homeImage from "../../images/main_img.png";
import Header from "../header/Header";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Header />
      <div className="main-home-page">
        <div className="main-left-home-page">
          <div className="main-page-content">
            <h1>Connect with Vibes...</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              cumque exercitationem, at facilis earum velit omnis illum
              recusandae numquam eos, alias quos corporis.
            </p>
            <button className="main-page-btn">Get Started</button>
          </div>
        </div>
        <div className="main-right-home-page">
          <img className="homepage-img" src={homeImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
