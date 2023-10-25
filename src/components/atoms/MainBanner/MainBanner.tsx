import React from 'react';
import { MainBannerStyle } from './MainBanner.styles';

export const MainBanner: React.FC = () => {
  return (
    <MainBannerStyle.Container>
      <MainBannerStyle.Title>
        Easy, fast, and efficient,
        <br />
        MediXForm advances clinical success
      </MainBannerStyle.Title>
      <MainBannerStyle.Description>
        No coding required for easy
        <br />
        CRF editing Over 70% reduction in clinical preparation time
        <br />
        100% reduction in CRA query tasks
      </MainBannerStyle.Description>
    </MainBannerStyle.Container>
  );
};
