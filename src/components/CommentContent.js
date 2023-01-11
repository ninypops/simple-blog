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
        border-top: 1px solid #000;
		& div.comment {
			padding: 1rem;
            margin-top: 2rem;
            border-left: 2px solid #ccc;
		}
        & h4, p {
            margin: 0;
        }
    `;

    return (
        <StyledComments>
            <h3><em>Comments</em></h3>
            {Object.values(comments.map((comment, i) => (
                <div key={i} className="comment">
                    <h4><strong><em>{comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}</em></strong></h4>
                    <br />
                    <p><em>"{comment.body}"</em></p>
                    <br />
                    <p><small><em>Posted by {comment.email}</em></small></p>
                </div>
            )))}
        </StyledComments>
    )
};

export default CommentContent;