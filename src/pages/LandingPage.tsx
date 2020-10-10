import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';

const LandingPage = () => {
  return (
    <Container>
      <FlexDiv>
        {/* TODO(@kirby): 나중에 로고 생기면 로고로 바꾸기 */}
        <Logo />
        <Title>
          감정 그림 일기 <br /> Emotion Drawing Diary
        </Title>
      </FlexDiv>
      <Description>
        비대면 사회 현상은 자신을 되돌아볼 수 있는 좋은 기회일지도 몰라요. <br />
        EDD. 감정 그림일기로 자신을 되돌아보고 맞춤형 콘텐츠를 추천받아보세요!
      </Description>
      <Button>EDD. 시작하기</Button>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  background-image: url('/images/bg_main.svg');
  padding: 306px 360px;
`;

const FlexDiv = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  width: 127px;
  height: 127px;
  border-radius: 10px;
  background-color: ${Colors.white};
`;

const Title = styled.h2`
  color: ${Colors.white};
  font-size: 48px;
  margin-left: 29px;
`;

const Description = styled.div`
  color: ${Colors.white};
  font-size: 18px;
  line-height: 1.44;
`;

//TODO(@kirby): 나중에 버튼 디자인 나오면 바꾸기
const Button = styled.button`
  width: 300px;
  height: 56px;
  background-color: ${Colors.white};
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 67px;
`;

export default LandingPage;
