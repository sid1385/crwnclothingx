import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const optionContainerStyles = css`
  padding: 0 25px;
`;

export const HeaderComponent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 70px;
`;

export const LogoContainer = styled.div`
  height: 100%;
  width: 70px;
  padding: 25px;
`;

export const Options = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 20px;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  ${optionContainerStyles}
`;

export const OptionDiv = styled.div`
  ${optionContainerStyles}
`;
