import React from 'react';
import { useParams } from 'react-router-dom';
import blogData from './Data';

const Details = () => {
  const { id } = useParams();
  console.log(id);
  const blogPost = blogData.find(post => post.id === parseInt(id));
  console.log(blogPost);

  if (!blogPost) {
    return <div>Blog post not found.</div>;
  }

  return (
    <div>
      <h1>{blogPost.title}</h1>
      <p>By {blogPost.author} | {blogPost.date}</p>
      <img src={blogPost.image} alt={blogPost.title} />
      <p>{blogPost.content}</p>
    </div>
  );
};

export default Details;
