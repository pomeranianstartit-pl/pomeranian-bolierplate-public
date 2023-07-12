import React from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';

import './styles/layout.css';
import { AppAside } from './AppAside';
import Cookies from '../Components/coockie/coockie';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}

export const Layout = ({ withSidebar }) => {
  return (
    <>
      <Cookies />
      <ErrorBoundary>
        <div className={getLayoutClassName(withSidebar)}>
          <AppHeader />
          {withSidebar && <AppAside />}
          <main>
            <Outlet />
          </main>
          <AppFooter />
        </div>
      </ErrorBoundary>
    </>
  );
};
