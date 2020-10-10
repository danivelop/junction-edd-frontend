import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';
import { LoginForm } from 'views/Login/LoginForm';
import { Formik, Form } from 'formik';
import Store from 'store/Store';

interface UserFormValues {
  username: string;
  password: string;
}

const LoginContainer = React.memo(() => {
  const store = useMemo(() => {
    return Store.getInstance();
  }, []);

  const handleLogin = useCallback(
    (data: UserFormValues) => {
      store.login(data);
    },
    [store],
  );

  return (
    <Container>
      <Formik initialValues={{ username: '', password: '' }} onSubmit={handleLogin}>
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <LoginForm />
          </Form>
        )}
      </Formik>
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
