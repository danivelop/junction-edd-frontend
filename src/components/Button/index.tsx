import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';
import { backgroundColors, textColors } from './interface';

type ButtonColor = 'ORANGE' | 'LIGHT_ORANGE';

interface Props {
  children: React.ReactNode;
  color: ButtonColor;
  type?: 'button' | 'submit' | 'reset';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export const Button = React.memo<Props>(({ children, color, type, onClick, ...restProps }) => {
  return (
    <StyledButton color={color} onClick={onClick} type={type} {...restProps}>
      {children}
    </StyledButton>
  );
});

const StyledButton = styled.button<{ color: ButtonColor }>`
  width: 380px;
  height: 56px;
  cursor: pointer;
  outline: none;
  border-radius: 100px;
  background: ${({ color }) => backgroundColors[color]};
  border: none;
  color: ${({ color }) => textColors[color]};
  font-size: 18px;
  border: 1px solid ${Colors.orange};
`;
