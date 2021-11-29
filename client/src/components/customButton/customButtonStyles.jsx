import styled, { css } from "styled-components";

const selectButtonStyles = (props) => {
  if (props.isgooglesignin) {
    return GoogleButton;
  }
  return props.inverted ? InvertedButton : BaseButton;
};

const GoogleButton = css`
  background-color: #4285f4;
  color: white;

  &:hover {
    background: none;
    background-color: #357ae8;
  }
`;

const InvertedButton = css`
  color: black;
  background-color: white;

  &:hover {
    color: white;
    background-color: black;
  }
`;

const BaseButton = css`
  color: white;
  background-color: black;

  &:hover {
    color: black;
    background-color: white;
  }
`;

export const CustomButtonComponent = styled.button`
  height: 40px;
  width: auto;
  min-width: 165px;
  border: none;
  color: white;
  background-color: black;
  cursor: pointer;
  letter-spacing: 1px;
  font-family: "Open Sans Condensed";
  text-transform: uppercase;
  font-weight: bolder;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    border: 1px solid black;
  }
  ${selectButtonStyles}
`;
