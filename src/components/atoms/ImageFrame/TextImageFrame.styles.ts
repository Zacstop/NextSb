import styled from 'styled-components';

export const TextImageFrameStyle = {
  Container: styled.div`
    display: inline-flex;
    padding: 10px 10px 0px 10px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 25px;
    background-color: #ffffff;
    box-shadow: 4px 4px 25px 0px rgba(0, 0, 0, 0.1);

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
    }

    /* tablet */
    @media (max-width: 768px) {
      background-color: '';
    }
  `,

  Image: styled.img`
    display: flex;
    border-radius: 25px;
  `,

  Wrapper: styled.div`
    color: #000;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin: 10px 10px 20px;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
    }
  `,
};
