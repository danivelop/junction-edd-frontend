import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';
import { LoginForm } from 'views/Login/LoginForm';

const LoginContainer = React.memo(() => {
  return (
    <Container>
      <LoginForm />
    </Container>
  );
});

export default LoginContainer;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${Colors.bgColor};
  height: 100%;
`;
