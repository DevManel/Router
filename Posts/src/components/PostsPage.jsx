import React from 'react';
import { Link } from 'react-router-dom';

// Liste des posts
const posts = [
  { id: 1, title: "MySQL", description: "blabla", content: "Contenu MySQL..." },
  { id: 2, title: "PHP", description: "blabla", content: "Contenu PHP..." },
  { id: 3, title: "React", description: "blabla", content: "Contenu React..." },
];

function PostsPage() {
  return (
    <div>
      <h1>Liste des posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;
