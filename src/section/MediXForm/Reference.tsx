import React from 'react';
import { ReferenceCard } from '../../components/atoms/ReferenceCard/ReferenceCard';
import styled from 'styled-components';

const StyledReferenceContainer = styled.div`
  align-items: flex-start;
  background-color: #ffffff;
  display: flex;
  flex: 0 0 auto;
  flex-direction: column;
  gap: 10px;
  padding: 71px 130px;
  position: relative;
  width: 100%;

  & .ref-title {
    align-items: center;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 74px;
    position: relative;
  }

  & .text-wrapper-25 {
    color: #000;
    font-family: 'Poppins', Helvetica;
    font-size: 48px;
    font-weight: 600;
    height: auto;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: auto;
    margin-bottom: 40px;
  }

  & .card-wrapper {
    align-items: flex-start;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    position: relative;
    width: 100%;
    justify-content: space-between;
  }

  & .reference-card-instance {
    flex: 0 0 auto !important;
  }
`;

export const ReferenceContainer = (): JSX.Element => {
  return (
    <StyledReferenceContainer>
      <div className="ref-title">
        <div className="text-wrapper-25">Reference</div>
      </div>
      <div className="card-wrapper">
        <ReferenceCard
          className="reference-card-instance"
          property1="default"
          unsplash="https://c.animaapp.com/3h8jrA1X/img/unsplash-7uxn7nudorc-2.svg"
        />
        <ReferenceCard
          className="reference-card-instance"
          property1="default"
          unsplash="https://c.animaapp.com/3h8jrA1X/img/unsplash-7uxn7nudorc-1.svg"
        />
        <ReferenceCard
          className="reference-card-instance"
          property1="default"
          unsplash="https://c.animaapp.com/3h8jrA1X/img/unsplash-7uxn7nudorc.svg"
        />
      </div>
    </StyledReferenceContainer>
  );
};
