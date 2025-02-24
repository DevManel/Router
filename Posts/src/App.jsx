import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PostsPage from './components/PostsPage';
import PostDetail from './components/PostsDetails';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PostsPage />} />
        <Route path="/post/:id" element={<PostDetail />} />
      </Routes>
    </div>
  );
}

export default App;
