import React, { useState } from 'react';
import './App.css';
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import POSTS from './posts/posts'
import Article from './components/Article'
import styled from "styled-components";


const StyledLink = styled(Link)`
  color: White;
  text-decoration: none;
  margin: 1rem;
  position: relative;

  ${Link}:hover {
    color: rgb(204, 204, 204);
  }
`;



function App() {
  console.log(POSTS)
  const [id, setId] = useState('')
  return (
      <div className="App">
        <div className="posts">
        {
          POSTS.map((post, i) => (
            <div class="link" key={i}> 
              <StyledLink onClick={() => setId(post.id )} to={`/${post.id}`}>{post.title}</StyledLink>
            </div>
          ))
        }
        </div>
        <div className="routes">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path={`/${id}`} element={<Article postID={id} />} />
        </Routes>
        </div>
        
      </div>
    
    
  );
}

export default App;
