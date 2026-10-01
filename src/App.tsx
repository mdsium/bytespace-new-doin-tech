/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Courses } from './pages/Courses';
import { CourseDetail } from './pages/CourseDetail';
import { CreatorProfile } from './pages/CreatorProfile';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';
import { NotFound } from './pages/NotFound';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/search" element={<Courses />} />
        <Route path="/course" element={<CourseDetail />} />
        <Route path="/course/:id" element={<CourseDetail />} />
        <Route path="/courses/:id" element={<CourseDetail />} />
        <Route path="/creator" element={<CreatorProfile />} />
        <Route path="/creators" element={<CreatorProfile />} />
        <Route path="/creator/:id" element={<CreatorProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
