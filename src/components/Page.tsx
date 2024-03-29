import * as React from "react";
import styled from "@emotion/styled";

import { dimensions } from "../styles/constants";

const StyledPage = styled.main`
  display: block;
  flex: 1;
  position: relative;
  padding: ${dimensions.containerPadding}rem;
  margin-bottom: 3rem;
  z-index: 1;
`;

interface PageProps {
  className?: string;
}

const Page: React.FC<PageProps> = ({ children, className }) => <StyledPage className={className}>{children}</StyledPage>;

export default Page;
