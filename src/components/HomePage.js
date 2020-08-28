import React from "react";
import { Image, Header } from "semantic-ui-react";
import welcomeImg from "//home/youssef/projects/bookingContextHooks/booking-context-hooks/src/utils/welcomeImg.jpg";
const HomePage = () => {
  return (
    <div>
      <Header as="h1" color="blue">
        Welcome To BookiT
      </Header>
      <Image src={welcomeImg}></Image>
    </div>
  );
};

export default HomePage;
