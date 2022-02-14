import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CommentContent = ({ postId }) => {
    const [ comments, setPostComments ] = useState([]);

    useEffect(() => {
        loadPostComments();
    }, []);

    const loadPostComments = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        const data = await response.json();
        setPostComments(data);
    };

    const StyledComments = styled.div`
        padding: 1rem;
		margin-top: 1rem;
        background: #8f9da6;
		& div.comment {
			padding: 1rem;
		}
    `;

    return (
        <StyledComments>
            Comments
            {Object.values(comments.map((comment, i) => (
                <div key={i} className="comment">
                    <strong>{comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}</strong>
                    <br />
                    <small>{comment.email}</small>
                    <br />
                    {comment.body}
                </div>
            )))}
        </StyledComments>
    )
};

export default CommentContent;