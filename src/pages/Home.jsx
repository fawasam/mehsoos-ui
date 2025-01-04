import LatestDrawResult from "../components/LatestDrawResult";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Benefits from "../components/Benefits";
import Collaboration from "../components/Collaboration";
import Counter from "../components/Counter";
import RecentWinners from "../components/design/RecentWinners";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import Roadmap from "../components/Roadmap";
import Services from "../components/Services";
import LotterySection from "../components/Ticket";
import Ticket from "../components/Ticket";

const Home = () => {
  return (
    <>
      <div className="">
        <Hero />
        <Counter />
        {/* <Benefits /> */}

        {/* <HowItWorks /> */}
        <LatestDrawResult />
        <RecentWinners />
        {/* <Collaboration /> */}
        {/* <Services /> */}
        {/* <Pricing /> */}
        {/* <Roadmap /> */}
      </div>

      <ButtonGradient />
    </>
  );
};

export default Home;
