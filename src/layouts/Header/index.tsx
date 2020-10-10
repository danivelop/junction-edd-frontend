import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';
import { Icon } from 'components/Icon';

export const Header = React.memo(() => {
  return (
    <Container>
      <Icon icon="logo" />
    </Container>
  );
});

const Container = styled.header`
  height: 70px;
  background-color: ${Colors.white};
  padding: 21px 363px;
`;
