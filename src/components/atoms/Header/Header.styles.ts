import styled from 'styled-components';

export const HeaderStyle = {
  Container: styled.div`
    display: flex;
    width: 100%;
    height: auto;
    padding: 24px 130px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background: #3e86f5;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
      width: 375px;
      padding: 16px;
      justify-content: space-between;
      align-items: center;
      background: #fff;
      box-shadow:
        0px 1px 3px 0px rgba(16, 24, 40, 0.1),
        0px 1px 2px -1px rgba(16, 24, 40, 0.1);
    }

    /* tablet */
    @media (max-width: 768px) {
      background-color: '';
    }
  `,
  Wrapper: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 160px;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
      width: 375px;
      padding: 16px;
      justify-content: space-between;
      align-items: center;
    }
  `,
  WrapperLeft: styled.div`
    color: #fff;
    font-family: Work Sans;
    font-size: 34px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.68px;

    /* mobile */
    @media (max-width: 375px) {
      color: rgba(0, 0, 0, 0.75);
      font-family: Work Sans;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.4px;
    }
  `,
  GNB: styled.div`
    display: flex;
    align-items: flex-start;
    gap: 50px;
  `,
  Menus: styled.p`
    color: #fff;
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  `,
  WrapperRight: styled.button`
    width: 141px;
    height: 65px;
    flex-shrink: 0;
    border-radius: 10px;
    background: var(--White-primary, #fff);
    border: none;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
      width: 24px;
      height: 24px;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
    }
  `,
  asdf: styled.p`
    color: var(--Blue-primary, #3e86f5);
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 1;
    line-height: normal;
  `,
};
