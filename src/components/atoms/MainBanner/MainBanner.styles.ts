import styled from 'styled-components';

export const MainBannerStyle = {
  Container: styled.div`
    position: relative;
    width: 100%;
    height: 950px;
    background: url('/assets/images/bg.png') no-repeat center center / cover;
  `,
  Title: styled.div`
    position: absolute;
    top: 200px;
    left: 200px;
    color: #fff;
    font-family: Poppins;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  `,
  Description: styled.div`
    position: absolute;
    top: 300px;
    left: 200px;
    width: 653px;
    height: 168px;
    color: var(--White-primary, #fff);
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 200%;
  `,
};
