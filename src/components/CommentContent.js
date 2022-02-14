import React, { useEffect, useState } from 'react';

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
    return (
        <>
            Comments
            {Object.values(comments.map((comment, i) => (
                <div key={i}>
                    <div className="comment">
                        <strong>{comment.name.charAt(0).toUpperCase() + comment.name.slice(1)}</strong>
                        <br />
                        <small>{comment.email}</small>
                        <br />
                        {comment.body}
                    </div>
                </div>
            )))}
        </>
    )
};

export default CommentContent;