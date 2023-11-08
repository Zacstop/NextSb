import React from 'react';
import { TextImageFrameStyle } from './TextImageFrame.styles';

export interface TextImageFrameProps {
  title: string;
  imageSrc: string;
}

export const TextImageFrame = ({ title, imageSrc }: TextImageFrameProps) => {
  return (
    <TextImageFrameStyle.Container>
      <TextImageFrameStyle.Image src={imageSrc}></TextImageFrameStyle.Image>
      <TextImageFrameStyle.Wrapper>{title}</TextImageFrameStyle.Wrapper>
    </TextImageFrameStyle.Container>
  );
};

export default TextImageFrame;
