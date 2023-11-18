import styled from 'styled-components';

const StyledBanner = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 500px;
  position: relative;
  width: 1180px;

  & .unsplash-qpbhshj {
    align-self: stretch;
    flex: 1;
    flex-grow: 1;
    position: relative;
    width: 100%;
  }

  & .p {
    color: var(--white-primary);
    font-family: 'Poppins', Helvetica;
    font-size: 48px;
    font-weight: 600;
    left: 218px;
    letter-spacing: 0;
    line-height: normal;
    position: absolute;
    text-align: center;
    top: 113px;
    width: 743px;
  }

  & .frame-4 {
    align-items: center;
    background-color: #ffffff;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 40px;
    justify-content: center;
    left: 480px;
    padding: 25px 30px;
    position: absolute;
    top: 306px;
    width: 150px;
  }

  & .text-wrapper-8 {
    color: var(--blue-primary);
    font-family: 'Poppins', Helvetica;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0;
    line-height: normal;
    margin-top: -1px;
    position: relative;
    width: fit-content;
  }
`;
