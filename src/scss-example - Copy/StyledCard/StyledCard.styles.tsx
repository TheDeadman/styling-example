import styled from '@emotion/styled';

// Styled-components
export const StyledCardComponent = styled.div`
  padding: 2em;
`;

export const StyledButton = styled.button<{ $variant: 'even' | 'odd' }>`
  border-radius: 8px;
  border: 3px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;

  &:hover {
    border: 3px solid #646cff;
  }

  ${(props) =>
        props.$variant === 'even' &&
        `
    text-decoration: underline;
  `}

  ${(props) =>
        props.$variant === 'odd' &&
        `
    text-decoration: overline;
  `}

  @media (prefers-color-scheme: light) {
    background-color: #f9f9f9;
  }
`;