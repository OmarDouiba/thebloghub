import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import { PostCard } from '../../components';
import axios from 'axios';

export function HomePage() {

  
  return (
    <main className="px-8 mt-16">
      <div className="container mx-auto max-w-5xl">
        <header className="mb-8">
          <h2 className="text-2xl font-bold">Latest Post</h2>
        </header>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              Image={post.image}
              tag={post.tag}
              title={post.title}
              author={post.author}
              date={post.date}
              fun={() => goToPostPage(post.id)}
            />
          ))}
        </section>
      </div>
    </main>
  );
}
