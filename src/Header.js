/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import peopleBubbles from './images/peopleBubbles.png';

const headerBoxStyles = css`
  display: flex;
  justify-content: center;
`;

const headerStyles = css`
  display: grid;
  grid-template: 50% 50% / 1fr;
  background-color: #262138;
  color: white;
`;

const textStyles = css`
  margin: 20px;
  grid-column: 1 / span 1;
  line-height: 2.5rem;
  h1 {
    font-size: 34px;
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
  padding: 15px;
  border-radius: 7px 0 0 7px;
`;
const buttonStyles = css`
  background-color: #ff85a1;
  border: 3px solid #ff85a1;
  padding: 15px;
  border-radius: 0 7px 7px 0;
`;

const imgStyles = css`
  grid-column: 2;
  width: 50%;
`;

export default function Header() {
  return (
    <div css={headerBoxStyles}>
      <div css={headerStyles}>
        <div css={textStyles}>
          <h1>Built for organisers. Loved by participants</h1>
          <p>
            Digital events platform <span>hosting</span> live and recorded{' '}
            <span>content to</span>
            socially-engaged <span>and</span> inclusive <span>audiences</span>.
          </p>
          <input css={inputStyles} />
          <button css={buttonStyles}>Book a demo</button>
        </div>
        <img
          src={peopleBubbles}
          alt="bubble pictures of some people"
          css={imgStyles}
        />
      </div>
    </div>
  );
}
