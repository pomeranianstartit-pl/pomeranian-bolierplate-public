import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { NotFound } from './App/Components/NotFound/NotFound';
import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { Cv } from './App/Cv';
import { Kalendar } from './App/Kalendar';
import { Blog } from './App/Blog/Blog';
import { Faq } from './App/Faq/Faq';
import { Faq2 } from './App/Faq2/Faq2';


export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="cv/*" element={<Cv />} />
          <Route path="kalendar/*" element={<Kalendar />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="faq/*" element={<Faq />} />
          <Route path="faq2/*" element={<Faq2 />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
