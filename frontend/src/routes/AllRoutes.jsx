import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashbord, HomePage, WritePost } from '../pages';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="dashbord" element={<Dashbord />} />
      <Route path="writepost" element={<WritePost />} />
      <Route path="signin" element={<WritePost />} />
      <Route path="signup" element={<WritePost />} />
    </Routes>
  );
}
