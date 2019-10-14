import * as React from "react"
import * as RB from "react-bootstrap"
import "./nav.css"
import styled from "@emotion/styled"

const NavbarLayout = styled.div`
  @media (min-width: 992px) {
    padding-left: 15%;
    padding-right: 15%;
    padding-top: 3vh;
  }
`
const StyledSpan = styled.span`
  color: #53fec8;
  font-family: "Arial";
  transition: all 0.38s ease-in-out;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 992px) {
    display: none;
  }
`
const StyledBrand = styled(RB.Navbar.Brand)`
  color: #53fec8;
  font-family: "Arial";
  transition: all 0.38s ease-in-out;
  font-size: 28px;
  font-weight: 600;

  :hover {
    color: pink;
  }
  margin-right: 5px;
`

const Header = () => (
  <NavbarLayout>
    <RB.Navbar collapseOnSelect expand="lg" sticky="top" bg="#000000" variant="dark">
      <StyledBrand href="#home">Formtastic</StyledBrand>
      <StyledSpan>| The Contact Service API That Could.</StyledSpan>
      <RB.Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <RB.Navbar.Collapse id="responsive-navbar-nav">
        <RB.Nav className="ml-auto">
          <RB.Nav.Link href="#features">Features</RB.Nav.Link>
          <RB.Nav.Link href="#pricing">Pricing</RB.Nav.Link>
          <RB.Nav.Link href="#blog">Blog</RB.Nav.Link>
          <RB.Button>Get Started</RB.Button>
        </RB.Nav>
      </RB.Navbar.Collapse>
    </RB.Navbar>
  </NavbarLayout>
)

export default Header
