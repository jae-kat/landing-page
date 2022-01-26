/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ChatIcon from './images/ChatIcon';
import hseLogo from './images/hseLogo.svg';

export default function Nav() {
  const stickyNavStyles = css`
    background-color: rgba(38, 33, 56, 0.7);
    position: fixed;
    width: 100%;
    z-index: 2;
    backdrop-filter: blur(5px);
  `;

  const navStyles = css`
    display: flex;
    gap: 10px;
    align-items: center;
    list-style: none;
    padding: 8px 16px;
  `;

  const logoStyles = css`
    width: 262px;
    &:hover {
      cursor: pointer;
    }
  `;

  const dropdownStyles = css`
    width: 40px;
    height: 40px;
    margin-left: auto;
    background: none;
    border: none;
    color: white;
    border-radius: 7px;
    &:hover {
      background-color: rgba(226, 232, 240, 0.1);
      cursor: pointer;
    }
  `;

  const signInStyles = css`
    background-color: #d6d6d6;
    border-radius: 7px;
    border: none;
    font-size: 16px;
    font-weight: bold;
    padding: 0 1rem;
    text-align: center;
    height: 40px;
    cursor: pointer;
  `;

  const iconStyles = css`
    width: 16px;
    margin-right: 10px;
  `;

  const chatStyles = css`
    position: fixed;
    z-index: 2;
    top: 90%;
    left: 90%;
    background-color: #962751;
    border-radius: 40px;
    color: white;
    padding: 0.5rem 1.5rem;
    font-size: 15px;
    font-weight: bold;
    letter-spacing: 0.1rem;
    display: inline-block;
    white-space: nowrap;
    &:hover {
      cursor: pointer;
    }
  `;

  return (
    <div>
      <div css={stickyNavStyles}>
        <nav css={navStyles}>
          <img src={hseLogo} alt="hypersay events logo" css={logoStyles} />

          <button css={dropdownStyles}>
            <svg
              width="24px"
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
            >
              <path
                fill="currentColor"
                d="M21 13H3a1 1 0 010-2h18a1 1 0 010 2zm0 5H3a1 1 0 010-2h18a1 1 0 010 2zm0-10H3a1 1 0 010-2h18a1 1 0 010 2z"
              />
            </svg>
          </button>

          <button css={signInStyles}>
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              aria-hidden="true"
              css={iconStyles}
            >
              <path
                fill="currentColor"
                d="M17 9V7c0-2.8-2.2-5-5-5S7 4.2 7 7v2c-1.7 0-3 1.3-3 3v7c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3v-7c0-1.7-1.3-3-3-3zM9 7c0-1.7 1.3-3 3-3s3 1.3 3 3v2H9V7zm4.1 8.5l-.1.1V17c0 .6-.4 1-1 1s-1-.4-1-1v-1.4c-.6-.6-.7-1.5-.1-2.1.6-.6 1.5-.7 2.1-.1.6.5.7 1.5.1 2.1z"
              />
            </svg>
            Sign in
          </button>
        </nav>
      </div>
      <div css={chatStyles}>
        <ChatIcon />
        {'  '}Chat
      </div>
    </div>
  );
}
