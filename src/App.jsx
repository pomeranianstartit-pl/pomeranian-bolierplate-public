import React from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

// import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { CV } from './App/CV';
import { Exercises } from './App/Exercises';
import { Projects } from './App/Projects';
import { Calculator } from './App/Projects/Calculator/index';
import { ChangeBackgroundColor } from './App/Projects/ChangeBackgroundColor/index';
import { ApiRequestData } from './App/Projects/ApiRequestData/index';
// import { Calendar } from './App/Calendar';
// import { Settings } from './App/Settings';
import { FaQ } from './App/FAQ';
import { TechStack } from './App/Components/TechStack/TechStack';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Layout withSidebar />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard/*" element={<Dashboard />} />
          <Route path="cv/*" element={<CV />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="projects/*" element={<Projects />} />
          <Route path="projects/calculator" element={<Calculator />} />
          <Route
            path="projects/change-background-color"
            element={<ChangeBackgroundColor />}
          />
          <Route path="projects/api-request" element={<ApiRequestData />} />
          <Route path="tech-stack*" element={<TechStack />} />
          <Route path="faq/*" element={<FaQ />} />
          <Route path="about-me/*" element={<FaQ />} />
          {/* <Route path="calendar/*" element={<Calendar />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="settings/*" element={<Settings />} /> */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
