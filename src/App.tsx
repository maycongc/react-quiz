import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { QuestionaryContextProvider } from './contexts/QuestionaryContext';

import { Home } from './pages/Home';
import { Verification } from './pages/Verification';
import { Questionary } from './pages/Questionary';
import { Result } from './pages/Result';

import { GlobalStyle } from './globalStyles';

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <QuestionaryContextProvider>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/verification" component={Verification} />
            <Route path="/questionary" component={Questionary} />
            <Route path="/result" component={Result} />
          </Switch>
        </QuestionaryContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
