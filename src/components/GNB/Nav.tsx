import styled from "styled-components";
import NavButton from "./NavButton";
import { NavDataInterface } from "./NavButton";

const NavWrapper = styled.div`
  width: 250px;
  height: 100vh;
  padding: 50px 15px 0 30px;
  box-sizing: border-box;
  background-color: #f6f6f6;
  position: fixed;
  left: 0;
  z-index: -1;
`;

const data = [
  {
    title: "Overview",
    content: ["Introduction", "Getting started"],
  },
  {
    title: "Components",
    content: ["Accordion", "Alert Dialog", "Checkbox", "Toast"],
  },
] as NavDataInterface[];

const Nav = () => {
  return (
    <NavWrapper>
      {data.map((value, index) => {
        return <NavButton key={`gnb-nav-${value.title}`} value={value} />;
      })}
    </NavWrapper>
  );
};

export default Nav;
