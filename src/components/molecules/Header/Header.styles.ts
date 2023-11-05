import styled from 'styled-components';

type ContainerProps = {
  $containerColor?: string;
};

export const HeaderStyle = {
  Container: styled.div<ContainerProps>`
    display: flex;
    width: 100%;
    padding: 24px 60px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    position: fixed;
    gap: 10px;

    transition: background-color 1.5s ease;

    background: ${(props: ContainerProps) => props.$containerColor || 'var(--Blue-primary, #3e86f5)'};

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
  `,
  Wrapper: styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    /* mobile */
    @media (max-width: 375px) {
      display: flex;
      width: 375px;
      padding: 16px;
      justify-content: space-between;
      align-items: center;
    }
  `,
  HeaderLogo: styled.div`
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
    align-items: center;
    gap: 50px;
  `,
  Menu: styled.div`
    color: var(--White-primary, #fff);
    font-family: Poppins;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    text-align: center;

    &: hover {
      cursor: pointer;
      color: #aaa;
    }
  `,
  LoginWrapper: styled.button`
    display: flex;
    align-items: center;
    gap: 21px;
    border: 0px solid rgba(0, 0, 0, 0);
    background: rgba(255, 255, 255, 0);
  `,
  User: styled.p`
    color: #fff;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 1;
    line-height: normal;
  `,
  LoginButton: styled.div`
    display: flex;
    width: 77px;
    height: 40px;
    padding: 14px 37px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    background: var(--White-primary, #fff);
  `,
  JoinButton: styled.div`
    display: flex;
    width: 77px;
    height: 40px;
    padding: 14px 37px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 50px;
    background: var(--White-primary, #fff);
  `,
};
