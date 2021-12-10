import React from 'react';
import './App.css';
import Burger from './components/Burger'
import { Link } from "react-router-dom";

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
  
  return (
      <div className="App">
        <Burger />        
        
      </div>
    
    
  );
}

export default App;
