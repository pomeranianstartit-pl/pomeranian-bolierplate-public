import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { NotFound } from './App/Components/NotFound/NotFound';
import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { Calendar } from './App/Calendar';
import { Blog } from './App/Blog';
import { CV } from './App/CV';
import { FAQ } from './App/FAQ';
import { TechStack } from './App/TechStack';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="calendar/*" element={<Calendar />} />
          <Route path="FAQ/*" element={<FAQ />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="techstack/*" element={<TechStack />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
