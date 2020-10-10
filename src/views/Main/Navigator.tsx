import React from 'react';
import { Icon } from 'components/Icon';
import styled from 'styled-components';
import { Colors } from 'utils/Colors';

type Step = 'INITIAL' | 'DIARY' | 'PICTURE' | 'RECOMMENDATION';

interface Props {
  stepName: Step;
}

export enum StepName {
  INITIAL = 'INITIAL',
  DIARY = 'DIARY',
  PICTURE = 'PICTURE',
  RECOMMENDATION = 'RECOMMENDATION',
}

export const Navigator = React.memo<Props>(({ stepName, ...restProps }) => {
  return (
    <Container {...restProps}>
      <Badge>{stepName === StepName.DIARY ? <Icon icon="face_active" /> : <Icon icon="face_active" />}</Badge>
      <Divider />
      <Badge>{stepName === StepName.PICTURE ? <Icon icon="draw" /> : <Icon icon="draw" />}</Badge>
      <Divider />
      <Badge>{stepName === StepName.RECOMMENDATION ? <Icon icon="recommend" /> : <Icon icon="recommend" />}</Badge>
    </Container>
  );
});

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Divider = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${Colors.gray2};
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.1);
  background-color: ${Colors.white};
`;
