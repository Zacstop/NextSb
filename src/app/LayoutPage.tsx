// components/layouts/PageLayout.tsx
import React, { useEffect, useState } from 'react';
import { Header, MainBanner } from '@/components/atoms';
import { Wrapper } from './styles';

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
    name: 'Mpp',
    link: '/mpp',
  },
];

const user = {
  name: 'kang san',
};

interface LayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLogin = () => {
    console.log('login');
  };

  const handleLogout = () => {
    console.log('logout');
  };

  const handleJoin = () => {
    console.log('join');
  };

  return (
    <Wrapper>
      <MainBanner />
      <Header
        title="En-velops"
        menuList={menuList}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        join={handleJoin}
        containerColor={isScroll ? '#3e86f5' : 'transparent'}
      />
      <main>{children}</main>
    </Wrapper>
  );
};

export default LayoutPage;
