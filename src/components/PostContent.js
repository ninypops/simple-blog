import React, { useState } from 'react';
import CommentContent from './CommentContent';

const PostContent = ({ post }) => {
    const [ toggle, isToggled ] = useState(false);

    return (
        <>
            <h4
                onClick={() => isToggled(!toggle)}
                className='post-title'
            >
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </h4>
            <button
                className='btn'
                onClick={() => isToggled(!toggle)}
            >
                Read {toggle ? 'Less' : 'More'}
            </button>
            {toggle && (
                <div className="post-body">
                {post.body}
                <CommentContent
                    key={post.id}
                    postId={post.id}/>
                </div>
            )}
        </>
    )
};

export default PostContent;