import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { Colors } from 'utils/Colors';

interface ProductCardProps {
  diary: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ diary }) => {
  return (
    <Container>
      <Thumbnail src={diary.image} />
      <Content>
        <Title>{diary.content}</Title>
        <Date>{moment(diary.createdAt).format('YYYY년 MM월 DD일')}</Date>
      </Content>
    </Container>
  );
};

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

export default ProductCard;
