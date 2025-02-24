import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PostsPage from './components/PostsPage';
import PostDetail from './components/PostsDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PostsPage />} />
          <Route path="/post/:id" element={<PostDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
