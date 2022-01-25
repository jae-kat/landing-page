/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import GreenSquare from './images/GreenSquare.js';
import IconSpeak from './images/IconSpeak.js';
import OrangeSubtitles from './images/OrangeSubtitles.js';
import PurpleMovie from './images/PurpleMovie.js';
import RedCircles from './images/RedCircles.svg';
import YellowWriggles from './images/YellowWriggles.js';

export default function MainFeatures() {
  const sectionStyles = css`
    display: flex;
    flex-flow: column;
    align-items: center;
    text-align: center;
    font-weight: lighter;
    color: #bdbcc3;
    background-color: #262138;
    outline: 5px solid #262138;
  `;
  const gridStyles = css`
    display: grid;
    grid-gap: 15px;
    margin: 15px;
    grid-template-columns: repeat(3, minmax(200px, 380px));
  `;
  const gridCardStyles = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.04);
    padding: 1.5rem;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
  `;
  const buttonStyles = css`
    background-color: transparent;
    border: none;
    box-shadow: 0px 5px 6px #2a2639;
    border-radius: 5px;
    color: white;
    font-size: 14px;
    font-family: Inter, sans-serif;
    padding: 5px 12px;
    align-self: flex-end;
  `;
  const headerStyles = css`
    color: white;
    font-size: 36px;
    margin: 0;
  `;
  const paraStyles = css`
    max-width: 800px;
    font-size: 16px;
    margin: 8px 0 0 0;
    font-weight: 500;
    line-height: 1.5;
  `;
  const subheaderStyles = css`
    color: white;
    margin: 0;
  `;
  const cardTextStyles = css`
    margin-top: 8px;
  `;
  const headerIconStyles = css`
    background-image: linear-gradient(to right, #f03666, #4e2369);
    background-clip: text;
    color: transparent;
    font-size: 36px;
    font-weight: bold;
    width: min-content;
    margin: 0;
  `;
  const buttonMoreStyles = css`
    border: none;
    cursor: pointer;
    background-color: #a3e1ca;
    border-radius: 7px;
    color: black;
    font-size: 16px;
    font-family: Inter, sans-serif;
    font-weight: 500;
    padding: 10px 16px;
    margin: 48px 0;
  `;

  return (
    <div css={sectionStyles}>
      <h1 css={headerStyles}>Main Features</h1>
      <p css={paraStyles}>
        Hypersay Events is an end-to-end solution for digital and hybrid events.
        Our features are intuitive and easy to use. Starting with the
        registration page, through to ticketing and ending with a customised
        live streaming stage. Below is a list of the 6 favourite features of our
        customers.
      </p>
      <div css={gridStyles}>
        <div css={gridCardStyles}>
          <IconSpeak />
          <h2 css={subheaderStyles}>FrontRow&trade;</h2>
          <p css={cardTextStyles}>
            Introducing an entirely new way to attend a live event for up to
            10000 people, where no one feels alone.
          </p>
          <button css={buttonStyles}>Read more</button>
        </div>

        <div css={gridCardStyles}>
          <GreenSquare />
          <h2 css={subheaderStyles}>Interactive Spaces</h2>
          <p css={cardTextStyles}>
            Fast interaction in a super-low latency video streaming space for
            highly engaged audiences.
          </p>
          <button css={buttonStyles}>Read more</button>
        </div>

        <div css={gridCardStyles}>
          <OrangeSubtitles />
          <h2 css={subheaderStyles}>Live Subtitles</h2>
          <p css={cardTextStyles}>
            Automated live subtitle captioning and translations in 60+ languages
            for your international attendees.
          </p>
          <button css={buttonStyles}>Read more</button>
        </div>

        <div css={gridCardStyles}>
          <h2 css={headerIconStyles}>Studio</h2>
          <h2 css={subheaderStyles}>Live Streaming Studio</h2>
          <p css={cardTextStyles}>
            You don’t have a sophisticated video broadcasting solution? Use our
            built-in easy solution to stream immediately.
          </p>
          <button css={buttonStyles}>Read more</button>
        </div>

        <div css={gridCardStyles}>
          <PurpleMovie />
          <h2 css={subheaderStyles}>Media Sharing</h2>
          <p css={cardTextStyles}>
            Create a TV-like, professional experience by combining pre-recorded
            and live content in the same streaming session.
          </p>
        </div>

        <div css={gridCardStyles}>
          <YellowWriggles />
          <h2 css={subheaderStyles}>Soundscapes</h2>
          <p css={cardTextStyles}>
            Bespoke music and ambience sounds, facilitating emotional
            connections and interactions.
          </p>
        </div>
      </div>
      <button css={buttonMoreStyles}>Browse all features</button>

      <img
        src={RedCircles}
        alt="background red circles divide the sections"
        width="100%"
      />
    </div>
  );
}
