import React, { useState, useEffect } from 'react';
import { AnimationBorder } from '../../Animation';
import { PostCard, PostsPage } from '../../components';
import axios from 'axios';

export function HomePage() {
  return (
    <main className="dark:text-white dark:bg-gray-800">
      <div className="container mx-auto max-w-7xl pl-5 pt-16">
        <header className="mb-8">
          <AnimationBorder isNav={false} isHed={true}>
            <h2 className="text-2xl font-bold">Latest Post</h2>
          </AnimationBorder>
        </header>
        <section>
          <PostsPage />
        </section>
      </div>
    </main>
  );
}
