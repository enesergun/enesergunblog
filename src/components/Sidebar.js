import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import POSTS from '../posts/posts'
import styled from "styled-components";
import { slide as Menu } from 'react-burger-menu'
import RouteComponent from './RouteComponent'

const StyledLink = styled(Link)`
  color: White;
  text-decoration: none;
  margin: 1rem;
  position: relative;

  ${Link}:hover {
    color: rgb(204, 204, 204);
  }
`;


function Sidebar() {
    const [title, setTitle] = useState('');
    const [id, setId] = useState('');
    const [windowWidth, setWindowWidth] = useState('')

    const handleResize = (e) => {
        setWindowWidth(window.innerWidth);
    };
    
    useEffect(() => {
        window.addEventListener("resize", handleResize)
    });
    
    // 783

    console.log(typeof(windowWidth))
    console.log(windowWidth);
    return (
        <>
            {
            Number(windowWidth) <= 783 ?
            <Menu>
                <div className="posts">
            {
                POSTS.map((post, i) => (
                <div className="link" key={i}> 
                    <StyledLink onClick={() => {setTitle(post.title );setId(post.id)}} to={`/${post.title}`}>{post.title}</StyledLink>
                </div>
                ))
            }
            </div>
            </Menu> :
            <div className="posts">
            {
                POSTS.map((post, i) => (
                <div className="link" key={i}> 
                    <StyledLink onClick={() => {setTitle(post.title );setId(post.id)}} to={`/${post.title}`}>{post.title}</StyledLink>
                </div>
                ))
            }
            </div>
            }
            <div className="col"></div>
            <RouteComponent title={title} id={id} />
        </>
        
    )
}

export default Sidebar
