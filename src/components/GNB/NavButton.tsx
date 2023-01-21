import { FC } from "react";
import styled from "styled-components";

const NavButtonWrapper = styled.div`
  h1 {
    font-size: 18px;
    font-weight: 700;
    margin: 0;
  }
  margin-top: 50px;
`;

const StNavButton = styled.button`
  width: 100%;
  height: 30px;
  border-radius: 30px;
  margin-top: 6px;
  font-size: 14px;
  text-align: start;
  padding-left: 15px;
  background-color: transparent;
  border: none;
  &:hover {
    background-color: black;
    color: white;
  }
`;

export interface NavDataInterface {
  title: string;
  content: string[];
}

interface NavButtonInterface {
  value: NavDataInterface;
}

const NavButton: FC<NavButtonInterface> = ({ value }) => {
  return (
    <>
      <NavButtonWrapper>
        <h1>{value.title}</h1>
        {value.content.map((value, index) => {
          return <StNavButton key={`nav-button-${value}`}>{value}</StNavButton>;
        })}
      </NavButtonWrapper>
    </>
  );
};

export default NavButton;
