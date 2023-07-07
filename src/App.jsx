import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';
import { CV } from './App/CV';
import { Settings } from './App/Settings';
import { Calendar } from './App/Calendar';
import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { FAQ } from './App/FAQ';
import { TechStack } from './App/TechStack/EmptyComponent';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="FAQ/*" element={<FAQ />} />
          <Route path="techStack/*" element={<TechStack />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
