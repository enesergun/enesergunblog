import React, { useState, useEffect } from 'react'; 
import MarkDown from 'markdown-to-jsx';
import POSTS from '../posts/posts'
import { Link } from "react-router-dom";

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
		<div>
			<MarkDown>
				{post}
			</MarkDown>
            <Link to="/">Home</Link>
		</div>
	);
}

export default Article
