import React from 'react';
import { NavLink } from 'react-router-dom';

export function PostCard({ Image, tag, title, author, date, fun }) {
  return (
    <div
      className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-4"
      onClick={() => fun()}
    >
      <a href="#">
        <img className="rounded-lg" src={Image} alt="post image" />
      </a>
      <div className="py-5 px-3">
        {/* Tag */}
        <div className="bg-blue-100 inline-block px-2 py-1 rounded-full mb-3">
          <span className="text-[#4B6BFB]">{tag}</span>
        </div>
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {title}
          </h5>
        </a>
        {/* Author and Date */}
        <div className="flex items-center space-x-4">
          <a className="flex items-center space-x-3">
            <img
              className="w-8 h-8 rounded-full"
              src={Image}
              alt="Author Tracey Wilson"
            />
            <p className="text-gray-500">{author}</p>
          </a>
          <p className="text-gray-500">{date}</p>
        </div>
      </div>
    </div>
  );
}
