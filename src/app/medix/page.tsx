'use client';

import React from 'react';
import styled from 'styled-components';
// import { Banner } from '../../components/atoms/Banner/Banner';
import { Footer } from '../../components/atoms/Footer/Footer';
// import { Header } from '../../components/atoms/Header/Header';
import { Header } from '@/components/molecules';
import { MediXform } from '@/section/MediXForm/MediXForm';
import { ReferenceContainer } from '@/section/MediXForm/Reference';
import { BannerContainer } from '@/section/MediXForm/BannerContainer';
// import { MediXform } from '../../components/atoms/MediXform/MediXform';
// import { MedixformIntro } from './';
// import { ReferenceContainer } from './';
// import { Title } from './';

const StyledMediXForm = styled.div`
  align-items: flex-start;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 88px;
  width: 100%;
  height: 100%;
`;

export const MediX = (): JSX.Element => {
  return (
    <StyledMediXForm>
      <Header />
      <Box>
        {/* <Title /> */}
        {/* <MedixformIntro /> */}
        <MediXform />
        <ReferenceContainer />
        <BannerContainer />
        <Footer
          divider="https://c.animaapp.com/3h8jrA1X/img/divider-1.svg"
          element="https://c.animaapp.com/3h8jrA1X/img/-----------2023-08-07------1-33-1-1@2x.png"
        />
      </Box>
    </StyledMediXForm>
  );
};

export default MediX;

// pmpm monowrapper
// import React from 'react'; import * as Styled from './style'; // import Header from '@/components/atoms/Header/Header'; import Header from '@/components/atoms/Header/Header'; import { Card } from '@/components/atoms/Card'; const MediX = () => { const handleLogin = () => { console.log('login'); }; const handleLogout = () => { console.log('logout'); }; return ( <Styled.Container> <Header title="Woori Bank" onLogin={handleLogin} onLogout={handleLogout} menuList={[]} user={null} /> <Card title="XForm" des="XForm, a patented technology by kubeCRO, revolutionizes clinical trials by allowing various data formats without CRF coding, simplifying the process. It enables anyone to transform CRF into ECRF, cutting preparation time by over 70%. The technology supports text, images, and videos in a user-friendly form, making it both intuitive and efficient." ></Card> </Styled.Container> ); }; export default MediX;
