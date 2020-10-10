import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';

interface Props {
  title?: string;
  name?: string;
  placeholder?: string;
}

export const InputField = React.memo<Props>(({ title, name, placeholder }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Input name={name} placeholder={placeholder} />
    </Container>
  );
});

const Container = styled.div``;

const Title = styled.div`
  font-size: 14px;
`;

const Input = styled.input`
  outline: none;
  border-radius: 3px;
  border: 1px solid ${Colors.gray};
  padding: 5px 15px;
  width: 360px;
  font-size: 16px;
  height: 40px;
  margin-top: 8px;

  ::-webkit-input-placeholder {
    color: ${Colors.gray};
  }
`;
