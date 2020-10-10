import React, { useCallback, useMemo, useState } from 'react';
import Store from 'store/Store';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';
import { Canvas } from 'views/Drawing/Canvas';
import { Navigator } from 'views/Main/Navigator';

const DrawingContainer = React.memo(() => {
  const [operations, setOperations] = useState([]);

  const store = useMemo(() => {
    return Store.getInstance();
  }, []);

  const onChange = useCallback(
    (afterOperation: any) => {
      setOperations(afterOperation);

      let trace: any[] = [];

      for (let line of afterOperation) {
        let tempX: any[] = [];
        let tempY: any[] = [];

        for (let point of line.points) {
          tempX.push(point?.x);
          tempY.push(point?.y);
        }
        trace.push([tempX, tempY]);
      }

      store.getGuess(
        trace,
        document.getElementsByClassName('canvas')[0].clientWidth,
        document.getElementsByClassName('canvas')[0].clientHeight,
      );
    },
    [store],
  );

  return (
    <Container>
      <Content>
        <Navigator stepName="DIARY" />
        <Title>그림을 그리면 오늘을 차분하게 마무리하실 수 있을거에요.</Title>
        <CanvasWrapper>
          <Canvas operations={operations} onChange={onChange} />
        </CanvasWrapper>
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
  color: ${Colors.orange};
  font-size: 24px;
  margin-top: 25px;
  font-weight: bold;
  text-align: center;
`;

const CanvasWrapper = styled.div`
  display: flex;
  border: 1px solid ${Colors.gray3};

  margin-top: 23px;
`;

export default DrawingContainer;
