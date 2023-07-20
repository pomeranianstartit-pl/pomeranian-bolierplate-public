import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Colors } from './App/Exercises/HtmlCss/Color';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { MojeCV } from './App/Components/MojeCV';
import { Bloki } from './App/Components/Bloki/Bloki';
import { Calendar } from './App/Components/Calendar';
import { FAQ } from './App/Components/FAQ';
import { Ustawienia } from './App/Components/Ustawienia/Ustawienia';
import { TechStack } from './App/TechStack';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="MojeCV/*" element={<MojeCV />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="color/*" element={<Colors />} />
          <Route path="Calendar/*" element={<Calendar />} />
          <Route path="FAQ/*" element={<FAQ />} />
          <Route path="Bloki/*" element={<Bloki />} />
          <Route path="TechStack/*" element={<TechStack />} />
          <Route path="Ustawienia/*" element={<Ustawienia />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
