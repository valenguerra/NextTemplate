import styled, { css } from "styled-components";
import { color, layout, position, space } from "styled-system";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

export const icons = {
  simpleArrowRight: FiChevronRight,
  simpleArrowLeft: FiChevronLeft,
};

export const Icon = styled.svg`
  color: inherit;
  overflow: visible;
  ${p => getSize(p)}
  ${p => p.strokeWidth ?? `strokeWidth: ${p.strokeWidth};`}
  ${p =>
    p.button &&
    css`
      cursor: pointer;
    `}
  
  ${space}
  ${layout}
  ${position}
  ${color}
`;

const getSize = ({ size = 24 }) => css`
  height: ${size}px;
  width: ${size}px;
`;

export const SmallIcon = props => <Icon {...props} size={18} />;
