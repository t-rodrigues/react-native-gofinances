import React from 'react';
import { ThemeProvider } from 'styled-components/native';

import { AuthProvider } from './auth';

import { theme } from '@/global/styles/theme';

type Props = {
  children: React.ReactNode;
};

export function AppProvider({ children }: Props) {
  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
}
