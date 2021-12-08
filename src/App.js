import React, { useState } from 'react';
import './App.css';
import BlogList from './components/BlogList'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import POSTS from './posts/posts'
import Article from './components/Article'



function App() {
  const [id, setId] = useState('')
  console.log(id)
  return (
      <div className="App">
        {
          POSTS.map((post, i) => (
            <div key={i}> 
              <Link onClick={() => setId(post.id )} to={`/${post.id}`}>{post.title}</Link>
            </div>
          ))
        }
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path={`/${id}`} element={<Article postID={id} />} />
        </Routes>
      </div>
    
    
  );
}

export default App;
