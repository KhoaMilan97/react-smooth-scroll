import React, { useState } from "react";

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWraper,
  ArrowForward,
  ArrowRight,
} from "./HeroSection.styles";
import { Button } from "../ButtonElement";
import Video from "../../assets/videos/video.mp4";

export default function HeroSection() {
  const [hover, setHover] = useState(false);

  const onChange = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Virtual Banking Made Easy</HeroH1>
        <HeroP>
          Sign up for a new account today and receive $250 in credit towards
          your next payment.
        </HeroP>
        <HeroBtnWraper>
          <Button
            to="signup"
            onMouseEnter={onChange}
            onMouseLeave={onChange}
            primary="true"
            dark="true"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWraper>
      </HeroContent>
    </HeroContainer>
  );
}
