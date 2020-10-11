import RouteWithHeader from 'layouts/RouteWithHeader';
import { LandingPage, LoginPage, MainPage, DrawingPage, DiaryPage } from 'pages';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <RouteWithHeader exact path="/" component={LandingPage} />
        <RouteWithHeader exact path="/login" component={LoginPage} />
        <RouteWithHeader exact path="/main" component={MainPage} />
        <RouteWithHeader exact path="/drawing" component={DrawingPage} />
        <RouteWithHeader exact path="/diary" component={DiaryPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
