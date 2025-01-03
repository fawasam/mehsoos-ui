import React from "react";
import LotteryActivity from "../components/design/LotteryActivity";
import Header from "../components/Header";
import Section from "../components/Section";
import Footer from "../components/Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";

const UserProfile = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Section
          className="pt-[6rem] -mt-[5.25rem]"
          crosses
          crossesOffset="lg:translate-y-[5.25rem]"
          customPaddings
          id="hero"
        >
          <LotteryActivity />
        </Section>
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default UserProfile;
