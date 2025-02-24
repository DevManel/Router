import React from 'react';
import { useParams } from 'react-router-dom';

// Liste des posts
const posts = [
  { id: 1, title: "MySQL", description: "blabla", content: "Contenu MySQL..." },
  { id: 2, title: "PHP", description: "blabla", content: "Contenu PHP..." },
  { id: 3, title: "React", description: "blabla", content: "Contenu React..." },
];

function PostDetails() {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <div>Post non trouvé</div>;
  }

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <div>{post.content}</div>
    </div>
  );
}

export default PostDetails;
