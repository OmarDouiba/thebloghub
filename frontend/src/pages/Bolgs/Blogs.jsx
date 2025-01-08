import React from 'react';
import { AnimationBorder } from '../../Animation';
import { PostCard } from '../../components';

export function Blogs() {
  return (
    <div>
      <div className="py-20 text-center px-4 dark:text-white dark:bg-gray-900 border-b-2">
        <AnimationBorder isNav={false} keyValue="about-heading">
          <h2 className="text-5xl lg:text-7xl leading-snug font-bold mb-5 pb-5 inline-block">
            Blogs
          </h2>
        </AnimationBorder>
      </div>
      <div className="container mx-auto max-w-5xl">
        <PostCard></PostCard>
      </div>
    </div>
  );
}
