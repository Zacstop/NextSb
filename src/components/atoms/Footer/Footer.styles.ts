import styled from 'styled-components';

export const FooterStyle = {
  Container: styled.div`
    display: flex;
    width: auto;
    margin: 0 auto;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
    }
  `,

  Wrapper: styled.div`
    display: flex;
    max-width: 1440px;
  `,

  FooterContainer2: styled.div`
    align-items: center;
    display: flex;
    flex: 1;
    flex-direction: column;
    flex-grow: 1;
    gap: 38px;
    padding: 40px 0px;
    position: relative;
  `,

  div2: styled.div`
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    gap: 20px;
    position: relative;
    width: 100%;
  `,

  textWrapper9: styled.div`
    color: #000000;
    font-family: 'Jost', Helvetica;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  `,

  textWrapper10: styled.div`
    color: #000000;
    font-family: 'Jost', Helvetica;
    font-size: 96px;
    font-weight: 700;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    text-align: center;
    width: fit-content;
  `,

  textWrapper11: styled.div`
    color: #000000;
    font-family: 'Jost', Helvetica;
    font-size: 48px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: fit-content;
  `,

  textWrapper12: styled.div`
    color: #000000;
    font-family: 'Jost', Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  `,

  textWrapper13: styled.div`
    color: #000000;
    font-family: 'Jost', Helvetica;
    font-size: 16px;
    font-weight: 400;
    letter-spacing: 0;
    line-height: normal;
    position: relative;
    width: fit-content;
  `,

  divider: styled.img`
    height: 1px;
    object-fit: cover;
    position: relative;
    width: 550px;
  `,

  element: styled.img`
    height: 51px;
    object-fit: cover;
    position: relative;
    width: 364px;
  `,
};
