import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';
import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { CV } from './App/CV';
import { Exercises } from './App/Exercises';
import { Kalendarz } from './App/Kalendarz';
import { Ustawienia } from './App/Ustawienia';
import { Faq } from './App/Faq';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="kalendarz/*" element={<Kalendarz />} /> 
          <Route path="ustawienia/*" element={<Ustawienia />} />
          <Route path="*" element={<NotFound />} />
          <Route path="faq/*" element={<Faq />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
