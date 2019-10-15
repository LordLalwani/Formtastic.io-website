import * as React from "react";
import styled from "@emotion/styled";
import * as ReactBootstrap from "react-bootstrap";
import bgTL from "../../static/svg/bg-tl.svg";
import bgBR from "../../static/svg/bg-br.svg";
import messenger from "../../static/svg/messenger.svg";
import Header from "../../components/Header";
import { colors } from "../../styles/constants";

const BackgroundImgLeft = styled.img`
  position: absolute;
  bottom: auto;
  right: auto;
  left: 0;
  top: 0;
  z-index: -1;
  width: 50%;
`;
const BackgroundImgRight = styled.img`
  position: absolute;
  top: auto;
  left: auto;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 50%;
`;
const LandingDiv = styled.div`
  width: auto;
  height: 100vh;
  overflow: auto;
`;

const StyledContainer = styled(ReactBootstrap.Container)`
  width: 80%;
  max-height: 60%;
  position: absolute;
  left: 50%;
  top: 55%;
  transform: translate(-50%, -50%);

  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width: 375px) {
    width: 100%;
    height: 100%;
  }
`;

const StyledRow = styled(ReactBootstrap.Row)``;

const StyledColumn = styled(ReactBootstrap.Col)`
  margin: auto;
  text-align: left;
  h3 {
    font-family: 'Arial';
    font-size: 25px;
    font-weight: 600;
    color: ${colors.generic.white};
  }
  h4 {
    font-family: 'Arial';
    font-size: 25px;
    font-weight: 600;
    color: ${colors.theme.green};
  }

  p {
    color #52556f;
  }
`;

const StyledImg = styled.img`
  width: 100%;
`;

const Landing = () => (
  <LandingDiv>
    <Header />
    <BackgroundImgLeft src={bgTL} />
    <BackgroundImgRight src={bgBR} />
    <StyledContainer>
      <StyledRow>
        <StyledColumn md>
          <StyledImg src={messenger} />
        </StyledColumn>
        <StyledColumn md>
          <h3>We provide the backend</h3>
          <h4>So you can provide flawless communication</h4>
          <p>Simply connect your forms to our service & we'll send you the submissions!</p>
          <ReactBootstrap.Button>Get Started</ReactBootstrap.Button>
        </StyledColumn>
      </StyledRow>
    </StyledContainer>
  </LandingDiv>
);

export default Landing;
