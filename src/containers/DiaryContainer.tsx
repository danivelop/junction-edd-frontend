import React, { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import { Navigator } from 'views/Main/Navigator';
import { Colors } from 'utils/Colors';

const DiaryContainer: React.FC = () => {
  const [content, setContent] = useState<string>('');

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setContent(value);
  }, []);

  const handleSubmit = useCallback(() => {
    if (content.length > 100) {
      return alert('You should put content less than 100');
    }
    // TODO(@daniel): PATCH /api/diary에 content담아서 날리기
  }, [content]);

  useEffect(() => {
    // TODO(@daniel): GET /api/diary날려서 초대장 확인하기
  }, []);

  return (
    <Container>
      <Content>
        <Navigator stepName="DIARY" />
        <Title>Please describe how you feel today in one sentence.</Title>
        <Wrapper>
          <InputWrapper>
            <Input
              value={content}
              onChange={handleChange}
              placeholder="I was sad because the pizza restaurant I wanted to go in Itaewon closed today."
            />
            <TextCount>{content.length}/100</TextCount>
          </InputWrapper>
        </Wrapper>
        <Button onClick={handleSubmit}>Next</Button>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: ${Colors.bgColor};
`;

const Content = styled.div`
  width: 1200px;
  height: 720px;
  background-color: ${Colors.white};
  padding: 66px 120px 55px;
`;

const Title = styled.div`
  color: ${Colors.orange};
  font-size: 24px;
  margin-top: 25px;
  font-weight: bold;
  text-align: center;
`;

const Wrapper = styled.div`
  height: 336px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${Colors.gray3};

  margin-top: 23px;
`;

const InputWrapper = styled.div`
  width: 600px;
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 600px;
  padding: 0 50px 10px;
  text-align: center;
  font-size: 18px;
  outline: none;
  border: 0;
  border-bottom: 1px solid ${Colors.gray};

  &::placeholder {
    color: ${Colors.gray3};
  }
`;

const TextCount = styled.div`
  align-self: flex-end;
  margin-top: 10px;
`;

const Button = styled.div`
  width: 234px;
  height: 36px;
  margin: 50px auto 0;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${Colors.orange};
  border-radius: 18px;
  cursor: pointer;
`;

export default DiaryContainer;
