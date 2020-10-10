import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';

const LandingPage = () => {
  return (
    <Container>
      <FlexDiv>
        <Title>
          감정 그림 일기 <br /> Emotion Drawing Diary
        </Title>
        <Description>
          비대면 사회 현상은 자신을 되돌아볼 수 있는 좋은 기회일지도 몰라요. <br />
          EDD. 감정 그림일기로 자신을 되돌아보고 맞춤형 콘텐츠를 추천받아보세요!
        </Description>
        <Button>
          <Link to="/main">EDD. 시작하기</Link>
        </Button>
      </FlexDiv>
    </Container>
  );
};

const Container = styled.div`
  height: 100%;
  position: relative;
  background-image: url('/images/bg_main.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
`;

const FlexDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  transform: translateY(-65%);
`;

const Title = styled.h2`
  color: ${Colors.white};
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  line-height: 48px;
`;

const Description = styled.div`
  margin-top: 16px;
  color: ${Colors.white};
  font-size: 14px;
  text-align: center;
  line-height: 1.44;
`;

//TODO(@kirby): 나중에 버튼 디자인 나오면 바꾸기
const Button = styled.button`
  width: 240px;
  height: 48px;
  background-color: ${Colors.white};
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 40px;
  border-radius: 24px;

  a {
    color: inherit;
  }
`;

export default LandingPage;
