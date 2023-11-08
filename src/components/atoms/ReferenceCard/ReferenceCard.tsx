// import PropTypes from 'prop-types';
// import React from 'react';
// import styled from 'styled-components';
// import { TextImageFrame } from '../ImageFrame';

// interface Props {
//   description: string;
//   title: string;
//   style: 'reversed' | 'default';
// }

// export const ReferenceCard = ({
//   description = 'XForm, a patented technology by kubeCRO, revolutionizes clinical trials by allowing various data formats without CRF coding, simplifying the process. \nIt enables anyone to transform CRF into ECRF, cutting preparation time by over 70%. The technology supports text, images, and videos in a user-friendly form, making it both intuitive and efficient.',
//   title = 'XForm',
//   style,
// }: Props): JSX.Element => {
//   return (
//     <div></div>
//   );
// };

// export default ReferenceCard;

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

interface Props {
  property1: 'variant-2' | 'default';
  className: unknown;
  unsplash: string;
}

const StyledReferenceCard = styled.div`
  align-items: center;
  background-color: #ffffff;
  border-radius: 50px;
  box-shadow: 0px 0px 6px #0000000d;
  display: inline-flex;
  flex-direction: column;
  gap: 23px;
  padding: 24px;
  position: relative;

  & .image-container {
    align-items: center;
    border-radius: 50px;
    display: flex;
    flex: 0 0 auto;
    gap: 20px;
    position: relative;
    width: 340px;

    & .unsplash {
      height: 273px;
      position: relative;
      width: 293px;
    }

    & .div {
      color: var(--black-75);
      font-family: 'Poppins', Helvetica;
      font-size: 18px;
      font-weight: 500;
      letter-spacing: 9px;
      line-height: normal;
      margin-right: -82.5px;
      position: relative;
      transform: rotate(90deg);
      width: fit-content;
    }
  }

  & .text-container {
    align-items: center;
    border-radius: 50px;
    display: inline-flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    position: relative;

    & .text-wrapper-2 {
      align-items: flex-start;
      display: flex;
      flex: 0 0 auto;
      gap: 10px;
      position: relative;
      width: 293px;

      & .frame {
        align-items: flex-start;
        display: inline-flex;
        flex: 0 0 auto;
        gap: 8px;
        position: relative;

        & .div-wrapper {
          align-items: center;
          background-color: #fcddec;
          border-radius: 100px;
          display: inline-flex;
          flex: 0 0 auto;
          gap: 10px;
          justify-content: center;
          overflow: hidden;
          padding: 0px 11px;
          position: relative;

          & .text-wrapper-3 {
            color: var(--fuschia-80);
            font-family: 'Poppins', Helvetica;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: normal;
            margin-top: -1px;
            position: relative;
            width: fit-content;
          }
        }

        & .frame-2 {
          align-items: flex-start;
          display: inline-flex;
          flex: 0 0 auto;
          gap: 12px;
          position: relative;

          & .text-wrapper-4 {
            color: var(--black-75);
            font-family: 'Poppins', Helvetica;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: normal;
            margin-top: -1px;
            position: relative;
            width: fit-content;
          }
        }
      }

      & .frame-wrapper {
        align-items: flex-start;
        display: inline-flex;
        flex: 0 0 auto;
        gap: 40px;
        position: relative;

        & .frame-3 {
          align-items: center;
          background-color: #f1f1fd;
          border-radius: 100px;
          display: inline-flex;
          flex: 0 0 auto;
          gap: 10px;
          justify-content: center;
          overflow: hidden;
          padding: 0px 11px;
          position: relative;

          & .text-wrapper-5 {
            color: var(--iris-80);
            font-family: 'Poppins', Helvetica;
            font-size: 14px;
            font-weight: 500;
            letter-spacing: 0;
            line-height: normal;
            margin-top: -1px;
            position: relative;
            width: fit-content;
          }
        }
      }
    }

    & .text-wrapper-6 {
      color: var(--black-primary);
      font-family: 'Poppins', Helvetica;
      font-size: 24px;
      font-weight: 600;
      letter-spacing: 0;
      line-height: normal;
      position: relative;
      width: 293px;
    }

    & .study {
      color: transparent;
      font-family: 'Poppins', Helvetica;
      font-size: 24px;
      font-weight: 500;
      letter-spacing: 0;
      line-height: normal;
      position: relative;
      width: 293px;

      & .span {
        color: #000000;
      }

      & .text-wrapper-7 {
        color: #00000080;
        font-size: 18px;
      }
    }
  }
`;

export const ReferenceCard = ({
  property1,
  className,
  unsplash = 'https://c.animaapp.com/3h8jrA1X/img/unsplash-7uxn7nudorc-4.svg',
}: Props): JSX.Element => {
  return (
    <StyledReferenceCard className={`referece-card ${className}`}>
      <div className="image-container">
        <img
          className="unsplash"
          alt="Unsplash"
          src={property1 === 'variant-2' ? 'https://c.animaapp.com/3h8jrA1X/img/unsplash-7uxn7nudorc-3.svg' : unsplash}
        />
        <div className="div">14 FEB 2020</div>
      </div>
      <div className="text-container">
        <div className="text-wrapper-2">
          <div className="frame">
            <div className="div-wrapper">
              <div className="text-wrapper-3">PMS</div>
            </div>
            <div className="frame-2">
              <div className="text-wrapper-4">6</div>
            </div>
          </div>
          <div className="frame-wrapper">
            <div className="frame">
              <div className="frame-3">
                <div className="text-wrapper-5">Vecsin</div>
              </div>
              <div className="frame-2">
                <div className="text-wrapper-4">1</div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-wrapper-6">글로벌 제약사 G**</div>
        <p className="study">
          <span className="span">Study</span>
          <span className="text-wrapper-7">/7</span>
        </p>
      </div>
    </StyledReferenceCard>
  );
};

ReferenceCard.propTypes = {
  property1: PropTypes.oneOf(['variant-2', 'default']),
  unsplash: PropTypes.string,
};
