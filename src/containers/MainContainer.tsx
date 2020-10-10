import { Spacing } from 'components/Spacing';
import React, { useCallback, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import Store from 'store/Store';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';
import { Navigator } from 'views/Main/Navigator';
import { ProductCard } from 'views/Main/ProductCard';

//TODO(@kirby): + 버튼 옆에 아이콘 추가하기
const MainContainer = React.memo(() => {
  const history = useHistory();

  const store = useMemo(() => {
    return Store.getInstance();
  }, []);

  useEffect(() => {
    store.getDiaries();
  }, [store]);

  const handleRedirect = useCallback(() => {
    history.push('/diary');
  }, [history]);

  return (
    <Container>
      <Content>
        <Navigator stepName="DIARY" />
        <Title>일기 리스트</Title>
        <Spacing top={20} />
        <ProductCardWrapper>
          <ProductCard />
          <Spacing left={60} />
          <ProductCard />
          <Spacing left={60} />
          <ProductCard />
        </ProductCardWrapper>
        <Description>‘+’ 버튼을 눌러서 일기를 써보세요.</Description>
        <FooterSection>
          <Button onClick={handleRedirect}>+</Button>
        </FooterSection>
      </Content>
    </Container>
  );
});

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
  font-size: 24px;
  font-weight: bold;
  color: ${Colors.orange};
  margin-top: 25px;
  text-align: center;
`;

const ProductCardWrapper = styled.div`
  display: flex;
`;

const Description = styled.div`
  text-align: right;
  font-family: 'GounBam';
`;

const FooterSection = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 25px;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.5);
  border: none;
  outline: none;
  cursor: pointer;
  background-color: ${Colors.orange};
  border-radius: 50%;
  color: ${Colors.white};
  font-size: 20px;
`;

export default MainContainer;
