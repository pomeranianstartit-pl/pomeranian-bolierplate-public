import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { CV } from './App/CV/CV';
import { Blocks } from './App/Blocks';
import { Exercises } from './App/Exercises';
import { Calendar } from './App/Calendar/Calendar';
import { Blog } from './App/Blog/Blog';
import { FAQ } from './App/FAQ/FAQ';
import { Settings } from './App/Settings/Setttings';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="CV/*" element={<CV />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="FAQ/*" element={<FAQ />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
