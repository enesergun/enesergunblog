import React, { useState, useEffect } from 'react'; 
import MarkDown from 'markdown-to-jsx';
import POSTS from '../posts/posts'


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
			<div className="post">
				<MarkDown>
					{post}
				</MarkDown>
			</div>            
		</div>
	);
}

export default Article
