import * as React from "react";
import * as ReactBootstrap from "react-bootstrap";
import "./Header.css";
import styled from "@emotion/styled";

const NavbarDiv = styled.div`
  @media (min-width: 992px) {
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 3vh;
  }
`;
const Span = styled.span`
  color: #53fec8;
  font-family: "Arial";
  transition: all 0.38s ease-in-out;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 992px) {
    display: none;
  }
`;
const ReactBootstrapBrand = styled(ReactBootstrap.Navbar.Brand)`
  color: #53fec8;
  font-family: "Arial";
  transition: all 0.38s ease-in-out;
  font-size: 28px;
  font-weight: 600;

  :hover {
    color: pink;
  }
  margin-right: 5px;
`;

const Header = () => (
  <NavbarDiv>
    <ReactBootstrap.Navbar collapseOnSelect expand="lg" sticky="top" bg="#000000" variant="dark">
      <ReactBootstrapBrand href="#home">Formtastic</ReactBootstrapBrand>
      <Span>| The Contact Service API That Could.</Span>
      <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
        <ReactBootstrap.Nav className="ml-auto">
          <ReactBootstrap.Nav.Link href="#Features">Features</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="#Pricing">Pricing</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Nav.Link href="#Blog">Blog</ReactBootstrap.Nav.Link>
          <ReactBootstrap.Button>Get Started</ReactBootstrap.Button>
        </ReactBootstrap.Nav>
      </ReactBootstrap.Navbar.Collapse>
    </ReactBootstrap.Navbar>
  </NavbarDiv>
);

export default Header;
