import React from "react";
import { images } from "../../constants";
import "./Chef.css";
import SubHeading from "../../components/SubHeading/SubHeading";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            We believe in the power of food to bring people together and create
            unforgettable experiences.
          </p>
        </div>
        <p className="p__opensans">
          At our restaurant, we are passionate about crafting dishes that not
          only tantalize the taste buds but also tell a story. Our commitment to
          using fresh, locally-sourced ingredients ensures that every bite is a
          celebration of flavor and quality.{" "}
        </p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign_image" />
      </div>
    </div>
  </div>
);

export default Chef;
