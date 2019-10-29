import * as React from "react";
import styled from "@emotion/styled";
import HeroLanding from "./page-components/landing";
import "bootstrap/dist/css/bootstrap.min.css";
import Page from "../components/Page";
import { colors } from "../styles/constants";

const LandingDiv = styled.div`
  width: auto;
  height: 100vh;
  background-color: ${colors.generic.white};
`;

const LandingContainer = styled(Page)`
  background-color: ${colors.theme.lightBlack};
  max-height: 100vh;
`;

const PageContainer = styled.div``;

const IndexPage = () => (
  <PageContainer>
    <LandingContainer>
      <HeroLanding />
    </LandingContainer>
    <LandingDiv />
  </PageContainer>
);

export default IndexPage;
