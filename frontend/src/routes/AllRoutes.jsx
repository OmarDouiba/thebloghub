import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Dashbord, HomePage, WritePost, UserAuthForm } from '../pages';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="dashbord" element={<Dashbord />} />
      <Route path="writepost" element={<WritePost />} />
      <Route path="signin" element={<UserAuthForm type={'sign-in'} />} />
      <Route path="signup" element={<UserAuthForm type={'sign-up'} />} />
    </Routes>
  );
}
