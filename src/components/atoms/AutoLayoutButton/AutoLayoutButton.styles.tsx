import styled from 'styled-components';

export const StyledAutoLayoutButton = styled.button`
  all: unset;
  align-items: center;
  box-sizing: border-box;
  display: flex;
  height: 56px;
  justify-content: center;
  padding: 16px 20px;
  position: relative;
`;

export const Icon = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-grow: 1;
  gap: 7px;
  justify-content: center;
  position: relative;
`;

export const Label = styled.div`
  color: #ffffff;
  font-family: var(--w-h5-semibold-600-font-family);
  font-size: var(--w-h5-semibold-600-font-size);
  font-style: var(--w-h5-semibold-600-font-style);
  font-weight: var(--w-h5-semibold-600-font-weight);
  letter-spacing: var(--w-h5-semibold-600-letter-spacing);
  line-height: var(--w-h5-semibold-600-line-height);
  margin-top: -1px;
  position: relative;
  text-align: center;
  white-space: nowrap;
  width: fit-content;
`;
