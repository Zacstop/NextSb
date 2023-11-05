// components/layouts/PageLayout.tsx
import React, { useEffect, useState } from 'react';
import { Header } from '@/components/molecules';
import { Wrapper } from './styles';
import { MainBanner } from '@/components/atoms';
// import { ScrolledImg } from '@/components/atoms';

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
  name: 'username',
};

interface LayoutPageProps {
  children: React.ReactNode;
}

const LayoutPage: React.FC<LayoutPageProps> = ({ children }) => {
  const [isScroll, setIsScroll] = useState(false);
  // const [width, setWidth] = useState(1170);

  useEffect(() => {
    const handleScroll = () => {
      setIsScroll(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const rect = document.getElementById('scrolled-img')?.getBoundingClientRect();
  //     if (!rect) return;

  //     const centerY = window.innerHeight / 2;
  //     const distanceFromCenter = Math.abs(centerY - (rect.top + rect.height / 2));

  //     // 화면의 넓이를 기반으로 scaleFactor를 조절하여 이미지가 양쪽까지 크게 채워지도록 함
  //     const scaleFactor = distanceFromCenter < centerY ? 1 + (1 - distanceFromCenter / centerY) : 1;
  //     const newWidth = Math.max(1170 * scaleFactor, 1170);

  //     setWidth(newWidth);
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   handleScroll();

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

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
      <MainBanner imageUrl="/assets/images/bg.png" />
      <Header
        title="Woori Bank"
        menuList={menuList}
        user={user}
        onLogin={handleLogin}
        onLogout={handleLogout}
        join={handleJoin}
        containerColor={isScroll ? '#3e86f5' : 'transparent'}
      />
      {/* <ScrolledImg imageLabel={'adasdfas'} imageUrl={'/assets/images/bg.png'} width={`${width}px`} /> */}
      <main>{children}</main>
    </Wrapper>
  );
};

export default LayoutPage;
