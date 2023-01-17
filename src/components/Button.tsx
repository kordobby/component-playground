import React, { ReactNode } from "react";
import { FC } from "react";
import styled, { css } from "styled-components";
import { flex } from "../utils/flex";

/*-----------------------*
 * Primitive Button
 * props
  - children : button text
  - *leftSlot : <icon/>
  - *loading : boolean ( you can use this with Async proces )
 *-----------------------*/

interface PrimitiveButtonInterface {
  children: ReactNode;
  leftSlot?: ReactNode;
  loading: boolean;
}

const PrimitiveButton: FC<PrimitiveButtonInterface> = ({
  children,
  leftSlot,
  loading,
}) => {
  return (
    <StButton>
      {loading ? (
        <InnerButton>{loading}</InnerButton>
      ) : (
        <InnerButton>
          <>{leftSlot}</>
          <ButtonText>{children}</ButtonText>
        </InnerButton>
      )}
    </StButton>
  );
};

interface PrimitiveButtonInterface {
  loading: boolean;
  children: ReactNode;
  leftSlot?: ReactNode;
}

const StButton = styled.button``;

const InnerButton = styled.div`
  ${flex({})}
`;

const ButtonText = styled.span`
  color: black;
`;
export default PrimitiveButton;
