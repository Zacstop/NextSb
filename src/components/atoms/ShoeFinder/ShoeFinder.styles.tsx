import styled from 'styled-components';

export const StyledShoeFinder = styled.div`
  align-items: flex-start;
  background-color: var(--secondary-colorswhite);
  border: 1px solid;
  border-color: var(--other-colorsyellowish-green);
  border-radius: 24px;
  display: inline-flex;
  gap: 10px;
  padding: 8px 12px;
  position: relative;

  & .text-wrapper {
    color: var(--other-colorsyellowish-green);
    font-family: var(--body-text-regular-font-family);
    font-size: var(--body-text-regular-font-size);
    font-style: var(--body-text-regular-font-style);
    font-weight: var(--body-text-regular-font-weight);
    letter-spacing: var(--body-text-regular-letter-spacing);
    line-height: var(--body-text-regular-line-height);
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }
`;
