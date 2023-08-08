import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { CV } from './App/Components/CV/CV.jsx';
import { Calendar } from './App/Components/Kalendarz/Calendar';
import { Settings } from './App/Components/Ustawienia/Settings';
import { Blog } from './App/Blog/Blog';
import { FAQ } from './App/FAQ/FAQ';
import { TechStack } from './App/TechStack';
import { HitTheMoleGame } from './App/Exercises/Js/HitTheMoleGame/HitTheMoleGame.jsx';
import { MemoGame } from './App/Exercises/Js/MemoGame/MemoGame.jsx';
export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="Calendar/*" element={<Calendar />} />
          <Route path="Settings/*" element={<Settings />} />
          <Route path="Blog/*" element={<Blog />} />
          <Route path="FAQ/*" element={<FAQ />} />
          <Route path="techstack/*" element={<TechStack />} />
          <Route path="hit-the-mole/*" element={<HitTheMoleGame />} />
          <Route path="memo/*" element={<MemoGame />} />
          <Route path="form/*" element={''} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
