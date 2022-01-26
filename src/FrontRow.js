/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import firstVideo from './images/firstVideo.mp4';
import frontRow from './images/frontRow.webp';
import yellowWaves from './images/yellowWaves.svg';

const waveStyles = css`
  background-color: #262138;
  width: 100%;
`;
const rotatedWave = css`
  transform: rotate(180deg);
`;
const yellowDivStyles = css`
  background-color: #f4c643;
  color: #262138;
  display: flex;
  flex-flow: column;
  align-items: center;
  text-align: center;
  font-weight: lighter;
  outline: 10px solid #f4c643;
`;
const headerStyles = css`
  text-align: center;
  font-weight: lighter;
  font-size: 30px;
`;
const boldStyles = css`
  font-size: 72px;
  font-weight: bold;
`;
const frontRowStyles = css`
  width: 600px;
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;
const paraStyles = css`
  font-size: 20px;
`;
const iconStyles = css`
  width: 64px;
`;
const iconsWrapper = css`
  display: flex;
`;
const iconCardStyles = css`
  width: 133px;
  font-size: 18px;
`;
const videoStyles = css`
  width: 600px;
  border-radius: 7px;
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;
const buttonStyles = css`
  cursor: pointer;
  margin: 60px 0 20px 0;
  background-color: #f5ca52;
  box-shadow: 0 10px 10px #ddb33c;
  border: none;
  border-radius: 7px;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  color: #2d2739;
`;

export default function FrontRow() {
  return (
    <div>
      <img
        src={yellowWaves}
        alt="background of yellow waves"
        css={waveStyles}
      />

      <div css={yellowDivStyles}>
        <h1 css={headerStyles}>
          What is a <br />
          <span css={boldStyles}>FrontRow?</span>
        </h1>
        <img src={frontRow} alt="a row of user avatars" css={frontRowStyles} />
        <p css={paraStyles}>
          A 6-seat online social bubble that allows a digital <br />
          audience to behave like a live audience.
        </p>
        <div css={iconsWrapper}>
          <div css={iconCardStyles}>
            <svg css={iconStyles} viewBox="0 0 24 24" focusable="false">
              <g>
                <path
                  fill="currentColor"
                  d="M16 4.95a4 4 0 00-8 0v6.1a4 4 0 108 0v-6.1z"
                  opacity=".6"
                />
                <path
                  fill="currentColor"
                  d="M20 11a1 1 0 00-2 0 6 6 0 11-12 0 1 1 0 10-2 0 8.007 8.007 0 007 7.93V21H9a1 1 0 000 2h6a1 1 0 000-2h-2v-2.07A8.006 8.006 0 0020 11z"
                />
              </g>
            </svg>
            <p>Group audio call</p>
          </div>
          <div css={iconCardStyles}>
            <svg css={iconStyles} viewBox="0 0 24 24" focusable="false">
              <g>
                <path
                  fill="currentColor"
                  d="M2.617 17.924A.999.999 0 012 17V5a3 3 0 013-3h10a3 3 0 013 3v6.873a3 3 0 01-3 3H6.538l-2.831 2.834a1 1 0 01-1.09.217z"
                  opacity=".6"
                />
                <path
                  fill="currentColor"
                  d="M21 22a.999.999 0 01-.707-.293l-2.374-2.374H11a3.003 3.003 0 01-3-3V11a3.003 3.003 0 013-3h8a3.003 3.003 0 013 3v10a1 1 0 01-1 1z"
                />
              </g>
            </svg>
            <p>Private chat</p>
          </div>
          <div css={iconCardStyles}>
            <svg css={iconStyles} viewBox="0 0 24 24" focusable="false">
              <g>
                <path
                  fill="currentColor"
                  d="M18.787 8.595l-.951 1.839c-.277.54-.632.497-.781-.093l-2.13-8.313c-.355-1.42-2.421-.71-2.13.71l1.242 5.68c.313 1.42-.355 1.66-.823.276l-2.03-6.006a1.1 1.1 0 00-2.08.71l2.008 6.027c.469 1.42-.22 1.598-.823.291L7.996 4.875c-.618-1.32-2.691-.59-2.08.71l2.882 5.857c.632 1.356-.057 1.483-.937.39L5.88 9.291a1.512 1.512 0 00-1.47-.583c-.433.15-.54.71-.241 1.229C6.88 14.693 8.2 17.17 8.2 17.17c2.613 4.118 8.357.916 9.429-1.186l3.322-7.227c.37-.909-1.505-1.413-2.165-.163z"
                />
                <path
                  fill="currentColor"
                  d="M18.698 19.298c.251.099.458.287.579.528l1.384 2.74H11.93a1.094 1.094 0 01.71-1.291l5.275-1.981c.252-.096.532-.094.784.004z"
                  opacity=".6"
                />
              </g>
            </svg>
            <p>Say Hello & meet people</p>
          </div>
        </div>
        <p>Why we built the FrontRow (44s)</p>
        <video css={videoStyles} src={firstVideo} muted controls>
          Video Error
        </video>
        <button css={buttonStyles}>Read more</button>
      </div>
      <img
        src={yellowWaves}
        alt="background of yellow waves"
        css={[waveStyles, rotatedWave]}
      />
    </div>
  );
}
