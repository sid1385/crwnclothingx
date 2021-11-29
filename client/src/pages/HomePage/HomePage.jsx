import React from "react";
import "./HomePage.scss";
import Directory from "../../components/directory/directory";
import { HomePageComponent } from "./HomePageStyles";

const HomePage = () => {
  return (
    <HomePageComponent>
      <h1>Welcome to my Homepage</h1>

      <Directory />
    </HomePageComponent>
  );
};

export default HomePage;
