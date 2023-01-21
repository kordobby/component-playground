import { FC, ReactNode } from "react";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  background-color: #fafafa;
  width: 100%;
  height: 100%;
`;

interface LayoutInterface {
  children: ReactNode;
}

const Layout: FC<LayoutInterface> = ({ children }) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
