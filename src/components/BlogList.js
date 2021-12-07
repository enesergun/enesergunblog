import React, { useState, useEffect } from 'react'; 
import MarkDown from 'markdown-to-jsx';
import Article from './Article' 
import POSTS from '../posts/posts'


function BlogList() {
        
    return (
        <div>
            {
                POSTS.map((post)=> (
                    <div>{post.title}</div>
                ))
            }
        </div>
    )
}

export default BlogList
