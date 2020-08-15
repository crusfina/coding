import React from "react";
import Slider from "./slider";
import CardWrapper from "./cards";
import { cardData } from "../data/data";

function Home() {
  return (
    <>
      <Slider></Slider>
      <CardWrapper cardData={cardData}></CardWrapper>
    </>
  );
}

export default Home;
