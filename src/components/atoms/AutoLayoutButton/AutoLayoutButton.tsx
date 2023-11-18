import React from 'react';
import { StyledAutoLayoutButton, Icon, Label } from './AutoLayoutButton.styles';

export const AutoLayoutButton = (): JSX.Element => {
  return (
    <StyledAutoLayoutButton>
      <Icon>
        <Label>Auto Layout</Label>
      </Icon>
    </StyledAutoLayoutButton>
  );
};
