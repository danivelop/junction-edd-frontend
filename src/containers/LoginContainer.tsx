import React, { useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';
import { LoginForm } from 'views/Login/LoginForm';
import { Formik, Form } from 'formik';
import Store from 'store/Store';
import { useHistory } from 'react-router-dom';

interface UserFormValues {
  username: string;
  password: string;
}

const LoginContainer = React.memo(() => {
  const history = useHistory();

  const store = useMemo(() => {
    return Store.getInstance();
  }, []);

  const handleLogin = useCallback(
    async (data: UserFormValues) => {
      const response = await store.login(data);

      if (response.status === 200) {
        history.push('/main');
      }
    },
    [history, store],
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
