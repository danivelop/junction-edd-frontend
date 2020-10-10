import React from 'react';
import { Route, RouteComponentProps, RouteProps } from 'react-router-dom';
import styled from 'styled-components';
import { Header } from './Header';

interface Props extends RouteProps {
  component: React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any>;
}

const RouteWithHeader = ({ component: Component, ...restProps }: Props): JSX.Element => (
  <Route
    {...restProps}
    render={routeProps => (
      <Container>
        <Header />
        <Contents>
          <Component {...routeProps} />
        </Contents>
      </Container>
    )}
  />
);

const Container = styled.div`
  height: 100%;
  width: 100%;
`;

const Contents = styled.div`
  width: 100%;
  height: calc(100% - 70px);
`;

export default RouteWithHeader;
