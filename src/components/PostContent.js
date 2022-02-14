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
        text-decoration: none;
        background: none;
        border: none;
        color: #3d97cc;
        padding: .5rem 0;
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
                {post.title.charAt(0).toUpperCase() + post.title.slice(1)}
            </h4>
            <StyledButton
                className='btn'
                onClick={handleClick}
            >
                Read {toggle ? 'Less' : 'More'}
            </StyledButton>
            {toggle && (
                <div className="post-body">
                    {post.body}
                    <CommentContent
                        key={post.id}
                        postId={post.id}
                    />
                </div>
            )}
        </StyledListItem>
    )
};

export default PostContent;