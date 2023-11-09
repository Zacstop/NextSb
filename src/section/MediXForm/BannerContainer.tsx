import React from 'react';
import { Banner } from '../../components/atoms/Banner';
import styled from 'styled-components';

const StyledBannerContainer = styled.div`
  height: auto;
  position: relative;
  width: auto;
  margin: 120px auto;
  display: flex;
  flex-direction: column;

  & .frame-6 {
    margin-top: 20px;
    align-items: center;
    display: inline-flex;
    /* gap: 305px; */
    /* left: 130px; */
    /* position: absolute; */
    /* top: 700px; */
  }

  & .element-kubecro-co-ltd {
    color: var(--black-75);
    font-family: 'Poppins', Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: 41.8px;
    margin-top: -1px;
    position: relative;
    white-space: nowrap;
    width: fit-content;
  }

  & .frame-7 {
    align-items: flex-start;
    display: inline-flex;
    flex: 0 0 auto;
    gap: 50px;
    position: relative;
  }

  & .text-wrapper-26 {
    color: #000000bf;
    font-family: 'Poppins', Helvetica;
    font-size: 24px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }

  & .banner-instance {
    display: inline-flex !important;
    height: unset !important;
    /* left: 130px !important; */
    /* position: absolute !important; */
    /* top: 89px !important; */
    /* width: unset !important; */
    /* width: auto;
    margin: 0px auto; */
  }

  & .banner-2 {
    align-self: unset !important;
    flex: unset !important;
    flex-grow: unset !important;
    height: 500px !important;
    width: 1180px !important;
  }
`;

export const BannerContainer = (): JSX.Element => {
  return (
    <StyledBannerContainer>
      <Banner
        className="banner-instance"
        property1="default"
        unsplash="https://c.animaapp.com/3h8jrA1X/img/unsplash-q1p7bh3shj8.svg"
        unsplashClassName="banner-2"
      />
      <div className="frame-6">
        <p className="element-kubecro-co-ltd">© 2023 KubeCRO Co.Ltd&nbsp;&nbsp;- All right reserved.</p>
        <div className="frame-7">
          <div className="text-wrapper-26">Review</div>
          <div className="text-wrapper-26">Tips</div>
          <div className="text-wrapper-26">Alerts</div>
          <div className="text-wrapper-26">Blog</div>
        </div>
      </div>
    </StyledBannerContainer>
  );
};
