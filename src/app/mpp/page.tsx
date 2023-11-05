'use client';

import React from 'react';
import * as Styled from './style';
import LayoutPage from '../LayoutPage';
import { MainBanner } from '@/components/atoms';

const Mpp = () => {
  return (
    <LayoutPage>
      <Styled.Container></Styled.Container>
      <MainBanner imageUrl="/assets/images/bg.png" />
    </LayoutPage>
  );
};

export default Mpp;
