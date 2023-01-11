import React, { useState } from 'react';
import styled from 'styled-components';
import CommentContent from './CommentContent';

const PostContent = ({ post }) => {
    const [ toggle, isToggled ] = useState(false);

    const handleClick = () => {
        isToggled(!toggle)
    };
    
    const StyledListItem = styled.li`
        padding: 1rem 0;
        border-bottom: 1px solid #8f9da6;
        & div.post-body {
            padding: 1rem 0;
        }
    `;

    const StyledButton = styled.button`
        font-weight: 700;
        text-decoration: underline;
        background: none;
        border: none;
        color: #3d97cc;
        &:hover {
            cursor: pointer;
            color: #8f9da6;
        }
    `;

    return (
        <StyledListItem>
            <h4
                onClick={handleClick}
                className='post-title'
            >
                <em>{post.title.charAt(0).toUpperCase() + post.title.slice(1)}</em>
            </h4>
            <div className="post-body">
                <em>{post.body}</em>
            </div>
            <StyledButton
                className='btn'
                onClick={handleClick}
            >
                <p><em>{toggle ? 'Hide' : 'Read'} Comments</em></p>
            </StyledButton>
            {toggle && (
                <CommentContent
                    key={post.id}
                    postId={post.id}
                />
            )}
        </StyledListItem>
    )
};

export default PostContent;