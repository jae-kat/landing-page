/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import peopleBubbles from './images/peopleBubbles.png';

const headerStyles = css`
  display: flex;
  gap: 20px;
  justify-content: space-around;
  padding: 30px;
  padding-top: 150px;
  background-color: #262138;
  color: white;
`;

const textStyles = css`
  line-height: 2.4rem;
  flex: 60%;
  padding: 50px;

  h1 {
    font-size: 47px;
    line-height: 3.5rem;
    font-weight: 500;
  }
  p {
    font-size: 24px;
    font-weight: bold;
  }
  span {
    color: #bdbcc3;
  }
`;

const inputStyles = css`
  border: 3px solid #ff85a1;
  background-color: #2f2a40;
  padding: 10px;
  border-radius: 7px 0 0 7px;
  font-size: 18px;
`;
const buttonStyles = css`
  background-color: #ff85a1;
  border: 3px solid #ff85a1;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #1e222e;
  border-radius: 0 7px 7px 0;
`;

const imgStyles = css`
  flex: 40%;
  width: 35%;
  height: 35%;
  padding: 30px;
`;

export default function Header() {
  return (
    <div css={headerStyles}>
      <div css={textStyles}>
        <h1>Built for organisers. Loved by participants</h1>
        <p>
          Digital events platform <span>hosting</span> live and recorded{' '}
          <span>content to</span>
          socially-engaged <span>and</span> inclusive <span>audiences</span>.
        </p>
        <input css={inputStyles} placeholder="your work email" />
        <button css={buttonStyles}>Book a demo</button>
      </div>
      <img
        src={peopleBubbles}
        alt="bubble pictures of some people"
        css={imgStyles}
      />
    </div>
  );
}
