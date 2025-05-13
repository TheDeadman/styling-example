import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';

// Keyframes for spinning logo

const logoSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Logo = styled.img<{ $isReact?: boolean }>`
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;

  &:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  ${(props) =>
    props.$isReact &&
    `
    &:hover {
      filter: drop-shadow(0 0 2em #61dafbaa);
    }
  `}

  @media (prefers-reduced-motion: no-preference) {
    animation: ${logoSpin} infinite 20s linear;
  }
`;

export const LogoLink = styled.a`
  display: inline-block;
  margin: 0 1em;
`;