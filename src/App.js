import './App.css';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import FrontRow from './FrontRow';
import Header from './Header';
import MainFeatures from './MainFeatures';
import Nav from './Nav';

const globalStyles = css`
  box-sizing: border-box;
  font-family: Inter, sans-serif;
  position: relative;
`;

function App() {
  return (
    <div css={globalStyles}>
      <Nav />
      <Header />
      <FrontRow />
      <MainFeatures />
    </div>
  );
}

export default App;
