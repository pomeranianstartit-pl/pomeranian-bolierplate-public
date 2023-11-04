import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { CV } from './App/CV';
import { Calendar } from './App/Calendar';
import { Settings } from './App/Settings';
import { Blog } from './App/Blog/Blog';
import { Faq } from './App/Faq';
import { TechStack } from './App/Dashboard/TechStack';
import { MaterialUI } from './App/MaterialUI';

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
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="faq/*" element={<Faq />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="techstack/*" element={<TechStack />} />
          <Route path="material-ui/*" element={<MaterialUI />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
