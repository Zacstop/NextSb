import React from 'react';
import { HeaderStyle } from './Header.styles';

type User = {
  name: string;
};

export interface HeaderProps {
  user?: User;
  title: string;
  onLogin: () => void;
  onLogout: () => void;
}

export const Header = ({ user, title, onLogin, onLogout }: HeaderProps) => {
  console.log(user, onLogin, onLogout);
  return (
    <HeaderStyle.Container>
      <HeaderStyle.Wrapper>
        <HeaderStyle.WrapperLeft>{title}</HeaderStyle.WrapperLeft>
        <HeaderStyle.GNB>
          <HeaderStyle.Menus>menu1</HeaderStyle.Menus>
          <HeaderStyle.Menus>menu2</HeaderStyle.Menus>
          <HeaderStyle.Menus>menu3</HeaderStyle.Menus>
          <HeaderStyle.Menus>menu4</HeaderStyle.Menus>
        </HeaderStyle.GNB>
        <HeaderStyle.WrapperRight>
          <HeaderStyle.asdf>login</HeaderStyle.asdf>
        </HeaderStyle.WrapperRight>
      </HeaderStyle.Wrapper>
    </HeaderStyle.Container>
  );
};

export default Header;
