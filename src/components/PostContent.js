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
            <CommentContent />
        </>
    )
};

export default PostContent;