import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { AppCookies } from './AppCookies';
import { ErrorBoundary } from './ErrorBoundary';

import './styles/layout.css';
import { AppAside } from './AppAside';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}

export const Layout = ({ withSidebar }) => {
  return (
    <ErrorBoundary>
      <div className={getLayoutClassName(withSidebar)}>
        <AppHeader />
        {withSidebar && <AppAside />}
        <main>
          <Outlet />
        </main>
        <AppFooter />
        <AppCookies />
      </div>
    </ErrorBoundary>
  );
};
