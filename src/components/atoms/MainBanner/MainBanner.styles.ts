import styled from 'styled-components';

interface StyledMainBannerProps {
  imageUrl: string;
}

export const StyledMainBanner = styled.div<StyledMainBannerProps>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  background-image: url(${(props) => props.imageUrl});

  & .medixform {
    height: 950px;
    object-fit: cover;
    position: relative;
    width: 100%;
  }

  & .main-banner-text {
    align-items: flex-start;
    display: inline-flex;
    flex-direction: column;
    gap: 10px;
    left: 38px;
    padding: 0px 67px;
    position: absolute;
    top: 152px;
  }

  & .easy-fast-and {
    color: #ffffff;
    font-family: 'Poppins-SemiBold', Helvetica;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: 827px;
  }

  & .no-coding-required {
    color: var(--white-primary);
    font-family: 'Poppins-Medium', Helvetica;
    font-size: 24px;
    font-weight: 500;
    height: 168px;
    letter-spacing: 0;
    line-height: 48px;
    position: relative;
    width: 653px;
  }
`;
