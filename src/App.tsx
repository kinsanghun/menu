import React from 'react';
import logo from './logo.svg';
import './App.css';
import Router from 'router/router';
import { StyledRootContainer } from 'components/styled';

function App() {
  return (
    <StyledRootContainer>
      <Router />
    </StyledRootContainer>
  );
}

export default App;
