import React from 'react';
import { Link } from 'react-router-dom';

export function PostCard({ posts, currPage, selectedCategory, pageSize }) {
  const filteredPosts = posts
    .filter((post) => !selectedCategory || post.category === selectedCategory)
    .slice((currPage - 1) * pageSize, currPage * pageSize);
  return (
    <>
      <Link className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredPosts.map((post) => (
          <div
            key={post.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-500 p-4 flex flex-col justify-between"
          >
            {/* Post Image */}
            <a href="#">
              <img
                className="w-full rounded-lg h-48 object-cover"
                src={post.image}
                alt={post.title}
              />
            </a>

            {/* Post Content */}
            <div className="p-4 flex flex-col flex-grow">
              {/* Category Tag */}
              <div className="mb-2">
                <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Post Title */}
              <a href="#">
                <h5 className="text-lg font-semibold text-gray-800 dark:text-gray-300 hover:underline ">
                  {post.title}
                </h5>
              </a>
            </div>

            {/* Author Section */}
            <div className="flex items-center justify-start mt-4 border-t pt-4">
              <img
                className="w-8 h-8 rounded-full"
                src={post.image}
                alt={post.author}
              />
              <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {post.author}
              </span>
            </div>
          </div>
        ))}
      </Link>
    </>
  );
}
