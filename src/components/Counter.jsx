import Button from "./Button";
import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { roadmap } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import CountdownDisplay from "./design/Timer";

const Counter = () => {
  const item = roadmap[0];
  return (
    <Section className="overflow-hidden" id="roadmap">
      <div className="container md:pb-10">
        <Heading title="Daily Lottery" />
        <div className="relative grid gap-1 md:gap-4 md:pb-[7rem]">
          <div
            className={` even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
              item.colorful ? "bg-conic-gradient" : "bg-n-6"
            }`}
          >
            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15 ">
              <div className=" z-1">
                <h4 className="h4 mb-4 text-center text-n-4">
                  Lottery Draw Starts In:
                </h4>
                <p className="body-2  text-center font-bold text-xl md:text-6xl">
                  <CountdownDisplay initialSeconds={15782807} />
                </p>
              </div>
            </div>
          </div>
          <Gradient />
        </div>

        {/* <div className="flex justify-center mt-12 md:mt-6 xl:mt-6">
          <Button href="/roadmap">Our roadmap</Button>
        </div> */}
      </div>
    </Section>
  );
};
export default Counter;
