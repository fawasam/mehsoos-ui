import ButtonGradient from "../assets/svg/ButtonGradient";

import Footer from "../components/Footer";
import Header from "../components/Header";
import Section from "../components/Section";

import Ticket from "../components/Ticket";

const TicketPage = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Ticket />
      </div>

      <ButtonGradient />
    </>
  );
};

export default TicketPage;
