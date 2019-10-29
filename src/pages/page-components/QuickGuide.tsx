import * as React from "react";
import "./Header.css";
import styled from "@emotion/styled";
import * as ReactBootstrap from "react-bootstrap";
import { colors } from "../../styles/constants";
import "./page.css";
import viewData from "../../static/svg/view-data.svg";
import sendForm from "../../static/svg/send-form-with-hand.svg";
import createForm from "../../static/svg/create-forms.svg";

const ContainingDiv = styled(ReactBootstrap.Container)`
  padding-left: 5%;
  padding-right: 5%;
  padding-top: 3vh;

  background-color: white;
  height: auto;
  width: 50%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -10%);
  border-radius: 10px;
  -moz-box-shadow: 3px 3px #ccc;
  -webkit-box-shadow: 3px 3px #ccc;
  box-shadow: 2px 2px 2px 2px #ccc;
  h2 {
    font-family: "Arial";
    font-size: 30px;
    font-weight: 900;
    color: ${colors.theme.lightBlack};
  }
`;

const StyledRowHeader = styled(ReactBootstrap.Row)`
  margin: auto;
  padding-left: 25%;
  padding-right: 25%;
  margin: 30px 0px;

  h2 {
    font-family: "Source Sans Pro", sans-serif;
    color: black;
    font-weight: 900;
    font-size: 35px;
  }
`;
const StyledRow = styled(ReactBootstrap.Row)`
  width: 100%;
  margin: 0px 0px;
  padding: 0px 0%;
  text-align: center;

  h4 {
    font-family: "Source Sans Pro", sans-serif;
    color: black;
    font-weight: 900;
  }
`;
const StyledImg = styled(ReactBootstrap.Image)`
  width: 130px;
  height: 130px;
  margin-bottom: 20px;
`;

const QuickGuide = () => (
  <ContainingDiv>
    <StyledRowHeader>
      <h2>How Formtastic Works</h2>
    </StyledRowHeader>
    <StyledRow>
      <ReactBootstrap.Col>
        <div>
          <StyledImg src={createForm} rounded />
          <h4>Create</h4>
          <p>Simply create a contact form with our form builder.</p>
        </div>
      </ReactBootstrap.Col>
      <ReactBootstrap.Col>
        <div>
          <StyledImg src={sendForm} rounded />
          <h4>Submit</h4>
          <p>Use your new form to submit data!</p>
        </div>
      </ReactBootstrap.Col>
      <ReactBootstrap.Col>
        <div>
          <StyledImg src={viewData} rounded />
          <h4>View</h4>
          <p>Sign in and view your data.</p>
        </div>
      </ReactBootstrap.Col>
    </StyledRow>
    <StyledRowHeader>
      <ReactBootstrap.Button block>Get Started</ReactBootstrap.Button>
    </StyledRowHeader>
  </ContainingDiv>
);

export default QuickGuide;
