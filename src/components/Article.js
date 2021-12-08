import React, { useState, useEffect } from 'react'; 
import MarkDown from 'markdown-to-jsx';
import POSTS from '../posts/posts'
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: White;

  ${Link}:hover {
    color: rgb(204, 204, 204);
  }
`;

function Article(props) {
    const file_name = `${POSTS[props.postID].file}`;
    
	const [post, setPost] = useState('');

	useEffect(() => {
		import(`../posts/POSTS/${file_name}`)
			.then(res => {
				fetch(res.default)
					.then(res => res.text())
					.then(res => setPost(res));
			})
			.catch(err => console.log(err));
	});
 
	return (
		<div className="article">
			<span className="home">
				<StyledLink to="/">Home</StyledLink>	
			</span>
			<div className="post">
				<MarkDown>
					{post}
				</MarkDown>
			</div>            
		</div>
	);
}

export default Article
