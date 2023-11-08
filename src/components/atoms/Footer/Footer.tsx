// import React from 'react';
// import { FooterStyle } from './Footer.styles';
// import { TextImageFrame } from '../ImageFrame';

// export interface FooterProps {
//   title: string;
//   des: string;
// }

// export const Footer = ({ title, des }: FooterProps) => {
//   return (
//     <FooterStyle.Container>

//     </FooterStyle.Container>
//   );
// };

// export default Footer;

import PropTypes from 'prop-types';
import React from 'react';
import { FooterStyle } from './Footer.styles';

interface Props {
  divider: string;
  element: string;
}

export const Footer = ({
  divider = 'https://c.animaapp.com/3h8jrA1X/img/divider.svg',
  element = 'https://c.animaapp.com/3h8jrA1X/img/-----------2023-08-07------1-33-1@2x.png',
}: Props): JSX.Element => {
  return (
    <FooterStyle.Container>
      <FooterStyle.Wrapper>
        <FooterStyle.FooterContainer2>
          <FooterStyle.div2>
            <FooterStyle.textWrapper9>global</FooterStyle.textWrapper9>
            <FooterStyle.textWrapper10>KubeCRO</FooterStyle.textWrapper10>
            <FooterStyle.textWrapper11>빠르고 편리한 임상플랫폼</FooterStyle.textWrapper11>
          </FooterStyle.div2>
          <FooterStyle.div2>
            <FooterStyle.textWrapper12>법인명: (주)쿠버씨알오</FooterStyle.textWrapper12>
            <FooterStyle.textWrapper13>대표이사: 조푸른솔</FooterStyle.textWrapper13>
            <FooterStyle.textWrapper13>사업자등록번호: 586-83-02564</FooterStyle.textWrapper13>
            <FooterStyle.textWrapper13>통신판매업: 2023-서울서초-2217</FooterStyle.textWrapper13>
            <FooterStyle.textWrapper13>주소: 서울 서초구 사임당로 8길 13 4층 402</FooterStyle.textWrapper13>
          </FooterStyle.div2>
          <>
            <FooterStyle.divider src={divider} />
            <FooterStyle.element src={element} />
          </>
        </FooterStyle.FooterContainer2>
      </FooterStyle.Wrapper>
    </FooterStyle.Container>
  );
};

Footer.propTypes = {
  divider: PropTypes.string,
  element: PropTypes.string,
};
