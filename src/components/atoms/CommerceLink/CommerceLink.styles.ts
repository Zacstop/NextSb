import styled from 'styled-components';

export const StyledCommerceLink = styled.div`
  align-items: center;
  display: inline-flex;
  gap: 24px;
  position: relative;

  & .text-wrapper {
    color: var(--primary-colorsblack);
    font-family: var(--body-text-regular-font-family);
    font-size: var(--body-text-regular-font-size);
    font-style: var(--body-text-regular-font-style);
    font-weight: var(--body-text-regular-font-weight);
    letter-spacing: var(--body-text-regular-letter-spacing);
    line-height: var(--body-text-regular-line-height);
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .icons-black-unfill {
    height: 24px !important;
    position: relative !important;
    width: 24px !important;
  }
`;
