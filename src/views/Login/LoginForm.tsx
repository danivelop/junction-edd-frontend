import { Divider } from 'components/Divider';
import { InputField } from 'components/InputField';
import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';
import { Button } from 'components/Button';
import { ButtonColor } from 'components/Button/interface';

export const LoginForm = React.memo(() => {
  return (
    <Container>
      <Title>로그인</Title>
      <Spacing top={30} />
      <InputField name="username" title="이메일" placeholder="이메일 ( abc@prosentation.kr )" />
      <Spacing top={20} />
      <InputField type="password" name="password" title="비밀번호" placeholder="비밀번호를 입력해주세요." />
      <Spacing top={60} />
      <Button color={ButtonColor.ORANGE}>로그인</Button>
      <Spacing top={40} />
      <FindText>아이디 찾기 | 비밀번호 변경</FindText>
      <Spacing top={40} />
      <Divider />
      <Spacing top={30} />
      <Button type="submit" color={ButtonColor.LIGHT_ORANGE}>
        간편가입하기
      </Button>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 582px;
  height: 700px;
  box-shadow: 0 0 4px 2px rgba(0, 0, 0, 0.1);
  background-color: ${Colors.white};
  padding: 60px 101px 102px;
`;

const Spacing = styled.div<{ top: number }>`
  margin-top: ${({ top }) => `${top}px`};
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: ${Colors.orange};
`;

const FindText = styled.div`
  font-size: 14px;
  color: ${Colors.darkGray};
  cursor: pointer;
`;

// const Button = styled.button`
//   width: 380px;
//   height: 56px;
//   cursor: pointer;
//   outline: none;
//   border-radius: 100px;
//   background-color: ${Colors.orange};
//   border: none;
//   color: ${Colors.white};
//   font-size: 18px;
// `;
