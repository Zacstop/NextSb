import React from 'react';
import { StyledScrolledImg } from './ScrolledImg.styles';

export interface ScrolledImgProps {
  imageLabel?: string;
  imageUrl: string;
  width: string;
}

export const ScrolledImg = ({ imageLabel, imageUrl, width }: ScrolledImgProps) => {
  return (
    <StyledScrolledImg imageUrl={imageUrl} width={width} id="scrolled-img">
      <div className="photo" />
      <div className="text-wrapper">{imageLabel}</div>
    </StyledScrolledImg>
  );
};
