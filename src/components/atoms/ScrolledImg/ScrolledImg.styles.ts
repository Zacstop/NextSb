import styled from 'styled-components';

interface StyledScrolledImgProps {
  imageUrl: string;
  width: string;
}

export const StyledScrolledImg = styled.div<StyledScrolledImgProps>`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & .photo {
    height: 694px;
    object-fit: cover;
    position: relative;
    width: ${(props) => props.width};
    background-image: url(${(props) => props.imageUrl});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    transition: width 0.2s ease-out;
  }

  & .text-wrapper {
    color: #ffffff;
    font-family: 'Poppins-Bold', Helvetica;
    font-size: 64px;
    font-weight: 700;
    height: 128px;
    left: 336px;
    letter-spacing: 0;
    line-height: 128px;
    position: absolute;
    top: 346px;
    white-space: nowrap;
  }
`;
