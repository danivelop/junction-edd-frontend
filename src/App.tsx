import RouteWithHeader from 'layouts/RouteWithHeader';
import { LandingPage } from 'pages';
import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { GlobalStyle } from 'styles/global-styles';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Switch>
        <RouteWithHeader exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
