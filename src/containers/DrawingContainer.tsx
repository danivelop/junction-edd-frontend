import { Button } from 'components/Button';
import { ButtonColor } from 'components/Button/interface';
import React, { useCallback, useMemo, useState } from 'react';
import Store from 'store/Store';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';
import { Canvas } from 'views/Drawing/Canvas';
import { Navigator } from 'views/Main/Navigator';

const DrawingContainer = React.memo(() => {
  const [operations, setOperations] = useState([]);
  const [guess, setGuess] = useState('');

  const store = useMemo(() => {
    return Store.getInstance();
  }, []);

  const onChange = useCallback(
    async (afterOperation: any) => {
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

      const guess = await store.getGuess(
        trace,
        document.getElementsByClassName('canvas')[0].clientWidth,
        document.getElementsByClassName('canvas')[0].clientHeight,
      );

      setGuess(guess);
    },
    [store],
  );

  return (
    <Container>
      <Content>
        <Navigator stepName="DIARY" />
        <Title>Drawing will relieve today's negative feelings. Please draw an object that can represent today.</Title>
        <CanvasWrapper>
          <Canvas operations={operations} onChange={onChange} />
        </CanvasWrapper>
        <ButtonWrapper>
          <StyledButton color={ButtonColor.ORANGE}>Next</StyledButton>
        </ButtonWrapper>
        <Guess>
          {guess && (
            <>
              It looks like <span>{guess}</span>
            </>
          )}
        </Guess>
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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledButton = styled(Button)`
  width: 234px;
  height: 36px;
  font-size: 16px;
  margin-top: 61px;
`;

const Guess = styled.div`
  font-size: 14px;
  text-align: center;
  margin-top: 12px;

  span {
    font-size: 18px;
    font-weight: bold;
    color: ${Colors.orange};
  }
`;

export default DrawingContainer;
