import React from 'react';
import { StyledShoeFinder } from './ShoeFinder.styles';

export interface ShoeFinderProps {}

export const ShoeFinder = () => {
  return (
    <StyledShoeFinder>
      <div className="text-wrapper">Shoe Finder Quiz</div>
    </StyledShoeFinder>
  );
};

export default ShoeFinder;
