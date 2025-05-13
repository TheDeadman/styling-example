import styled from '@emotion/styled';

export const ThemedButton = styled.button<{ $variant: 'even' | 'odd' }>`
  margin: var(--mui-spacing, 1rem);

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
`;
