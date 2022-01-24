/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import hseLogo from './images/hseLogo.svg';

export default function Nav() {
  const navStyles = css`
    display: flex;
    gap: 10px;
    background-color: #262138;
    list-style: none;
    margin: 0;
    box-shadow: 0 5px;
  `;

  const logoStyles = css`
    height: 3rem;
  `;

  const buttonStyles = css`
    background-color: #d6d6d6;
    border-radius: 10px;
    font-size: 16px;
    margin-left: auto;
    line-height: 1.2;
  `;

  return (
    <div>
      <nav css={navStyles}>
        <img src={hseLogo} alt="hypersay events logo" css={logoStyles} />

        <button css={buttonStyles}>Sign in</button>
      </nav>
    </div>
  );
}
