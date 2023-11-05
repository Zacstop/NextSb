import React from 'react';
// import { ShoppingBag } from ''./ShoppingBag';
// import { User } from ''./User';
import { StyledCommerceLink } from './CommerceLink.styles';

export const Link = (): JSX.Element => {
  return (
    <StyledCommerceLink>
      <div className="text-wrapper">Support</div>
      {/* <User className="icons-black-unfill" />
      <ShoppingBag className="icons-black-unfill" /> */}
    </StyledCommerceLink>
  );
};
