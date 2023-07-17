import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { CV } from './App/CV';
import { Exercises } from './App/Exercises';
import { Calendar } from './App/Calendar';
import { Blog } from './App/Blog';
import { FAQ } from './App/FAQ';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="CV/*" element={<CV />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="Calendar/*" element={<Calendar />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="*" element={<NotFound />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="FAQ" element={<FAQ />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
