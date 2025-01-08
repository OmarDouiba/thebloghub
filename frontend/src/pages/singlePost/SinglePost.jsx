import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Import useParams to get the post id from the URL

const posts = [
  {
    id: 1,
    image: '/assets/img1.jpg',
    tag: 'Technologie',
    title: 'Noteworthy technology acquisitions 2021',
    author: 'Tracey Wilson',
    date: 'August 20, 2024',
  },
  {
    id: 2,
    image: '/assets/img1.jpg',
    tag: 'Innovation',
    title: 'Emerging trends in tech 2023',
    author: 'John Doe',
    date: 'October 15, 2024',
  },
  {
    id: 3,
    image: '/assets/img1.jpg',
    tag: 'AI',
    title: 'How AI is shaping the future',
    author: 'Jane Smith',
    date: 'September 10, 2024',
  },
];

export function SinglePost() {
  const { id } = useParams(); // Get the id from the URL
  const [post, setPost] = useState(null);

  useEffect(() => {
    // Find the post based on the id
    const selectedPost = posts.find((post) => post.id === parseInt(id));
    if (selectedPost) {
      setPost(selectedPost); // Set the post in state if found
    }
  }, [id]);

  if (!post) {
    return <div>Loading or Post not found...</div>; // Show loading or post not found message
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.tag}</p>
      <p>{post.author}</p>
      <p>{post.date}</p>
      <img src={post.image} alt={post.title} />
      <p>Full post content goes here...</p>{' '}
      {/* Display the full post content */}
    </div>
  );
}
