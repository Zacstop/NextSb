'use client';

import React from 'react';

import * as Styled from './style';
import Header from '@/components/atoms/Header/Header';

const Company = () => {
  const handleLogin = () => {
    console.log('login');
  };
  const handleLogout = () => {
    console.log('logout');
  };
  return (
    <Styled.Container>
      <Header title="Woori Bank" onLogin={handleLogin} onLogout={handleLogout} />;
    </Styled.Container>
  );
};

export default Company;
