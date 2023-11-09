import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

interface Props {
  property1: 'variant-2' | 'default';
  className: string;
  unsplashClassName: string;
  unsplash: string;
}

const StyledBanner = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 500px;
  position: relative;
  width: 1180px;

  & .unsplash-qpbhshj {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  & .p {
    color: var(--white-primary);
    font-family: 'Poppins', Helvetica;
    font-size: 48px;
    font-weight: 600;
    left: 218px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 113px;
    width: 743px;
  }

  & .frame-4 {
    align-items: center;
    background-color: #ffffff;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 80px;
    justify-content: center;
    left: 480px;
    padding: 25px 30px;
    position: absolute;
    top: 306px;
    width: 220px;
  }

  & .text-wrapper-8 {
    color: var(--blue-primary);
    font-family: 'Poppins', Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }
`;

export const Banner = ({
  property1,
  className,
  unsplashClassName,
  unsplash = 'https://c.animaapp.com/3h8jrA1X/img/unsplash-q1p7bh3shj8-2.svg',
}: Props): JSX.Element => {
  return (
    <StyledBanner className={`banner ${className}`}>
      <img
        className={`unsplash-qpbhshj ${unsplashClassName}`}
        alt="Unsplash"
        src={property1 === 'variant-2' ? 'https://c.animaapp.com/3h8jrA1X/img/unsplash-q1p7bh3shj8-1.svg' : unsplash}
      />
      <p className="p">Don’t Miss The 100% Discount if You register Today</p>
      <div className="frame-4">
        <div className="text-wrapper-8">Register Today</div>
      </div>
    </StyledBanner>
  );
};

Banner.propTypes = {
  property1: PropTypes.oneOf(['variant-2', 'default']),
  unsplash: PropTypes.string,
};
