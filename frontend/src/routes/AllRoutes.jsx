import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {
  Dashbord,
  HomePage,
  WritePost,
  UserAuthForm,
  SinglePost,
  About,
  Contact,
  Blogs,
} from '../pages';

export default function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="dashbord" element={<Dashbord />} />
      <Route path="signin" element={<UserAuthForm type={'sign-in'} />} />
      <Route path="writepost" element={<WritePost />} />
      <Route path="/singlePost" element={<SinglePost />} />
      <Route path="/singlePost/:id" element={<SinglePost />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/blog" element={<Blogs />} />
      <Route path="signup" element={<UserAuthForm type={'sign-up'} />} />
    </Routes>
  );
}
