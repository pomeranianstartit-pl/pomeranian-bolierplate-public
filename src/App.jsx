import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { Calendar } from './App/Calendar';
import { FAQ } from './App/FAQ';
import { CV } from './App/Cv';
import { Blog } from './App/Blog';
import { TechStack } from './App/TechStack';
import { MaterialUI } from './App/MaterialUI';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="*" element={<NotFound />} />
          <Route path="FAQ/*" element={<FAQ />} />
          <Route path="TechStack/*" element={<TechStack />} />
          <Route path="MaterialUI/*" element={<MaterialUI />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
