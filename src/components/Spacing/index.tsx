import styled from 'styled-components';

export const Spacing = styled.div<{ top?: number; left?: number }>`
  margin-top: ${({ top }) => `${top}px`};
  margin-left: ${({ left }) => `${left}px`};
`;
