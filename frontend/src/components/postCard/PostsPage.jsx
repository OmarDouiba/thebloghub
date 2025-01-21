import React, { useEffect, useState } from 'react';
import { PostCard } from './PostCard';
import { Pagination } from './Pagination';
import { CategorySelection } from '../category/CategorySelection';

export function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const pageSize = 12;
  const [activeCategory, setActiveCategory] = useState(null);

  async function fetchPosts(page = 1, category = '') {
    let url = `http://localhost:3000/posts?page=${page}$limit=${pageSize}`;
    try {
      if (selectedCategory) {
        url += `&category=${selectedCategory}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  }

  useEffect(() => {
    fetchPosts();
  }, [currPage, selectedCategory, pageSize]);

  const handlePageChange = (pageNumber) => {
    setCurrPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrPage(1);
    setActiveCategory(category);
  };

  return (
    <div className="sm:flex py-5">
      <div className="pb-5 mx-5">
        <CategorySelection
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>
      <div className="flex items-center flex-col mx-5">
        <div>
          <PostCard
            posts={posts}
            currPage={currPage}
            selectedCategory={selectedCategory}
            pageSize={pageSize}
          />
        </div>
        <div>
          <Pagination
            onPageChange={handlePageChange}
            currPage={currPage}
            posts={posts}
            pageSize={pageSize}
          />
        </div>
      </div>
    </div>
  );
}
