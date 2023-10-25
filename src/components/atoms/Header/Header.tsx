import React from 'react';
import { HeaderStyle } from './Header.styles';
import Link from 'next/link';

type User = {
  name: string;
};

type MenuList = {
  name: string;
  link: string;
}[];

export interface HeaderProps {
  title?: string;
  menuList?: MenuList;
  user?: User | null;
  onLogin?: () => void;
  onLogout?: () => void;
  join?: () => void;
  containerColor?: string;
}

export const Header: React.FC<HeaderProps> = ({
  title,
  menuList = [],
  user,
  onLogin,
  onLogout,
  join,
  containerColor,
}: HeaderProps) => {
  return (
    <HeaderStyle.Container $containerColor={containerColor}>
      <HeaderStyle.Wrapper>
        <HeaderStyle.HeaderLogo>{title}</HeaderStyle.HeaderLogo>
        <HeaderStyle.GNB>
          {menuList.map((menu) => (
            <Link key={menu.name} href={menu.link}>
              <HeaderStyle.Menu>{menu.name}</HeaderStyle.Menu>
            </Link>
          ))}
        </HeaderStyle.GNB>
        <HeaderStyle.LoginWrapper>
          <HeaderStyle.User>{user?.name}</HeaderStyle.User>
          {user ? (
            <HeaderStyle.LoginButton onClick={onLogout}>Logout</HeaderStyle.LoginButton>
          ) : (
            <HeaderStyle.LoginButton onClick={onLogin}>Login</HeaderStyle.LoginButton>
          )}
          <HeaderStyle.JoinButton onClick={join}>join</HeaderStyle.JoinButton>
        </HeaderStyle.LoginWrapper>
      </HeaderStyle.Wrapper>
    </HeaderStyle.Container>
  );
};
