import React from 'react';
import { Outlet } from 'react-router-dom';
import Cookies from '../Components/CookiesAgreements/Cookies';
import Avatar from '../Components/Avatar/Avatar';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';

import './styles/layout.css';
import { AppAside } from './AppAside';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}

export const Layout = ({ withSidebar }) => {
  return (
    <ErrorBoundary>
      <Cookies />
      <Avatar />
      <div className={getLayoutClassName(withSidebar)}>
        <AppHeader />
        {withSidebar && <AppAside />}
        <main>
          <Outlet />
        </main>
        <AppFooter />
      </div>
    </ErrorBoundary>
  );
};
