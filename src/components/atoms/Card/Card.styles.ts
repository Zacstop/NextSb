import styled from 'styled-components';

export const CardStyle = {
  Container: styled.div`
    display: flex;
    width: 1270px;
    padding: 10px;
    align-items: center;
    gap: 60px;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
    }

    /* tablet */
    @media (max-width: 768px) {
      background-color: '';
    }
  `,

  Wrapper: styled.div`
    display: flex;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
    }
  `,

  DescriptionWrapper: styled.div`
    display: flex;
    padding: 20px;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    flex: 1 0 0;
  `,

  Title: styled.div`
    align-self: stretch;
    color: #000;
    font-family: Poppins;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    margin-bottom: 10px;

    @media (max-width: 375px) {
      display: flex;
    }
  `,

  Description: styled.div`
    display: flex;
    height: auto;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    color: rgba(0, 0, 0, 0.5);
    font-family: Poppins;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 200%; /* 40px */

    @media (max-width: 375px) {
      display: flex;
    }
  `,

  MainCard: styled.div`
    position: relative;
  `,

  CardDescription: styled.div`
    position: relative;
  `,

  XForm: styled.div`
    align-self: stretch;
    color: #000000;
    font-family: 'Poppins-SemiBold', Helvetica;
    font-size: 32px;
    font-weight: 600;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
  `,

  XFormPatented: styled.div`
    align-self: stretch;
    color: #00000080;
    font-family: 'Poppins-Regular', Helvetica;
    font-size: 20px;
    font-weight: 400;
    /* height: 241px; */
    letter-spacing: 0;
    line-height: 40px;
    position: relative;
  `,

  TextImageFrameStyle: styled.div`
    position: relative;
  `,

  TextImageFrameStyleDefault: styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 14px;
    padding: 20px;
  `,

  TextImageFrameStyleReversed: styled.div`
    background-color: #ffffff;
    border-radius: 25px;
    box-shadow: 4px 4px 25px #0000001a;
    flex: 0 0 auto;
  `,
};
