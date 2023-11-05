import React from 'react';
import { StyledMainBanner } from './MainBanner.styles';

export interface MainBannerProps {
  imageUrl: string;
}

export const MainBanner = ({ imageUrl }: MainBannerProps) => {
  return (
    <StyledMainBanner imageUrl={imageUrl}>
      <div className="medixform" />
      <div className="main-banner-text">
        <p className="easy-fast-and">
          Easy, fast, and efficient,
          <br />
          MediXForm advances clinical success
        </p>
        <p className="no-coding-required">
          No coding required for easy CRF editing
          <br />
          Over 70% reduction in clinical preparation time
          <br />
          100% reduction in CRA&nbsp;&nbsp;query tasks
        </p>
      </div>
    </StyledMainBanner>
  );
};
