import React, { useState } from 'react';
import './App.css';
import BlogList from './components/BlogList'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import POSTS from './posts/posts'
import Article from './components/Article'



function App() {
  console.log(POSTS)
  const [id, setId] = useState('')
  return (
      <div className="App">
        <div className="posts">
        {
          POSTS.map((post, i) => (
            <div class="link" key={i}> 
              <Link onClick={() => setId(post.id )} to={`/${post.id}`}>{post.title}</Link>
            </div>
          ))
        }
        </div>
        <div className="routes">
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path={`/${id}`} element={<Article postID={id} />} />
        </Routes>
        </div>
        
      </div>
    
    
  );
}

export default App;
