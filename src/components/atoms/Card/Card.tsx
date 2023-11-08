// import React from 'react';
// import { CardStyle } from './Card.styles';
// import { TextImageFrame } from '../ImageFrame';

// export interface CardProps {
//   title: string;
//   des: string;
// }

// export const Card = ({ title, des }: CardProps) => {
//   return (
//     <CardStyle.Container>
//       <CardStyle.Wrapper>
//         <TextImageFrame title="쉽고, 편리한 시스템 환경" imageSrc="http://placehold.it/280x200"></TextImageFrame>
//         <CardStyle.DescriptionWrapper>
//           <CardStyle.Title>{title}</CardStyle.Title>
//           <CardStyle.Description>{des}</CardStyle.Description>
//         </CardStyle.DescriptionWrapper>
//       </CardStyle.Wrapper>
//     </CardStyle.Container>
//   );
// };

// export default Card;

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { TextImageFrame } from '../ImageFrame';

interface Props {
  description: string;
  title: string;
  style: 'reversed' | 'default';
}

const MainCardWrapper = styled.div`
  align-items: center;
  display: flex;
  gap: 60px;
  padding: 10px;
  position: relative;
  width: 1270px;

  & .card-description {
    position: relative;
  }

  & .x-form {
    align-self: stretch;
    color: #000000;
    font-family: 'Poppins-SemiBold', Helvetica;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
  }

  & .xform-a-patented {
    align-self: stretch;
    color: #00000080;
    font-family: 'Poppins-Regular', Helvetica;
    font-size: 20px;
    font-weight: 400;
    height: 241px;
    letter-spacing: 0;
    line-height: 40px;
    position: relative;
  }

  & .text-wrapper {
    color: #000000;
    font-family: 'Poppins-SemiBold', Helvetica;
    font-size: 18px;
    font-weight: 600;
    left: 30px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    top: 229px;
  }

  & .unsplash-k-tbabnvzho {
    height: 200px;
    left: 10px;
    position: absolute;
    top: 10px;
    width: 260px;
  }

  & .text-image-frame {
    position: relative;
  }

  & .default {
    background-color: #ffffff;
    border-radius: 25px;
    box-shadow: 4px 4px 25px#0000001a;
    flex: 0 0 auto;
  }

  & .reversed {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 14px;
    padding: 20px;
  }

  & .style-default {
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 14px;
    padding: 20px;
  }

  & .style-reversed {
    background-color: #ffffff;
    border-radius: 25px;
    box-shadow: 4px 4px 25px #0000001a;
    flex: 0 0 auto;
  }
`;

export const Card = ({
  description = 'XForm, a patented technology by kubeCRO, revolutionizes clinical trials by allowing various data formats without CRF coding, simplifying the process. \nIt enables anyone to transform CRF into ECRF, cutting preparation time by over 70%. The technology supports text, images, and videos in a user-friendly form, making it both intuitive and efficient.',
  title = 'XForm',
  style,
}: Props): JSX.Element => {
  return (
    <MainCardWrapper className={`main-card`}>
      <div className={`card-description ${style}`}>
        {style === 'reversed' && (
          <>
            <div className="x-form"> {title}</div>
            <p className="xform-a-patented">{description}</p>
          </>
        )}
        {style === 'default' && (
          <TextImageFrame title="쉽고, 편리한 시스템 환경" imageSrc="http://placehold.it/260x200"></TextImageFrame>
        )}
      </div>
      <div className={`text-image-frame style-${style}`}>
        {style === 'reversed' && (
          <TextImageFrame title="쉽고, 편리한 시스템 환경" imageSrc="http://placehold.it/260x200"></TextImageFrame>
        )}
        {style === 'default' && (
          <>
            <div className="x-form">{title}</div>
            <p className="xform-a-patented">{description}</p>
          </>
        )}
      </div>
    </MainCardWrapper>
  );
};

Card.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  style: PropTypes.oneOf(['reversed', 'default']),
};

export default Card;
