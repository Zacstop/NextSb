'use client';

import StyledComponentsRegistry from './lib/registry';
import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from '@/common/styles/global';
import { theme } from '@/common/styles/theme';

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <html lang="en">
    {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
    <head />
    <body>
      <StyledComponentsRegistry>
        <>
          <GlobalStyles />
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </>
      </StyledComponentsRegistry>
    </body>
  </html>
);

export default RootLayout;
