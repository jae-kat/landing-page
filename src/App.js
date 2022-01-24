/** @jsxImportSource @emotion/react */
import './App.css';
import { css } from '@emotion/react';
import FrontRow from './FrontRow';
import Header from './Header';
import Nav from './Nav';

const globalStyles = css`
  box-sizing: border-box;
  font-family: Inter, sans-serif;
`;

function App() {
  return (
    <div css={globalStyles}>
      <Nav />
      <Header />
      <FrontRow />
    </div>
  );
}

export default App;
