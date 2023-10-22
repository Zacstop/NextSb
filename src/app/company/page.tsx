'use client';

import React from 'react';

import * as Styled from './style';
import Header from '@/components/atoms/Header/Header';

const menuList = [
  {
    name: 'Home',
    link: '/',
  },
  {
    name: 'Company',
    link: '/company',
  },
  {
    name: 'Contact',
    link: '/contact',
  },
];

const user = {
  name: 'kang san',
};

const Company = () => {
  const handleLogin = () => {
    console.log('login');
  };
  const handleLogout = () => {
    console.log('logout');
  };
  return (
    <Styled.Container>
      <Header
        title="Woori Bank"
        menuList={menuList}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        containerColor='"#fff"'
      />
    </Styled.Container>
  );
};

export default Company;
