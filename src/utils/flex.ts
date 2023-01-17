import { css } from "styled-components";

interface FlexInterface {
  justify?: string;
  align?: string;
  direction?: string;
}

export const flex = ({
  justify = "center",
  align = "center",
  direction = "row",
}: FlexInterface) => {
  return css`
    justify-content: ${justify};
    align-items: ${align};
    direction: ${direction};
  `;
};
