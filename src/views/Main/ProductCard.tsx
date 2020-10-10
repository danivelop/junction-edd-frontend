import React from 'react';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';

const THUMBNAIL_URL =
  'https://previews.123rf.com/images/helenfield/helenfield1507/helenfield150700257/42898068-%ED%96%89%EB%B3%B5%ED%95%9C-%EC%95%84%EC%9D%B4%EB%93%A4%EC%9D%B4-%EB%8B%A4%EC%B1%84%EB%A1%9C%EC%9A%B4-%EA%B7%B8%EB%A6%BC-%EC%8A%A4%ED%83%80%EC%9D%BC%EC%9D%84-%EA%B7%B8%EB%A6%AC%EB%8A%94-%EC%95%84%EC%9D%B4.jpg';

export const ProductCard = React.memo(() => {
  return (
    <Container>
      <Thumbnail src={THUMBNAIL_URL} />
      <Content>
        <Title>오늘은 집에 못가서 슬펐다</Title>
        <Date>2020년 11월 11일 목요일</Date>
      </Content>
    </Container>
  );
});

const Container = styled.div`
  width: 280px;
  height: 400px;
`;

const Thumbnail = styled.img`
  width: 280px;
  height: 280px;
  border: 1px solid ${Colors.gray3};
`;

const Content = styled.div`
  padding: 30px 20px 40px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Date = styled.div`
  font-size: 12px;
  margin-top: 4px;
`;
