import React from 'react';
import { useParams } from 'react-router-dom';

// Liste des posts
const posts = [
  { id: 1, title: "MySQL", description: "blabla", content: "Contenu détaillé MySQL..." },
  { id: 2, title: "PHP", description: "blabla", content: "Contenu détaillé PHP..." },
  { id: 3, title: "React", description: "blabla", content: "Contenu détaillé React..." },
];

function PostDetail() {
  const { id } = useParams(); // Extraction de l'id du post dans l'URL
  const post = posts.find(post => post.id === parseInt(id)); // Recherche du post en fonction de l'id

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

export default PostDetail;
