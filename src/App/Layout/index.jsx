import React from 'react';
import { Outlet } from 'react-router-dom';
import { useState } from 'react';
import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';
import Cookies from '../Components/Cookies/Cookies';
import './styles/layout.css';
import { AppAside } from './AppAside';

function getLayoutClassName(withSidebar) {
  return withSidebar ? 'layout with-sidebar' : 'layout';
}

export const Layout = ({ withSidebar }) => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);
  return (
    <ErrorBoundary>
      <Cookies />
      <div className={getLayoutClassName(withSidebar)}>
        <AppHeader
          toggleMenuVisibility={() => setMenuIsVisible(!menuIsVisible)}
        />
        {withSidebar && <AppAside menuIsVisible={menuIsVisible} />}
        <main>
          <Outlet />
        </main>
        <AppFooter />
      </div>
    </ErrorBoundary>
  );
};
