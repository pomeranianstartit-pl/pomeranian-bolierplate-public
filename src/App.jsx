import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Blog } from './App/Blog/Blog';
import { Exercises } from './App/Exercises';
import { CV } from './App/CV';
import { Calender } from './App/Calender';
import { Settings } from './App/Settings';
import { Techstack } from './App/Techstack';
import { MaterialUI } from './App/MaterialUI';
import { Faq } from './App/Faq';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="calender/*" element={<Calender />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="techstack/*" element={<Techstack />} />
          <Route path="material-ui/*" element={<MaterialUI />} />
          <Route path="faq/*" element={<Faq />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
