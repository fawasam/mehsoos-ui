import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import CountdownDisplay from "./design/Timer";
import Ticket from "../components/Ticket";

const Counter = () => {
  const item = roadmap[0];
  return (
    <div className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10 md:mt-16 mt-10">
        <div className="relative grid gap-1 md:gap-4 md:pb-[7rem]">
          <div
            className={`even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
              item.colorful ? "" : "bg-n-6"
            }`}
          >
            <div className="relative p-8 bg-gradient-to-b from-yellow-200 via-cyan-200 to-blue-400 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div className="z-1">
                <h4 className="h4 mb-4 text-center font-semibold text-blue-600">
                  Lottery Draw Starts In:
                </h4>
                <p className="body-2 text-center text-blue-700 font-bold text-xl md:text-6xl">
                  <CountdownDisplay initialSeconds={15782807} />
                </p>
              </div>
            </div>
          </div>
          <Gradient />
        </div>

        <Ticket className="md:-mt-10 mt-10 mb-10" />
      </div>
    </div>
  );
};

export default Counter;