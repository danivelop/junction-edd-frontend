import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';

export const Divider = () => {
  return <StyledDivider />;
};

const StyledDivider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Colors.gray};
`;
