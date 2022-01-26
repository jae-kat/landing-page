/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import peopleBubbles from './images/peopleBubbles.png';

const pageStyles = css`
  display: flex;
  justify-content: center;
  background-color: #262138;
`;
const headerStyles = css`
  display: flex;
  max-width: 1250px;
  padding: 180px 0 150px 0;
  color: white;
  @media screen and (max-width: 700px) {
    flex-wrap: wrap;
  }
`;

const textStyles = css`
  line-height: 2.4rem;
  flex: 60%;
  padding: 60px 50px 50px 50px;
  h1 {
    font-size: 3rem;
    line-height: 3rem;
    font-weight: 500;
  }
  p {
    font-size: 1.5rem;
    font-weight: bold;
  }
  span {
    color: #bdbcc3;
  }
  @media screen and (max-width: 760px) {
    padding: 10px;
    line-height: 1.4;
    h1 {
      line-height: 1.1;
      font-size: 2rem;
    }
    p {
      font-size: 1.1rem;
      letter-spacing: 1px;
    }
  }
`;

const inputStyles = css`
  border: 3px solid #ff85a1;
  background-color: #2f2a40;
  padding: 10px;
  border-radius: 7px 0 0 7px;
  font-size: 18px;
  @media screen and (max-width: 1000px) {
    width: 140px;
  }
`;
const buttonStyles = css`
  background-color: #ff85a1;
  border: 3px solid #ff85a1;
  padding: 10px;
  font-size: 18px;
  font-weight: bold;
  color: #1d212d;
  border-radius: 0 7px 7px 0;
`;

const imgBoxStyles = css`
  width: 40%;
  padding: 40px 45px 0 0;
  @media screen and (max-width: 1000px) {
    width: 50%;
  }
  @media screen and (min-width: 1000px) and (max-width: 700px) {
    width: 50%;
  }
  @media screen and (max-width: 700px) {
    width: 95%;
    padding: 10px;
    order: -1;
  }
`;
const imgStyles = css`
  width: 100%;
`;

export default function Header() {
  return (
    <div css={pageStyles}>
      <div css={headerStyles}>
        <div css={textStyles}>
          <h1>
            Built for organisers. <br /> Loved by participants
          </h1>
          <p>
            Digital events platform <span>hosting</span> live and recorded{' '}
            <span>content to </span>
            socially-engaged <span>and</span> inclusive <span>audiences</span>.
          </p>
          <input css={inputStyles} placeholder="your work email" />
          <button css={buttonStyles}>Book a demo</button>
        </div>
        <div css={imgBoxStyles}>
          <img
            src={peopleBubbles}
            alt="bubble pictures of some people"
            css={imgStyles}
          />
        </div>
      </div>
    </div>
  );
}
