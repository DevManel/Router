import React from 'react';
import { NavLink } from 'react-router-dom';

// Liste des posts
const posts = [
  { id: 1, title: "MySQL", description: "blabla", content: "" },
  { id: 2, title: "PHP", description: "blabla", content: "" },
  { id: 3, title: "React", description: "blabla", content: "" },
];

function PostsPage() {
  return (
    <div>
      <h1>Liste des posts</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            {/* Utilisation de NavLink pour la navigation */}
            <NavLink to={`/post/${post.id}`} activeClassName="active">
              {post.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsPage;
