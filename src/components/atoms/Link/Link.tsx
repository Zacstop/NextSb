import React from 'react';
import { StyledLink } from './Link.styles';
import { ShoeFinder } from '../ShoeFinder';

type menuList = {
  name: string;
  link: string;
}[];

export interface LinkProps {
  menuList: menuList;
}

export const Link = ({ menuList = [] }: LinkProps) => {
  return (
    <StyledLink>
      {menuList.map((menu) => (
        <div className="text-wrapper" key={menu.name}>
          {menu.name}
        </div>
      ))}
      <ShoeFinder />
    </StyledLink>
  );
};
